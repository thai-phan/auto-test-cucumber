//protractor.conf.js
var cucumberReportDirectory = 'reports'
var jsonReportFile = cucumberReportDirectory + '/results.json'

exports.config = {
  'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',

  'commonCapabilities': {
    "browserstack.debug": true,
    'browserstack.user': 'luyennguyen1',
    'browserstack.key': 'e2Qdv2NPiQqFtBT1axAs',
  },

  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  'multiCapabilities': [{
    'os': 'Windows',
    'os_version': '10',
    'browserName': 'Chrome',
    'browser_version': '61.0',
    'resolution': '1440x900'
  }
    // ,{
    // 'os': 'Windows',
    // 'os_version': '10',
    // 'browserName': 'Firefox',
    // 'browser_version': '55.0',
    // 'resolution': '1440x900'
    // }   
  ],
  maxSessions: 1,
  // Spec patterns are relative to this directory.
  specs: [
    'src/features/LitiumLoginTest.feature',
    //'src/features/LitiumMediaFolderTest.feature',
    'src/features/LitiumAddPerson.feature',
  ],
  
  onPrepare: function () {
    browser.manage().window().maximize()
    var chai = require('chai')
    var chaiAsPromised = require('chai-as-promised')
    chai.use(chaiAsPromised)
    global.expect = chai.expect

  },

  cucumberOpts: {
    require: ['../element_actions_definitions/*.js', '../supports/*.js' ],
    require: 'src/steps_definitions/*.js',
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
  untrackOutstandingTimeouts: true
}

// Code to support common capabilities
exports.config.multiCapabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i]
})