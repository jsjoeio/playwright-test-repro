import {
  ChromiumEnv,
  FirefoxEnv,
  WebKitEnv,
  test,
  PlaywrightOptions,
  globalSetup,
} from "@playwright/test"

import * as crypto from "crypto"

const hash = (str: string): string => {
  return crypto.createHash("sha256").update(str).digest("hex")
}

const cookieToStore = {
  sameSite: "Lax" as const,
  name: "key",
  value: hash(process.env.PASSWORD),
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
  timeout: 0,
  video: "on",
}

// Run tests in three browsers.
test.runWith(new ChromiumEnv(options), { tag: "chromium" })
// test.runWith(new FirefoxEnv(options), { tag: "firefox" })
// test.runWith(new WebKitEnv(options), { tag: "webkit" })
