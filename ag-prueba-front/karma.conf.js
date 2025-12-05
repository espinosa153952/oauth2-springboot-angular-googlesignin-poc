module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "@angular-devkit/build-angular"],

    reporters: ["progress", "kjhtml", "coverage"],

    coverageReporter: {
      dir: require("path").join(__dirname, "./coverage"),
      subdir: ".",
      reporters: [
        { type: "lcov" },
        { type: "text-summary" }
      ]
    },

    browsers: ["ChromeHeadless"],
  });
};
