module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'src/*.js',
      'test/*.js'
    ],
    logLevel: "ALL",
    browsers: ['Chrome'],
  })
}
