# smartsass
smart wrapper for sass

## Availabililty
[![npm](https://pushrocks.gitlab.io/assets/repo-button-npm.svg)](https://www.npmjs.com/package/smartsass)
[![git](https://pushrocks.gitlab.io/assets/repo-button-git.svg)](https://GitLab.com/pushrocks/smartsass)
[![git](https://pushrocks.gitlab.io/assets/repo-button-mirror.svg)](https://github.com/pushrocks/smartsass)
[![docs](https://pushrocks.gitlab.io/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/smartsass/)

## Status for master
[![build status](https://GitLab.com/pushrocks/smartsass/badges/master/build.svg)](https://GitLab.com/pushrocks/smartsass/commits/master)
[![coverage report](https://GitLab.com/pushrocks/smartsass/badges/master/coverage.svg)](https://GitLab.com/pushrocks/smartsass/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/smartsass.svg)](https://www.npmjs.com/package/smartsass)
[![Dependency Status](https://david-dm.org/pushrocks/smartsass.svg)](https://david-dm.org/pushrocks/smartsass)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/smartsass/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/smartsass/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/smartsass/badges/code.svg)](https://www.bithound.io/github/pushrocks/smartsass)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage
Use TypeScript for best in class instellisense.

```javascript
import * as smartsass from Smartsass
import * as bourbon from 'bourbon
import * as neat from 'neat'

let mySmartsass = new smartsass.Smartsass({
  filePath: './some.css',
  includePaths: boubon.includePaths
})

mySmartsass.addIncludePaths(neat.includePaths)

let renderedString = mySmartsass.render()
```

For further information read the linked docs at the top of this README.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://pushrocks.gitlab.io/assets/repo-footer.svg)](https://push.rocks)
