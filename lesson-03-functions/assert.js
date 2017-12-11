function assertEquals(actual, expected, message ) {
  const PASS = "PASS"
  const FAILED = "FAILED"

  let result = expected === actual
  let prefix = result ? PASS : FAILED
  let info = prefix + ": " +  message
  console.log(info)

}
