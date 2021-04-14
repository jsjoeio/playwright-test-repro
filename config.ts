import {
  ChromiumEnv,
  FirefoxEnv,
  WebKitEnv,
  test,
  PlaywrightOptions,
  globalSetup,
} from "@playwright/test"

const cookieToStore = {
  sameSite: "Lax" as const,
  name: "key",
  value: "password123",
  domain: "localhost",
  path: "/",
  expires: -1,
  httpOnly: false,
  secure: false,
}

globalSetup(async () => {
  console.log("running global setup")
  const storage = {
    cookies: [cookieToStore],
  }
  process.env.STORAGE = JSON.stringify(storage)
})

const options: PlaywrightOptions = {
  headless: true, // Run tests in headless browsers.
}

// Run tests in three browsers.
test.runWith(new ChromiumEnv(options), { tag: "chromium" })
test.runWith(new FirefoxEnv(options), { tag: "firefox" })
test.runWith(new WebKitEnv(options), { tag: "webkit" })
