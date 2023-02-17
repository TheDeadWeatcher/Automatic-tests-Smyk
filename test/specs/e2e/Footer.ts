import GlobalPage from "../../pages/GlobalPage";
import { smykHomeUrl } from "../../config/pagesUrl";
import { incorrectPhrase, textZgoda, incorrectEmail, emailAlertText, correctEmail, thanksAlertText } from "../../config/data";

describe("E2E - footer section", async () => {
  it("Should open home page os smyk and verify url", async () => {
    await GlobalPage.openPage(smykHomeUrl, smykHomeUrl);
  });
  it("Should scroll to footer section and verify fb,ig,yt newsletter input visible", async () => {
    await GlobalPage.scrollToFooter();
    await expect (await GlobalPage.getNumberOfSocialIcon()).toEqual(3);
    await GlobalPage.newsLetterIsVisible();
    await GlobalPage.btnSaveIsVisible();
  });

  it("Should type incorrect phrase to newsletter input and verify alert text", async ()=> {
    await GlobalPage.typeValueInNewsletter(incorrectPhrase);
    await GlobalPage.SaveBtnClick();
    await expect ( await GlobalPage.getZgodaText()).toContain(textZgoda);
  });
  
  it("Should clear input value, type incorrect email, check checkbox, click zapisz, verify alert txt", async ()=> {
    await GlobalPage.clearNewsletterValue();
    await GlobalPage.typeValueInNewsletter(incorrectEmail);
    await GlobalPage.checkCheckBoxNewsletter();
    await GlobalPage.SaveBtnClick();
    await expect ( await GlobalPage.getEmailAlertText()).toContain(emailAlertText);
  });

  it("Should close alert, clear input value, type correct email, check checkbox, click save, verify alert text", async ()=> {
    await GlobalPage.closeAlertPopup();
    await GlobalPage.clearNewsletterValue();
    await GlobalPage.typeValueInNewsletter(correctEmail);
    await GlobalPage.checkCheckBoxNewsletter();
    await GlobalPage.SaveBtnClick();
    await expect ( await GlobalPage.getEmailAlertText()).toContain(thanksAlertText);
    await GlobalPage.closeAlertPopup();
    //await browser.pause(5000);
    await GlobalPage.clickOnLogo()
    await expect (browser).toHaveUrl(smykHomeUrl);
  });
});
