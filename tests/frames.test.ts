//@ts-check

import { test, expect } from "@playwright/test";

test ("Interact with frames", async({page})=>{

    await page.goto("https://letcode.in/frame");
    const allFrames = page.frames();
    console.log("No. of frames: "+ allFrames.length);

    const frame = page.frameLocator("#firstFr");
    await frame.locator("input[name='fname']").fill("Anurag");
    await frame.locator("input[name='lname']").fill("Verma");

    expect (await frame?.locator("p.title has-text-info").textContent).toContain("entered");

    const innerFrame = frame.frameLocator("iframe[src='innerframe']");
    innerFrame.locator("input[name='email']").fill("test@email.com");



    // identifying the frame -- use locator of the frame

    // const myFrame = page.frame("firstFr");
    // const firstName = await myFrame?.fill("input[name='fname']","Anurag");
    // const lastName = await myFrame?.fill("input[name='lname']","Verma");

    // expect (await myFrame?.locator("p.title has-text-info").textContent).toContain(firstName || lastName);

    await page.waitForTimeout(3000);



});

