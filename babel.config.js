module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@modules': './src/modules',
          '@navigation': './src/navigation',
          '@services': './src/services',
          '@store': './src/store',
          '@style': './src/style',
          '@utils': './src/utils',
          '@mocks': './src/mocks',
        },
      },
    ],
  ],
};
