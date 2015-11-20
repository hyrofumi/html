window.APPS_NAME = window.APPS_NAME || {}
window.APPS_NAME.index = window.APPS_NAME.index || {}

#console.logのエラー回避
do ->
  console =
    log: () -> return arguments
    debug: () -> return arguments
    error: () -> return arguments
    info: () -> return arguments

  window.console = window.console || console

  return