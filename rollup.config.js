/* globals process */

import buble from 'rollup-plugin-buble';
import { uglify } from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';

const environment = process.env.ENV || 'development';
const isDevelopmentEnv = environment === 'development';

module.exports = [
  {
    input: 'dist/main.js',
    output: {
      format: 'cjs',
      sourcemap: false,
      file: `deploy/${require('./package.json').name}-v${require('./package.json').version}.js`,
    },
    external: [
      '@nestjs/common',
      '@nestjs/core',
      '@nestjs/platform-express',
      'reflect-metadata',
      'axios',
      'moment',
      'qs',
      'rxjs',
      'rxjs/operators',
    ],
    plugins: [commonjs(), buble(), !isDevelopmentEnv && uglify({ output: { inline_script: true } })],
  },
];
