class SearchResultPage{
    get pageTitle(){
        return $("h1>.site-title__title");
    };

    get productIteam(){
        return $$(".complex-product__ribbons");
    }

   get incorrectTitle() {
        return $(".lazyload-wrapper > p>big"); // bigow jest 2, robot wybiera zawsze 1 
   }

    get productIteamsDiv(){
        return $(".complex-product__ribbons");
    }

    async productIteamsIsVisible(){
        const iteams: WebdriverIO.Element = await this.productIteamsDiv;
        await iteams.waitForDisplayed();
    }


   async getIncorrectTitle ():Promise<string>{
    const title:WebdriverIO.Element = await this.incorrectTitle;
    await title.waitForDisplayed();
    return await title.getText();
   }

    async getNumberOfProducts ():Promise<number> {
        const iteams: WebdriverIO.ElementArray = await this.productIteam;
        return await iteams.length;
    }

    async getPageTitle():Promise<string>{
        const title: WebdriverIO.Element = await this.pageTitle;
        await title.waitForDisplayed();
        return await title.getText();
    };
};

export default new SearchResultPage();