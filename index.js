var _ = require("lodash");
var chalk = require('chalk');

console.log(chalk.blue('Hello world!'));

_.each([1, 2], function(value) {
  console.log(value);
});
