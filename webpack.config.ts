import {Configuration} from 'webpack';
import * as fs from 'fs';
import * as path from 'path';

interface CustomWebpackOptions {
  customOption?: boolean;
}

const customWebpackConfig = (
  config: Configuration,
  options: CustomWebpackOptions
): Configuration => {

  const configString = JSON.stringify(config, null, 2);

  const outputConfigurationPath = path.join(__dirname, 'build', 'webpack-configuration');
  const outputConfigurationFile = `${outputConfigurationPath}/full-webpack-config-output.json`;

  console.log('\nCreate folder', outputConfigurationPath)
  fs.mkdirSync(outputConfigurationPath, {recursive: true});
  fs.writeFileSync(outputConfigurationFile, configString, 'utf-8');

  return config;
};

export default customWebpackConfig;
