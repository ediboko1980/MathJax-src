const PACKAGE = require('../../webpack.common.js');

module.exports = PACKAGE(
  'mml-svg',                          // the package to build
  '../../../js',                      // location of the MathJax js library
  [],                                 // packages to link to
  __dirname                           // our directory
);
