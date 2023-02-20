class ProductPage {
  get addToCartBtn() {
    return $("div.cart-controls-product__cart");
  }

  get confirmPopup() {
    return $(".add-to-cart-confirmation");
  }

  get closeBtnConfirmPopup() {
    return $("svg[role='button']");
  }

  get cardCounterIcon(){
    return $ (".counter")
  }

  async getNumberOfProductInCard (): Promise<string>{
    const icon: WebdriverIO.Element = await this.cardCounterIcon;
    await icon.waitForDisplayed();
    return await icon.getText();

  }

  async clickOnCloseBtnConfirmPopup (){
    const btn: WebdriverIO.Element = await this.closeBtnConfirmPopup;
    await btn. waitForDisplayed();
    await btn.click();
  }

  async clickOnAddToCartBtn() {
    const btn: WebdriverIO.Element = await this.addToCartBtn;
    await btn.waitForDisplayed();
    await btn.click();
  }

  async getConfirmPopupTitle(): Promise<string> {
    const title: WebdriverIO.Element = await this.confirmPopup;
    await title.waitForDisplayed();
    return await title.getText();
  }
}

export default new ProductPage ();