//@ts-check

import {test, expect} from '@playwright/test';

test ("Bootstrap handling", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    // await page.click("#country+span");
    // await page.locator("ul#select2-country-results").locator("li", {
        
    //     hasText: "India"

    // }).click();

    await selectCountry("India");
    await selectCountry("Denmark");
    await selectCountry("South Africa");

    async function selectCountry(countryName) {
        await page.click("#country+span");
        await page.locator("ul#select2-country-results")
            .locator("li", {
                hasText: countryName


            }).click();
    }
});

