const path = require("path");
import Login from "../pageobjects/login.page";
import {GIPHY_USERNAME, GIPHY_PASSWORD} from "../../env";

const filePath = path.join(__dirname, "../assets/debugDuck.gif");

describe("Upload", function () {
  it("should upload image manually", function () {
    Login.open();
    Login.username.setValue(GIPHY_USERNAME);
    Login.password.setValue(GIPHY_PASSWORD);
    Login.loginButton.click();
  });

  it("should upload image manually", function () {
    browser.url("/upload");

    const remoteFilePath = browser.uploadFile(filePath);
    $('input[type="file"]').setValue(remoteFilePath);

    browser.pause(30000);
  });
});
