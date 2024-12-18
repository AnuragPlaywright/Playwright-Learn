//@ts-check

import{test, expect} from '@playwright/test'

test ("windows", async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    // await page.getByTitle("Follow @Lambdatesting on Twitter").click();

      
    // Handling single pop up 

    const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("'Follow On Twitter'")





    ])
    console.log(newWindow.url());


    // Handling multiple windows pop up 
    const [multiPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("#followboth")

    ])

    const pages = multiPage.context().pages();
    console.log("No. of tabs: " + pages.length);

    pages.forEach(tab =>{

        console.log(tab.url())


    })


})