
// adding comments for merging into main branch 

import {chromium, test} from "@playwright/test"

test("Login test demo", async ()=>{
    
    // new browser instance 
    const browser = await chromium.launch({

        headless: false

    }); 

    // new browser context is created so that browser instance is not sharing cache/cookies information 
    // with other browser instances 
    const context = await browser.newContext(); 
    // its creating a new tab in browser 
    const page = await context.newPage();
    
    await page.goto('https://ecommerce-playground.lambdatest.io/');
                       
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
    // await page.click("text=Login")
    await page.click("'Login'")

    await page.fill("#input-email", "koushik350@gmail.com") // used CSS selector 
    await page.fill("#input-password", "Pass123$") // used CSS selector 
    await page.click("input[value='Login']") // used CSS selector 

    await page.waitForTimeout(5000)

    
})