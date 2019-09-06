/* globals process */

import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';

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
    plugins: [commonjs(), buble()],
  },
];
