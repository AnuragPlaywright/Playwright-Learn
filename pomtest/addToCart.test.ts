import {test, expect} from '@playwright/test'
import RegisterPage from '../Pages/RegisterPage'
import LoginPage from '../Pages/loginPage'
import HomePage from '../Pages/homePage'
import SpecialHotPage from '../Pages/specialHotPage'

const email = 'testemailverma@mailinator.com'
const phone = '123456789'
const password = "Test@123$"
const lastname = "Verma"
const firstname = "Anurag"

test.describe("Page object test demo", async()=>{

    test ("Register test_01", async({page, baseURL})=>{
        const register = new RegisterPage(page);
        await page.goto('index.php?route=account/register');
        await register.enterFirstName(firstname);
        await register.enterLastName(lastname);
        await register.enterTelephone(phone);
        await register.enterEmail(email);
        await register.enterPassword(password);
        await register.enterConfirmPassword(password);
    
        // expect(register.isSubscribeChecked()).toBeFalsy();
    
        await register.clickTermandCondition();
        await register.clickContinueToRegister();
    
    
    })
    
    test ("Login test_02", async({page, baseURL})=>{
    
        const login = new LoginPage(page);
        await page.goto(`${baseURL}index.php?route=account/login`);
        await login.enterEmail(email);
        await login.enterLoginPassword(password);
        await login.clickLoginBtn();
    
        expect(await page.title()).toBe("My Account");
    
    })
    
    test ("Add to cart test_03", async({page, baseURL})=>{
        const login = new LoginPage(page);
        const homePage = new HomePage(page);
        const special = new SpecialHotPage(page);
        await page.goto(`${baseURL}index.php?route=account/login`)
        await login.login(email, password)
    
        await homePage.clickOnSpecialHotMenu();
        await special.addFirstProductToCart();
        const isCartVisible = await special.isToastVisible();
        expect(isCartVisible).toBeVisible();
    
    
    
    
    
    
    
    })
   
    


})