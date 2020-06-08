import Page from "./page";

class Home extends Page {
  /**
   * define elements
   */
  get btnStart() {
    return $("button=Start");
  }
  get loadedPage() {
    return $("#finish");
  }

  /**
   * define or overwrite page methods
   */
  open() {
    super.open("/");
  }
  awaitContent() {
    super.await("#content");
  }
}

export default new Home();
