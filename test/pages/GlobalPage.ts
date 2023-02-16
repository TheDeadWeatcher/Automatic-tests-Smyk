class GlobalPage {

    get logo (){
        return $("div.box-html__content > p > a > img");
    }

    async clickOnLogo(){
        const logo: WebdriverIO.Element = await this.logo;
        await logo.waitForDisplayed();
        await logo.click();
    }


    async openPage(pageUrl:string, expectedPageUrl: string) {
        await browser.url(pageUrl);
        await expect(browser).toHaveUrl(expectedPageUrl);

    }
}

export default new GlobalPage();