class SearchBar {
    get searchInput(){
        return $ ("input#q")
    }

    async searchInputVisible (){
        const input:WebdriverIO.Element = await this.searchInput;
    }
}

export default new SearchBar();