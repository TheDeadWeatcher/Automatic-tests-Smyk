import GlobalPage from "../../pages/GlobalPage";
import SearchBarPage from "../../pages/components/SearchBarPage";
import SearchResultPage from "../../pages/SearchResultPage";
import ProductPage from "../../pages/ProductPage";
import { smykHomeUrl,starWarsResult,vaderHeadUrl, cardUrl} from "../../config/pagesUrl";
import { starWarsPhrase, confirmPopupTitle } from "../../config/data";
import TopNavPage from "../../pages/components/TopNavPage";

describe("E2E - product", async () => {

  let price: string = "";

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
    await expect(browser).toHaveUrl(vaderHeadUrl);
    await ProductPage.clickOnAddToCartBtn();
    price = await ProductPage.getProductPrice();
  });
  it("Should add to cart product, verify title of popup, close popup, verify number of products in basket counter", async () => {
    await expect (await ProductPage.getConfirmPopupTitle()).toContain(confirmPopupTitle);
    await ProductPage.clickOnCloseBtnConfirmPopup();
    await expect(browser).toHaveUrl(vaderHeadUrl);
    await expect (await ProductPage.getNumberOfProductInCard()).toContain("1");
  });
  it("Should click on card link and verify url also compare last price with product prices ", async ()=> {
    await TopNavPage.ClikOnCardLink();
    await expect (browser).toHaveUrl(cardUrl);
    await expect (await ProductPage.getProductPrice()).toContain(price);
  });
});
