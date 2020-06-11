import path from "path";
import allureReporter from "@wdio/allure-reporter";
import Login from "../pageobjects/login.page";
import Upload from "../pageobjects/upload.page";
import {GIPHY_USERNAME, GIPHY_PASSWORD} from "../../env";

const filePath1 = path.join(__dirname, "../assets/debugDuck.gif");
const filePath2 = path.join(__dirname, "../assets/wine.mp4");
const url = "https://media.giphy.com/media/FjJMYGHJEBmlq/giphy.gif";

describe("Upload", function () {
  it("should log in", function () {
    allureReporter.addFeature("should log in");

    Login.open();
    Login.username.setValue(GIPHY_USERNAME);
    Login.password.setValue(GIPHY_PASSWORD);
    Login.loginButton.click();
    Upload.uploadButtonOnChannelPage.waitForDisplayed();
  });

  it("should upload single file manually", function () {
    allureReporter.addFeature("should upload single file manually");
    Upload.uploadButtonOnChannelPage.click();
    Upload.fileInput.waitForExist();

    const remoteFilePath1 = browser.uploadFile(filePath1);

    Upload.fileInput.setValue(remoteFilePath1);
    Upload.publicSwitch.click();
    Upload.uploadButton.click();
    Upload.animatedGif.waitForDisplayed({timeout: 20000});
  });

  it("should upload multiple files manually", function () {
    allureReporter.addFeature("should upload multiple files manually");

    Upload.open();
    Upload.fileInput.waitForExist();

    const remoteFilePath1 = browser.uploadFile(filePath1);
    const remoteFilePath2 = browser.uploadFile(filePath2);

    Upload.fileInput.setValue(remoteFilePath1 + "\n" + remoteFilePath2);
    Upload.publicSwitch.click();
    Upload.uploadButton.click();
    Upload.multipleFilesUploadStatus.waitForExist({timeout: 30000});
  });

  it("should upload single file with url", function () {
    allureReporter.addFeature("should upload single file with url");

    Upload.open();
    Upload.urlInput.waitForExist();

    Upload.urlInput.setValue(url);
    Upload.publicSwitch.click();
    Upload.uploadButton.click();
    Upload.animatedGif.waitForDisplayed({timeout: 20000});
  });
});
