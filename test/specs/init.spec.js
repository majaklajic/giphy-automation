import Home from "../pageobjects/home.page";

describe("Giphy homepage", function () {
  it("should open homepage", function () {
    Home.open();
    Home.awaitContent();
  });
});
