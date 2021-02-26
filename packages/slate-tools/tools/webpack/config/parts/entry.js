const SlateConfig = require('@bigsigmadevelopment/slate-config');
const getGeneralEntrypoints = require('../utilities/get-general-entrypoints');
const getLayoutEntrypoints = require('../utilities/get-layout-entrypoints');
const getTemplateEntrypoints = require('../utilities/get-template-entrypoints');
const config = new SlateConfig(require('../../../../slate-tools.schema'));

module.exports = {
  entry: Object.assign(
    {},
    getGeneralEntrypoints(),
    getLayoutEntrypoints(),
    getTemplateEntrypoints(),
    config.get('webpack.entrypoints'),
  ),
};
