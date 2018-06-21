//protractor.conf.js
var cucumberReportDirectory = 'reports';
var jsonReportFile = cucumberReportDirectory + 'results.json';

exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to this directory.
  specs: [
    'src/features/LitiumLoginTest.feature',
    'src/features/LitiumMediaFolderTest.feature',
    //'src/features/UploadTest.feature'    
    //'src/features/UploadTest.feature'
  ], 
  setDefaultTimeout: 60 * 1000,
     onPrepare: function () {
        browser.manage().window().maximize();
        var chai = require('chai');
        var chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);
        global.expect = chai.expect;
    },

  baseURL: 'http://localhost:8080/',
  //resultJsonOutputFile: 'reports/report.json',
  cucumberOpts: {
	 require: ['src/steps_definitions/*.js', 'supports/*.js'],
     require: 'src/steps_definitions/*.js',
     tags: false,
     format: ['json:reports/results.json'],
	 //format: 'pretty',
     profile: false,
     'no-source': true,
     strict: true
  } ,
 
  onCleanUp: function () {
    var CucumberHtmlReport = require('cucumber-html-report');
      return CucumberHtmlReport.create({
          source: jsonReportFile,
          dest: cucumberReportDirectory,
          title: 'OptiRoute - Protractor Test Run',
          component: new Date().toString()
    }).then(console.log).catch(console.log);
  },
  ignoreUncaughtExceptions: true,
  untrackOutstandingTimeouts: true
 };