const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('dist')
    .setPublicPath('.')
    .setManifestKeyPrefix('app')

    .addEntry('scripts', './scripts/index.ts')

    .cleanupOutputBeforeBuild()
    .disableSingleRuntimeChunk()

    .enableSourceMaps(!Encore.isProduction())

    .enableTypeScriptLoader()

    .configureBabel(() => {}, {
        useBuiltIns: 'usage',
        corejs: 3
    })
;

module.exports = Encore.getWebpackConfig();
