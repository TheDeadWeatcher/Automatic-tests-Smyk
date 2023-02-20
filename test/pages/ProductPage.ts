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

  get confirmPopupTitle (){
    return $ (".add-to-cart-confirmation__header-title--text")
  }

  get describeProductBtn (){
    return $("//span[contains(text(), 'Opis produktu')]");
  }

  get productPrice (){
    return $("div.price");
  }

  async getProductPrice (): Promise<string>{
    const price: WebdriverIO.Element = await this.productPrice;
    await price.waitForDisplayed();
    return price.getValue();
  }

  async ClickDescribeProductBtn (){
    const btn: WebdriverIO.Element = await this.describeProductBtn;
    await btn.waitForDisplayed();
    await btn.click();
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
    const title: WebdriverIO.Element = await this.confirmPopupTitle;
    await title.waitForDisplayed();
    return await title.getText();
  }
}

export default new ProductPage ();