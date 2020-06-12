import allureReporter from "@wdio/allure-reporter";
import Home from "../pageobjects/home.page";

describe("Giphy homepage", function () {
  it("should open homepage", function () {
    allureReporter.addFeature("should open homepage");

    Home.open();
    Home.awaitContent();
  });
});
