// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');
const HtmlReporter = require('protractor-beautiful-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome',

    chromeOptions: {
      // the use of "--disable-sandbox" is required on the CI-machine
      args: ["--headless", "--disable-gpu", "--window-size=800,600", "--no-sandbox"]
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () { }
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: StacktraceOption.PRETTY
      }
    }));
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: './reports/e2e/standalone',
      screenshotsSubfolder: 'screenshotsOnFailure',
      takeScreenShotsOnlyForFailedSpecs: true,
      jsonsSubfolder: 'jsonFiles',
      excludeSkippedSpecs: true,
      preserveDirectory: false,
      clientDefaults: {
        showTotalDurationIn: "header",
        totalDurationFormat: "h:m:s",
        gatherBrowserLogs: true
      },
    }).getJasmine2Reporter());
  }
};