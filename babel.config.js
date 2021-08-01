module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@models': './src/models',
          '@config': './src/config',
          '@controllers': './src/controllers',
        },
      },
    ],
  ],
  ignore: [
    '**/*.spec.ts',
  ],
};
