module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {
          '@modules': './src/modules',
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@services': './src/services',
          '@style': './src/style',
        },
      },
    ],
  ],
};
