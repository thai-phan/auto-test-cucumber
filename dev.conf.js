// test.conf.js

var cucumberReportDirectory = 'reports'
var jsonReportFile = cucumberReportDirectory + '/results.json'

exports.config = {
  'seleniumAddress': 'http://127.0.0.1:4444/wd/hub',

  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserName': 'chrome'
  },

  maxSessions: 1,
  // Spec patterns are relative to this directory.
  specs: [
    'src/features/LitiumLoginTest.feature',
    'src/features/LitiumMediaFolderTest.feature',
    // 'src/features/LitiumUploadTest.feature',
    // 'src/features/LitiumSaveCancelStatus.feature',
    // 'src/features/Test.feature',
  ],

  onPrepare: function () {
    browser.driver.manage().window().maximize()
    var chai = require('chai')
    var chaiAsPromised = require('chai-as-promised')
    chai.use(chaiAsPromised)
    global.expect = chai.expect
  },

  cucumberOpts: {
    require: ['../element_actions_definitions/*.js', '../supports/*.js'],
    require: `src/steps_definitions/*.js`,
    tags: false,
    format: ['json:reports/results.json'],
    profile: false,
    'no-source': true,
    strict: true
  },

  plugins: [{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options: {
      // read the options part
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true,
      removeOriginalJsonReportFile: true,
      openReportInBrowser: true,
      reportPath: 'reports'
    }
  }],

  ignoreUncaughtExceptions: true,
  untrackOutstandingTimeouts: true,
}

// Code to support common capabilities
// exports.config.multiCapabilities.forEach(function(caps){
//   for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i]
// })