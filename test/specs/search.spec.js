import allureReporter from "@wdio/allure-reporter";
import chai from "chai";
import Search from "../pageobjects/search.page";

const validSearchTerm = "debug duck";
const invalidSearchTerm = "%%%%%%";
const emptyStateMessage = `No GIFs found for ${invalidSearchTerm}\nTry searching for Stickers instead?`;

describe("Giphy search feature", function () {
  it("should search valid term and display results", function () {
    allureReporter.addFeature("should search a valid term");

    browser.url("/");
    Search.searchBar.waitForDisplayed();
    Search.searchBar.setValue(validSearchTerm);
    Search.submitButton.click();
    Search.gifCount.waitForDisplayed();
    Search.searchResultsContainer.waitForDisplayed();
  });

  it("should search invalid term and return empty state message", function () {
    allureReporter.addFeature("should search a valid term");

    browser.url("/");
    Search.searchBar.waitForDisplayed();
    Search.searchBar.setValue(invalidSearchTerm);
    Search.submitButton.click();
    Search.gifCount.waitForDisplayed();
    Search.emptyStateMessage.waitForDisplayed();

    const getEmptyStateMessage = Search.emptyStateMessage.getText();

    chai.assert.equal(emptyStateMessage, getEmptyStateMessage);
  });
});
