/* ASSIGNMENT */
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  console.log(' 1 : ' + x);
  console.log(' 2 : ' + a);
  var f = function (a, b, c) {
    b = a;
    console.log(' 3 : ' + b);
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(' 4 : ' + b); //9
  var x = 10;
};

c(8, 9, 10);
console.log(' 5 : ' + b); //10
console.log(' 6 : ' + x); //1

/* OUTPUT:
undefined
8
8
9
10
1

--------

Global Scope : 
Global scope is the scope that contains all of the things defined outside of all code blocks. A global variable has a global scope and whenever an undeclared variable is assigned
with a value, the variable is also a part of global scope. Any variables assigned without an explicit scope (using the var, let, or const keywords) automatically become global variables. The same is true for functions.

Local Scope: It contains things defined inside a code blocks.
* Local variables cannot be accessed or modified outside the function declaration.






JavaScript has global scope and local scope.
Variables declared and initialized outside any function become global variables.
Variables declared and initialized inside function becomes local variables to that function.
Variables declared without var keyword inside any function becomes global variables automatically.
Global variables can be accessed and modified anywhere in the program.
Local variables cannot be accessed outside the function declaration.
Global variable and local variable can have same name without affecting each other.
JavaScript does not allow block level scope inside { } brackets.
*/
/* Question 3 */
var globalvar = 1;
function outerFunction() {
  var outerVar = 2;
  function innerFunction() {
    var innerVar = 3;
  }
  innerFunction();
}
/*
a. 

*/

/* Question 4*/
var x = 9;
function myFunction() {
  return x * x;
}

console.log(myFunction()); //81
x = 5;
console.log(myFunction()); //25

/* Question 5 */
var foo = 1;
function bar() {
  if (!foo) {
    var foo = 10;
  }
  console.log(foo); //10
}
bar();
