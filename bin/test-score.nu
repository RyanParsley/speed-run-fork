#!/usr/bin/env nu
def main [] {
  # This is the syntax to run arbitrary commands
  run-external "npx" "nx" "test" "speed-run"

  # We get a value from the unit test artifact for scoring
  let testScore = calculateTestScore (open speed-run-jest-output.json | get numPassedTests)
  let timeScore = 1000
  let lintModifier = calculateLintModifier
  let total = $timeScore + $testScore - $lintModifier - $compilerModifier

  { timeScore: $timeScore, testScore: $testScore, lintModifier: $lintModifier, total: $total } | save dist/apps/score.json -f
}

def calculateTestScore [rawValue] {
  # 100 points for each passing test is a naive yet reasonable starting point
  $rawValue * 100
}

def calculateLintModifier [] {
  let results = npx nx run speed-run:lint | grep -w problem

  if ($results | is-empty) { return 0 }

  # Linter returns something like:
  # ✖ 1 problem (0 errors, 1 warning)
  # so we can parse it like so...

  let parsed = $results | parse '{_} {total} {_} {error} {_} {warning} {_}' | select error warning | update error {|row| $row.error | str replace '(' '' }

  let errorScore = ($parsed.error | into int | first | $in * 50)
  let warningScore = ($parsed.warning | into int | first | $in * 20)

  ($errorScore + $warningScore)
}
