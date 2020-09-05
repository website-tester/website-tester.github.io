/* eslint-env es6 */
/* eslint no-console: "off" */
//* global x */
`use strict`;

/* /
w3 org best practices: https://www.w3.org/wiki/JavaScript_best_practices

use semicolons

use const for variables you dont think you will change
use let for most other variables
use var if you need to hoist your variable to the top of your function or script, or if you need function scope

use CAPITALS for variables you dont think you will change (true constants)
use underscores to separate words in variable name: let word_count
use descriptive variable and function names
use descriptive explanatory comments
use statements of fact for booleans; is, are, has, can, will
use actions/verbs for function name prefixes; get, set, change, edit

use Pascal_Case for class names
use camel_Case for function names
use lower_case for everything else that may change

only use global variables when necessary
/* */


/*
const template_Name_Space = function get_Globals() {
  const globals = {
    greeting (GREETING_TEXT = `G'day yall`) {
      alert(GREETING_TEXT);
      return this;
    },
    farewell (FAREWELL_TEXT = `See yall`) {
      alert(FAREWELL_TEXT);
      this.farewell_count++;
      return this;
    },
    EXAMPLE: true,
    farewell_count: 0
  };
  
  const locals = {
    HIDDEN: true
  };

  return globals;
}();
*/
alert('hi');