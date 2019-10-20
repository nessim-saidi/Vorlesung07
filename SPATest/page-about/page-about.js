class PageAbout {
  constructor (app) {
    this._app = app;
  }

  async show() {
    console.log("About-Seite");
    let html = await fetch("page-about/page-about.html");

    let htmlContent = "";
    if (html.ok) {
      htmlContent = await html.text();
    }
  }
}
