exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todoListFeature.js'],
  capabilites: {
    browserName: 'chrome'
  }
}