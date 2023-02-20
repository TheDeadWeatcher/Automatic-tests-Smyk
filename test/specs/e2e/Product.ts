import GlobalPage from "../../pages/GlobalPage";
import SearchBarPage from "../../pages/components/SearchBarPage";
import SearchResultPage from "../../pages/SearchResultPage";
import ProductPage from "../../pages/ProductPage";
import { smykHomeUrl,starWarsResult,vaderHeadUrl} from "../../config/pagesUrl";
import { starWarsPhrase, confirmPopupTitle } from "../../config/data";

describe("E2E - product", async () => {
  it("Should open home page smyk.com and vefiry Url", async () => {
    await GlobalPage.openPage(smykHomeUrl, smykHomeUrl);
    await SearchBarPage.searchInputIsVisible();
  });
  it("Should type search phrase and vefiry url, counts of search result, sideBar 'Marki' visible", async () => {
    await SearchBarPage.typeSearchValue(starWarsPhrase);
    await SearchBarPage.CLickOnloopIcon();
    await expect(browser).toHaveUrl(starWarsResult);
    await SearchResultPage.productIteamsIsVisible();
    await expect(await SearchResultPage.getNumberOfProducts()).toEqual(36);
    await SearchResultPage.sideBarMarkiIsVisible();
  });
  it("Should  verify result search result, click on Vader head product, verify vaderhead product url", async () => {
    await expect(await SearchResultPage.getNumberOfProducts()).toEqual(36);
    await SearchResultPage.clickOnVaderHead();
    await browser.pause(5000);
    await expect(browser).toHaveUrl(vaderHeadUrl);
    await ProductPage.clickOnAddToCartBtn();
  });
  // it("Should add to cart product, verify title of popup, close popup, verify number of products in basket counter", async () => {
  //   await ProductPage.clickOnAddToCartBtn();
  //   await expect (await ProductPage.getConfirmPopupTitle()).toContain(confirmPopupTitle);
  //   await ProductPage.clickOnCloseBtnConfirmPopup();
  //   await expect(browser).toHaveUrl(vaderHeadUrl);


  // });
});
