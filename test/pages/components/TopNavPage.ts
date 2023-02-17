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

  get toysAndGamesLink () {
    return $("div[title='Zabawki i gry']");
  }

  get legoLink (){
    return $("//span[contains(text(), 'Klocki')]");
  }



  async ClickOnLegoLink (){
    const lego: WebdriverIO.Element = await this.legoLink;
    await lego.waitForDisplayed();
    await lego.click();
  }
  //f12 zamrożenie strony w inspectorze urzywamy "Sources" i klikamy w ikone pause
  async hoverToysAndGamesLink (){
    const link: WebdriverIO.Element = await this.toysAndGamesLink;
    await link.waitForDisplayed();
    await link.moveTo();
  }

  async hoverCategoryLink(){
    const cat: WebdriverIO.Element = await this.categoryLink;
    await cat.waitForDisplayed();
    await cat.moveTo();
  }

  async topNavLinkIsVisible() {
    const links: WebdriverIO.Element = await this.topNavLinks;
    await links.waitForDisplayed();
  }
}

export default new TopNav();
