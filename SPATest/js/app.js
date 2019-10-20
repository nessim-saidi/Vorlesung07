class App {
  constructor (pageList) {
    this._pages = pageList;
  }

  run () {
    console.log("Anwendung gestartet");

    window.addEventListener("hashchange", () => {
      console.log("Hash changed");
      this._handleRoute();
    });
  }

  _handleRoute() {
    let pageUrl = location.hash.slice(1);
    let matches = null;

    let page = this._pages.find(p => matches = pageUrl.match(p.url));
    //location.href = ("." + page.resource);
    this.currentPageObj = new page.klasse(this);
    this.currentPageObj.show();
  }
}
