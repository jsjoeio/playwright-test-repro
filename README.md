# playwright-test reproduction

1. `git clone https://github.com/jsjoeio/playwright-test-repro.git`
2. `yarn`
3. `yarn test`

## Expected

Test should run and pass

## Actual

Playwright exits:
```js
Error while reading /Users/jp/Dev/playwright-test-repro/hello.test.ts:
Unexpected token u in JSON at position 0
    at JSON.parse (<anonymous>)
    at /Users/jp/Dev/playwright-test-repro/hello.test.ts:8:29
    at describe (/Users/jp/Dev/playwright-test-repro/node_modules/folio/out/spec.js:127:9)
    at Object.<anonymous> (/Users/jp/Dev/playwright-test-repro/hello.test.ts:3:6)
    at Module._compile (internal/modules/cjs/loader.js:999:30)
    at Module._compile (/Users/jp/Dev/playwright-test-repro/node_modules/pirates/lib/index.js:99:24)
    at Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
    at Object.newLoader [as .ts] (/Users/jp/Dev/playwright-test-repro/node_modules/pirates/lib/index.js:104:7)
    at Module.load (internal/modules/cjs/loader.js:863:32)
    at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    at Module.require (internal/modules/cjs/loader.js:887:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Loader.loadTestFile (/Users/jp/Dev/playwright-test-repro/node_modules/folio/out/loader.js:60:13)
    at runTests (/Users/jp/Dev/playwright-test-repro/node_modules/folio/out/cli.js:130:16)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
error Command failed with exit code 1.
```