const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: '.',
  testMatch: '**/e2e/**/*.spec.js',
  timeout: 30000,
  use: {
    headless: true,
    baseURL: __dirname + '/frontend/',
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
    { name: 'webkit', use: { browserName: 'webkit' } },
  ]
});
