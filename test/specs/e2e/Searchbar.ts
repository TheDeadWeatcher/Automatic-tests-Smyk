import GlobalPage from "../../pages/GlobalPage";
import SearchBarPage from "../../pages/components/SearchBarPage"; 
import SearchResultPage from "../../pages/SearchResultPage";
import {smykHomeUrl, productResultUrl} from "../../config/pagesUrl";
import { searchPhrase, titleResultPage, incorrectPhrase, incorrectPhraseTitle } from "../../config/data";

describe("E2E - SearchBar", async () =>{
    it("Should open smyk home page and verify url and visible searchbar", async () => {
        await GlobalPage.openPage(smykHomeUrl, smykHomeUrl);
        await SearchBarPage.searchInputIsVisible();
    });
    it("Should verify visible of loop icon, type search value and click on loop icon", async ()=>{
        await SearchBarPage.typeSearchValue(searchPhrase);
        await SearchBarPage.CLickOnloopIcon();
        await expect (browser).toHaveUrl(productResultUrl);
    });
    it ("Should verify number of product and verify title", async ()=>{
        await expect (browser).toHaveUrl(productResultUrl);
        await expect (await SearchResultPage.getPageTitle()).toContain(titleResultPage);
        await expect (await SearchResultPage.getNumberOfProducts()).toEqual(36);
    });
    it("Should clear value from input and verify value", async ()=>{
        await SearchBarPage.clearInputValue();
        await expect (await SearchBarPage.getInputValue()).toContain("");
    });
    it("Should type incorrect phrase in search input and verify incorrect title", async ()=> {
        await SearchBarPage.typeSearchValue(incorrectPhrase);
        await SearchBarPage.CLickOnloopIcon();
        await expect ( await SearchResultPage.getIncorrectTitle()).toContain(incorrectPhraseTitle);
    });
    it("Should clear input value and click on logo, verify homepage url", async ()=> {
        await SearchBarPage.clearInputValue();
        await GlobalPage.clickOnLogo();
        await expect (browser).toHaveUrl(smykHomeUrl);

    })
});