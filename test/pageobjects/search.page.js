import Page from "./page";

class Search extends Page {
  open() {
    super.open("./upload");
  }

  get searchBar() {
    return $('input[type="text"]');
  }

  get submitButton() {
    return $(".search-button__Container-ndudpy-1.grSXnc");
  }

  get gifCount() {
    return $(".NumberDisplay-sc-3pgyh3.jlezdB");
  }

  get searchResultsContainer() {
    return $(".GridWithTV-sc-1hnvpyn.eLOeIu");
  }

  get emptyStateMessage() {
    return $("._3Pso07QCmjZWmt4UMB0H1k");
  }
}

export default new Search();
