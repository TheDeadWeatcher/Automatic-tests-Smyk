class GlobalPage {
  get logo() {
    return $("div.box-html__content > p > a > img");
  }

  get footer () {
    return $("#footer");
  }

  get socialIcons () {
    return $$(".img-strefa_2 > a");
  }

  async getNumberOfSocialIcon (): Promise<number>{
    const icons: WebdriverIO.ElementArray = await this.socialIcons;
    return await icons.length;
  }

  async scrollToFooter (){
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