#!/usr/bin/env nu
def main [] {
  # This is the syntax to run arbitrary commands
  run-external "npx" "nx" "test" "speed-run"

  # We get a value from the unit test artifact for scoring
  let testScore = calculateScore (open speed-run-jest-output.json | get numPassedTests)
  # let compilerModifier = calculateCompilerModifier
  let compilerModifier = 200
  let timeScore = 1000
  let lintModifier = 300
  let total = $timeScore + $testScore - $lintModifier - $compilerModifier

  { timeScore: $timeScore, testScore: $testScore, lintModifier: $lintModifier, compilerModifier: $compilerModifier, total: $total } | save dist/score.json -f
}

def calculateScore [rawValue] {
  # 100 points for each passing test is a naive yet reasonable starting point
  $rawValue * 100
}

def calculateCompilerModifier [] {
  let count = npx tsc --project apps/speed-run/tsconfig.app.json --noEmit --pretty | grep -w Found | split column ' ' | select column2 | values | first
  $count * 20
}
