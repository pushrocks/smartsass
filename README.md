# @pushrocks/smartsass
smart wrapper for sass

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/smartsass)
* [gitlab.com (source)](https://gitlab.com/pushrocks/smartsass)
* [github.com (source mirror)](https://github.com/pushrocks/smartsass)
* [docs (typedoc)](https://pushrocks.gitlab.io/smartsass/)

## Status for master
[![build status](https://gitlab.com/pushrocks/smartsass/badges/master/build.svg)](https://gitlab.com/pushrocks/smartsass/commits/master)
[![coverage report](https://gitlab.com/pushrocks/smartsass/badges/master/coverage.svg)](https://gitlab.com/pushrocks/smartsass/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/@pushrocks/smartsass.svg)](https://www.npmjs.com/package/@pushrocks/smartsass)
[![Known Vulnerabilities](https://snyk.io/test/npm/@pushrocks/smartsass/badge.svg)](https://snyk.io/test/npm/@pushrocks/smartsass)
[![TypeScript](https://img.shields.io/badge/TypeScript->=%203.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

## Usage

Use TypeScript for best in class instellisense.

```javascript
import * as smartsass from 'smartsass'
import * as bourbon from 'bourbon
import * as neat from 'neat'

let mySmartsass = new smartsass.Smartsass({
  filePath: './some.css',
  includePaths: bourbon.includePaths
})

mySmartsass.addIncludePaths(neat.includePaths)

let renderedString = mySmartsass.render()
```

For further information read the linked docs at the top of this README.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
> | By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://pushrocks.gitlab.io/assets/repo-footer.svg)](https://push.rocks)

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)
