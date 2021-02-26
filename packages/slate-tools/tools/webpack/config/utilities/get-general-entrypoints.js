const fs = require('fs');
const path = require('path');
const SlateConfig = require('@bigsigmadevelopment/slate-config');
const config = new SlateConfig(require('../../../../slate-tools.schema'));

module.exports = function() {
  const entrypoints = {};
  fs.readdirSync(config.get('paths.theme.src.scripts')).forEach((file) => {
    const name = path.parse(file).name;
    const jsFile = path.join(
      config.get('paths.theme.src.scripts'),
      `${name}.js`,
    );

    if (fs.existsSync(jsFile)) {
      entrypoints[`${name}_script`] = jsFile;
    }
  });

  fs.readdirSync(config.get('paths.theme.src.styles')).forEach((file) => {
    const name = path.parse(file).name;
    const scssFile = path.join(
      config.get('paths.theme.src.styles'),
      `${name}.scss`,
    );

    if (fs.existsSync(scssFile)) {
      entrypoints[`${name}_style`] = scssFile;
    }
  });

  return entrypoints;
};