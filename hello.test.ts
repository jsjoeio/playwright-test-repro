import { test, expect } from "@playwright/test"

test.describe("basic test", () => {
  const options: any = {}

  // Comment out these lines
  // and uncomment Workaround to make it work
  const storageState = JSON.parse(process.env.STORAGE) || {}
  options.contextOptions = {
    storageState,
  }

  // Workaround
  // This fixes the problem
  // if (process.env.STORAGE) {
  //   console.log(process.env.STORAGE)
  //   options.contextOptions = {}
  //   const storageState = JSON.parse(process.env.STORAGE) || {}
  //   options.contextOptions.storageState = storageState
  // }

  test("is a basic test with the page", options, async ({ page }) => {
    await page.goto("https://playwright.dev/")
    const name = await page.innerText(".navbar__title")
    expect(name).toBe("Playwright")
  })
})
