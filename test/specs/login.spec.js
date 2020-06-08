import Login from "../pageobjects/login.page";
import {GIPHY_USERNAME, GIPHY_PASSWORD} from "../../env";

describe("Giphy login", function () {
  it("should log in successfully", function () {
    Login.open();
    Login.username.setValue(GIPHY_USERNAME);
    Login.password.setValue(GIPHY_PASSWORD);
    Login.loginButton.click();
    Login.channelPage.waitForDisplayed();
  });
});
