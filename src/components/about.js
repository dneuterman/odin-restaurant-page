export default class AboutPage {
  constructor(header) {
    this.header = header;
  }

  get header() {
    return this._header;
  }

  set header(value) {
    this._header = value;
  }
}