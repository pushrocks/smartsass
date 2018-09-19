import { tap, expect } from '@pushrocks/tapbundle';

import * as smartsass from '../ts/index';

tap.test('should create a valid instance of smartsass', async () => {
  const testsmartSass = new smartsass.Smartsass({
    data: 'hello'
  })
  expect(testsmartSass).to.be.instanceof(smartsass.Smartsass);
});

tap.start();
