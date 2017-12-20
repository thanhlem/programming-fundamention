'use strict'

let prefixes = {
  pass: "PASS",
  failed: "FAILED"
}

function assertEquals(actual, expected, message ) {
  let result = expected === actual
  console.log(renderTestResult(result, message))

}

function assertNotEqual(actual, expected, message ) {
  let result = expected !== actual
  console.log(renderTestResult(result, message))
}

function renderTestResult(result, message) {
  let prefix = result ? prefixes.pass : prefixes.failed
  return `${prefix}: ${message}`
}
