![Node](https://img.shields.io/badge/node-10.10.0-green.svg)
![Version](https://img.shields.io/badge/version-0.1.1-orange.svg)

# Prompt API - BIN Checker - Node Package

`bin-checker-pkg` is a simple JavaScript wrapper for [bincheck-api][bincheck-api].

## Requirements

1. You need to signup for [Prompt API][promptapi-signup]
1. You need to subscribe [name-of-api][prompt-api-url-of-api], test drive is **free!!!**
1. You need to set `PROMPTAPI_TOKEN` environment variable after subscription.

then;

```bash
$ npm install bin-checker-pkg
```

---

## Example Usage

```javascript
const promptapi = require('bin-checker-pkg')

promptapi.binChecker('370244').then(result => {
  if(result.error){
    console.log(result.error)
  } else {
    console.log(result.bank_name)
    console.log(result.country)
    console.log(result.url)
    console.log(result.type)
    console.log(result.scheme)
    console.log(result.bin)
  }
})
```

Result:

    Banesco
    Venezuela (bolivarian Republic Of)
    www.banesco.com
    Credit
    American Express
    370244

If you receive an error, `result` will contain `error` as string.

---

## Development

All you need is `node` and `npm`...

---

## License

This project is licensed under MIT

---

## Contributer(s)

* [Prompt API](https://github.com/promptapi) - Creator, maintainer

---

## Contribute

All PR’s are welcome!

1. `fork` (https://github.com/promptapi/bin-checker-pkg/fork)
1. Create your `branch` (`git checkout -b my-feature`)
1. `commit` yours (`git commit -am 'Add awesome features...'`)
1. `push` your `branch` (`git push origin my-feature`)
1. Than create a new **Pull Request**!

This project is intended to be a safe,
welcoming space for collaboration, and contributors are expected to adhere to
the [code of conduct][coc].

[promptapi-signup]: https://promptapi.com/#signup-form
[bincheck-api]:     https://promptapi.com/marketplace/description/bincheck-api
[coc]:              https://github.com/promptapi/bin-checker-pkg/blob/main/CODE_OF_CONDUCT.md
