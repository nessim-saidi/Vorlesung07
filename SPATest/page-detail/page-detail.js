class PageDetail {
  constructor (app) {
    this._app = app;
  }

  async show() {
    console.log("Detailseite");
    let html = await fetch("page-detail/page-detail.html");

    let htmlContent = "";
    if (html.ok) {
      htmlContent = await html.text();
    }
  }
}
