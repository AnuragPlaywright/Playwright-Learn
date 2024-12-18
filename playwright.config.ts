// global configuration 

import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {

  projects: [
      {
        name:  "chrome",
        use: {
          ...devices["Desktop Chrome"]

        }

        
      },
      {
        name:  "firefox",
        use: {
          ...devices["Desktop Firefox"]

        }

        
      },

    


  ],


  testMatch: ["tests/*", "pomtest/*"],

  use: {
      baseURL: "https://ecommerce-playground.lambdatest.io/",
      headless: true,
      screenshot: "only-on-failure",
      video: "retain-on-failure"      ,
      trace: "on",
  },

  retries: 0, 
  
  reporter: [
    ["dot"], 
    ["json",{outputFile: "jsonReports/jsonReport.json"}], 
    ["html", {open: "never"}]
  
  ]

};

export default config;


