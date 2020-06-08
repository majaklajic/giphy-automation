import Page from "./page";

class Login extends Page {
  open() {
    super.open("./login");
  }

  get username() {
    return $('input[type="email"]');
  }

  get password() {
    return $('input[type="password"]');
  }

  get loginButton() {
    return $("button=Log in");
  }
  get loginButtonOnUpload() {
    return $("a=Log In");
  }

  get channelPage() {
    return $("#react-target.channel-page");
  }

  pageLoad() {
    super.waitForContainer();
  }

  get uniqueEmail() {
    let uniqueEmail = `mklqa11+${Date.now()}@gmail.com`;
    console.log("uniqueEmail=" + uniqueEmail);
    return uniqueEmail;
  }

  waitForContainer() {
    super.waitForContainer();
  }
}

export default new Login();
