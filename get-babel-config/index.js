// const REACT_TYPE = 'react';
// const TS_TYPE = 'ts';
const customPresets =  {
  react: ['@babel/preset-react'],
  ts: [
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
};
const commonPresets = [
  ['@babel/preset-env', {
    targets: {
      browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
    },
    useBuiltIns: 'usage',
    corejs: {
      version: 2,
      proposals: true
    }
  }],
];
const plugins = [
  '@babel/proposal-class-properties',
]
module.exports = function(type) {
  const presets = commonPresets.concat(customPresets[type]);
  return {
    presets,
    plugins,
  } 
}