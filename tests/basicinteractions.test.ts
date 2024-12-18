//@ts-check

import {test, expect} from '@playwright/test';

test('Basic interactions test', async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = page.locator("input#user-message");
    await messageInput.scrollIntoViewIfNeeded();
    // Checking the placeholder value inside an input box ---> Use getAttribute 
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");

    await messageInput.fill("Hi Anurag");
  

});


test("Sum", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const sum1input = page.locator("#sum1")
    const sum2input = page.locator("#sum2")
    const getValueBtn = page.getByRole('button', {name: 'Get Sum'})

    let num1 = 500;
    let num2 = 300;
    await sum1input.fill(""+num1)
    await sum2input.fill(""+num2)
    
    await getValueBtn.click();

    const result = page.locator("#addmessage")
    console.log(await result.textContent())

    let expectResult = num1 + num2;
    expect(result).toHaveText(""+expectResult)






    

});


test("Checkbox", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const singleCheckbox = await page.locator("#isAgeSelected")
    expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    expect(singleCheckbox).toBeChecked();





});

