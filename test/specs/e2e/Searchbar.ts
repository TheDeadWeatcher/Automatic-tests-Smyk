import GlobalPage from "../../pages/GlobalPage"; 
import {smykHomeUrl} from "../../config/pagesUrl";

describe("E2E - SearchBar", async () =>{
    it("Should open smyk home page and verify url and visible searchbar", async () => {
        await GlobalPage.openPage(smykHomeUrl, smykHomeUrl);
    });
});