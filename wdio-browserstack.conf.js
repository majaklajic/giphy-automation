var merge = require("deepmerge");
var wdioConf = require("./wdio.conf.js");
var browserstack = require("browserstack-local");

exports.config = merge(wdioConf.config, {
  user: "majaqa1",
  key: "RpLyppRzahk1zo8syvs8",

  capabilities: [
    {
      os: "OS X",
      os_version: "Catalina",
      browser: "Chrome",
      browser_version: "84.0 beta",
      resolution: "1024x768",
      build: "Test run: " + Date.now(),
      project: "Giphy E2E tests",
    },
  ],
  services: ["browserstack-local"],

  // Code to start browserstack local before start of test
  onPrepare: function (config, capabilities) {
    console.log("Connecting local");
    return new Promise(function (resolve, reject) {
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({key: exports.config.key}, function (error) {
        if (error) return reject(error);
        console.log("Connected. Now testing...");

        resolve();
      });
    });
  },

  // Code to stop browserstack local after end of test
  onComplete: function (capabilties, specs) {
    exports.bs_local.stop(function () {});
  },
});
