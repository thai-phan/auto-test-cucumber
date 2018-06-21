const cucumber = require('cucumber');
const report = require('cucumber-html-reporter');

module.exports = function () {
  const formatter = cucumber.Listener.JsonFormatter();
  formatter.log = (data) => {
    fs.writeFile('results.json', data, (err) => {
      if (err) {
        console.log('Failed to save cucumber test results to json file.', err);
      } else {
        report.create({
          component: 'MyComponent',
          source: 'reports/results.json',
          dest: 'reports',
        }).then(console.log).catch(console.log);
      }
    });
  };
  this.registerListener(formatter);

  this.After(function (scenario, callback) {
    if (scenario.isPassed()) {
      browser.takeScreenshot().then(function (png) {
        var decodedImage = new Buffer(png.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
        scenario.attach(decodedImage, 'image/png');
        callback();
      });
    }
    else {
      callback();
    }
  });
};
