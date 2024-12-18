//@ts-check

import {test,expect} from "@playwright/test"
import moment from "moment";

test ("date picker", async ({page})=>{

     await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
     let date = "1990-02-01"; 
     await page.fill("id=birthday", date); 
     await page.waitForTimeout(3000);

});


test.only ("calendar using moment", async ({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    let date = "1990-02-01"; 
    await page.getByPlaceholder("Start date").click();
    // idetify the main locators of the action which is same as finding any other web element on web page 
    const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
    const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]");
    const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");

    let dateToSelect: string = "March 2022"
    
    const thisMonth = moment(dateToSelect,"MMMM YYYY").isBefore();

    while (await mmYY.textContent() !=dateToSelect) 

        if (thisMonth) {
            await prev.click();

        } else {
            await next.click();

        }
    

    await page.locator("//td[@class='day' and text()='4']").click();



});




