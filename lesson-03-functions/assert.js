function assertEquals(actual, expected, message ) {
  const PASS = "PASS"
  const FAILED = "FAILED"

  let result = expected === actual
  logResult(result, message)

  function logResult (res, mes) {
    let log = res ? PASS : FAILED
    log += ": " +  mes
    console.log(log)
  }

}
