exports.tryRequireThemeJsonEditor = function (theme) {
  try {
    if (theme === 'ace/theme/jsoneditor') {
      require('./ace/theme-jsoneditor')
    } else if (theme === 'ace/github/dark') {
      require('./ace/ace-github-dark')
    } else {
      require('./ace/theme-jsoneditor')
    }
  } catch (err) {
    console.error(err)
  }
}
