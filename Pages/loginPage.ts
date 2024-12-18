import {Page} from '@playwright/test'

export default class LoginPage {

    constructor(public page: Page) {

    }

    async login (email: string, password:string)

    {

        await this.enterEmail(email);
        await this.enterLoginPassword(password);
        await this.clickLoginBtn();
    }

    async enterEmail(emailaddress: string) {
        await this.page.locator("input[name='email']")
            .fill(emailaddress);   
    }

    async enterLoginPassword(password: string) {
        await this.page.locator("input[name='password']")
            .fill(password);   
    }


    async clickLoginBtn() {
        
        await Promise.all ([
            await this.page.waitForLoadState("networkidle"),
            await this.page.click("input[value='Login']")   


        ])
        
            
    }







    
}

