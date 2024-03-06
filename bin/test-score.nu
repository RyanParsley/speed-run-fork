#!/usr/bin/env nu
def main [] {
  npx nx run-many --target=test --all

  # We get a value from the unit test artifact for scoring
  let testScore = calculateTestScore
  let timeScore = 1000
  let lintModifier = calculateLintModifier
  let total = $timeScore + $testScore - $lintModifier

  { timeScore: $timeScore, testScore: $testScore, lintModifier: $lintModifier, total: $total } | save static/score.json -f
}

def calculateTestScore [] {
  let passingTests = ls dist/testScores | each { | file | $file.name | open | get numPassedTests } | math sum
  # 100 points for each passing test is a naive yet reasonable starting point
  $passingTests * 100
}

def calculateLintModifier [] {
  let results = npx nx run-many --target=lint --all --verbose  | grep problem | lines

  if ($results | is-empty) { return 0 }

  parseLintResults $results
}

def parseLintResults [results: list<string>] {
  # Linter returns something like:
  # ✖ 1 problem (0 errors, 1 warning)
  # so we can parse it like so...

  let parsed = $results | parse '{_} {total} {_} {error} {_} {warning} {_}' | select error warning | update error {|row| $row.error | str replace '(' '' }

  let errorScore = $parsed | get error | into int | math sum | $in * 50 | default 0
  let warningScore = $parsed | get warning | into int | math sum | $in * 20

  $errorScore + $warningScore

}

use std assert

#[test]
def test_lint_parsing [] {
  let input = ['✖ 1 problem (0 errors, 1 warning)','✖ 2 problems (1 errors, 1 warning)']
  let assertion = 90

  assert equal (parseLintResults $input) $assertion
}
