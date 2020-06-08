export default class Page {
  open(path) {
    browser.url(path);
  }

  await(selector) {
    $(selector).waitForDisplayed();
  }
}
