class TopNav {
  get topNavLinks() {
    //all links from top nav
    return $("//span[contains(text(), 'Kategorie')]")
          .$("//span[contains(text(), 'Ostatnio oglądane')]")
          .$("//span[contains(text(), 'Promocje')]")
          .$("//span[contains(text(), 'Śledzenie zamówień')]")
          .$("//span[contains(text(), 'Wyszukaj sklep')]")
          .$("//span[contains(text(), 'Kontakt')]")
          .$("//span[contains(text(), 'Zaloguj się')]")
          .$("//span[contains(text(), 'Koszyk')]");
  };

  get categoryLink() {
    return $("//span[contains(text(), 'Kategorie')]");
  }


  async topNavLinkIsVisible() {
    const links: WebdriverIO.Element = await this.topNavLinks;
    await links.waitForDisplayed();
  }
}

export default new TopNav();
