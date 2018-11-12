const path = require('path')

module.exports = {
  pwa: {
    name: 'Formula One',
    themeColor: '#1b98e0',
    msTileColor: '#1b98e0',
    appleMobileWebAppCapable: 'yes',
    favicon32: 'assets/icons/favicon-32x32.png',
    favicon16: 'assets/icons/favicon-16x16.png',
    appleTouchIcon: 'assets/icons/icon-48.png',
    maskIcon: 'assets/icons/icon-safari-pinned-tab.svg',
    msTileImage: 'assets/icons/icon-144.png',
    appleMobileWebAppStatusBarStyle: 'black',

    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './service-worker.js'
    },
    manifestPath: './manifest.json'
  }
}
