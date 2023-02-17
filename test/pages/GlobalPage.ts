class GlobalPage {
  get logo() {
    return $("img[alt='SMYK Cały dla małych!']");
  }

  get footer() {
    return $("#footer");
  }

  get socialIcons() {
    return $$(".img-strefa_2 > a");
  }

  get newsLetter() {
    return $("#newsletter-input");
  }

  get btnNewsletterSave() {
    return $("//span[contains(text(), 'Zapisz')]");
  }

  get zgodaAlertText(){
    return $(".box-newsletter__checkbox-error");
  }

  get newsLetterCheckBox(){
    return $("div.checkbox__element");
  }

  get emailAlert () {
    return $ ("#alerts")
  }

  get alertClosbtn (){
    return $(".box-alerts__alert-close");
  }

  async closeAlertPopup(){
    const btn: WebdriverIO.Element = await this.alertClosbtn;
    await btn.waitForDisplayed();
    await btn.click();
  }

  async getEmailAlertText (): Promise<string> {
    const alert: WebdriverIO.Element = await this.emailAlert;
    return await alert.getText();

  }

  async checkCheckBoxNewsletter (){
    const checkbox: WebdriverIO.Element = await this.newsLetterCheckBox;
    await checkbox.waitForDisplayed();
    await checkbox.click();
  }

  async getZgodaText():Promise<string>{
    const alert: WebdriverIO.Element = await this.zgodaAlertText;
    await alert.waitForDisplayed();
    return await alert.getText();
  }

  async SaveBtnClick (){
    const btn: WebdriverIO.Element = await this.btnNewsletterSave;
    await btn.waitForDisplayed();
    await btn.click();
  }

  async btnSaveIsVisible() {
    const btn: WebdriverIO.Element = await this.btnNewsletterSave;
    await btn.waitForDisplayed();
  }

  async typeValueInNewsletter(value: string) {
    const input: WebdriverIO.Element = await this.newsLetter;
    await input.waitForDisplayed();
    await input.setValue(value);
  }

  async getNewsletterValue() {
    const input: WebdriverIO.Element = await this.newsLetter;
    await input.waitForDisplayed();
    await input.getValue();
  }

  async clearNewsletterValue() {
    const input: WebdriverIO.Element = await this.newsLetter;
    await input.waitForDisplayed();
    await input.clearValue();
  }

  async newsLetterIsVisible() {
    const news: WebdriverIO.Element = await this.newsLetter;
    await news.waitForDisplayed();
  }

  async getNumberOfSocialIcon(): Promise<number> {
    const icons: WebdriverIO.ElementArray = await this.socialIcons;
    return await icons.length;
  }

  async scrollToFooter() {
    const foot: WebdriverIO.Element = await this.footer;
    await foot.scrollIntoView();
    await foot.waitForDisplayed();
  }

  async clickOnLogo() {
    const logo: WebdriverIO.Element = await this.logo;
    await logo.waitForDisplayed();
    await logo.click();
  }

  async openPage(pageUrl: string, expectedPageUrl: string) {
    await browser.url(pageUrl);
    await expect(browser).toHaveUrl(expectedPageUrl);
  }
}

export default new GlobalPage();