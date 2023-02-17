import GlobalPage from "../../pages/GlobalPage";
import SearchBarPage from "../../pages/components/SearchBarPage"; 
import SearchResultPage from "../../pages/SearchResultPage";
import { smykHomeUrl, starWarsResult } from "../../config/pagesUrl";
import { starWarsPhrase } from "../../config/data";

describe("E2E - product", async () => {
  it("Should open home page smyk.com and vefiry Url", async () => {
    await GlobalPage.openPage(smykHomeUrl, smykHomeUrl);
    await SearchBarPage.searchInputIsVisible();
    await SearchBarPage.typeSearchValue(starWarsPhrase);
    await SearchBarPage.CLickOnloopIcon();
    await expect (browser).toHaveUrl(starWarsResult);
    await SearchResultPage.productIteamsIsVisible();
    await expect(await SearchResultPage.getNumberOfProducts()).toEqual(36);
  });
});
