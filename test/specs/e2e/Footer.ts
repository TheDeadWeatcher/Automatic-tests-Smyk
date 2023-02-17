import GlobalPage from "../../pages/GlobalPage";
import { smykHomeUrl } from "../../config/pagesUrl";

describe("E2E - footer section", async () => {
  it("Should open home page os smyk and verify url", async () => {
    await GlobalPage.openPage(smykHomeUrl, smykHomeUrl);
  });
  it("Should scroll to footer section and verify fb,ig,yt newsletter input visible", async () => {
    await GlobalPage.scrollToFooter();
    await expect (await GlobalPage.getNumberOfSocialIcon()).toEqual(3);
  });
});
