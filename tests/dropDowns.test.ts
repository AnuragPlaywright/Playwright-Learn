//@ts-check

import {test,expect} from "@playwright/test"

test ("Selecting alerts", async ({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async(alert) => {
        // const text = await alert.message();// optional to write in results log (stdout)       
        const text = await alert.defaultValue();// optional to write in results log (stdout)       
        // await alert.accept();
        await alert.accept("anurag");

       })

    await page.locator("button:has-text('Click Me')").nth(2).click();
    // await expect(page.locator("id=confirm-demo")).toContainText("Cancel!")
    await expect(page.locator("id=prompt-demo")).toContainText("'anurag'")
    
});
// ----------Select DROPDOWN ------ 
test ("handling dropdown", async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");

    // select by label or value or index 
    await page.selectOption("#select-demo",{
        // label: "Tuesday"
        // value: "Monday"
        index: 0
    });



    // await page.waitForTimeout(3000);


})


// ----------Select MULTIPLE list  ------ 

test.only ("handling multiple", async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");

    // select by label or value or index 
   // select by label or value or index 
   await page.selectOption("#multi-select",[{

    label: "Texas"
}, {
    index: 2   
}, {

    value: "California"
}
    
]);


    // await page.waitForTimeout(3000);


})





