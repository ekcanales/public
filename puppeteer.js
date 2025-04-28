const puppeteer = require("puppeteer");

async function go() {
  const browser = await puppeteer.launch({
    headless: false,
    sloMo: 200,
  });

  const page = await browser.newPage();

  //   enter page URL
  await page.goto("https://mycar-collection-f21.web.app/index_.html");

  //   click sign in
  await page.click("#signinbtn");

  // provide email and pw for sign-in
  await page.type("#email_", "temp12345@gmail.com");
  await page.type("#password_", "temp12345@gmail.com");

  //   click submit button
  await page.click("#signin_form > div:nth-child(3) > div > button");

  // force a delay
  await new Promise((r) => setTimeout(r, 1000));

  await page.type("#search_bar", "my test car");
  await page.click("#search_button");

  //   close browser
  //   browser.close();
}

// call go
go();
