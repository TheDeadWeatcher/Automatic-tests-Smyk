class SearchBar {
    get searchInput(){
        return $ ("input#q")
    }
    
    get loopIcon(){
        return $("div.svgIcon");
    }

    async getInputValue (){
        const input: WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        return await input.getValue();
    }

     async clearInputValue(){
        const input: WebdriverIO.Element = await this.searchInput;
        await input.clearValue();
    }

    async CLickOnloopIcon(){
        const icon: WebdriverIO.Element= await this.loopIcon;
        await icon.waitForDisplayed();
        await icon.click();
    }

    async typeSearchValue(value:string){
        const input: WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        await input.setValue(value);

    }

    async searchInputIsVisible (){
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
    }
}

export default new SearchBar();