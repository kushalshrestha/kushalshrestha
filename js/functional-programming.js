/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return ' TEST SUCCEEDED';
  } else {
    return ' TEST FAILED.  Expected ' + expected + ' found ' + found;
  }
}

/* max returns the maximum of 2 arguments */

let sum = function (array_list) {
  return array_list.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
};

console.log(
  'Expected output of sum([1, 2, 3, 4, 5]) is 15' +
    myFunctionTest(15, sum([1, 2, 3, 4, 5]))
);
console.log(
  'Expected output of sum([100, 200, 300]) is 600' +
    myFunctionTest(600, sum([100, 200, 300]))
);

let multiply = function (array_list) {
  return array_list.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
};

console.log(
  'Expected output of multiply([1, 2, 3, 4]) is 24' +
    myFunctionTest(24, multiply([1, 2, 3, 4]))
);
console.log(
  'Expected output of multiply([100, 200]) is 20000' +
    myFunctionTest(20000, multiply([100, 200]))
);

let reverse = function (str) {
  return str.split('').reduce((accumulator, currentValue) => {
    return currentValue + accumulator;
  }, '');
};

console.log(
  'Expected output of reverse("jag testar") is ratset gaj' +
    myFunctionTest('ratset gaj', reverse('jag testar'))
);
console.log(
  'Expected output of reverse("Yellow Submarine") is enirambuS wolleY' +
    myFunctionTest('enirambuS wolleY', reverse('Yellow Submarine'))
);

let filterLongWords = function (wordList, lengthCheck) {
  return wordList.filter(word => word.length > lengthCheck);
};

console.log(
  "Expected output of filterLongWords(['Argentina', 'Brazil', 'Chile', 'Denmark', 'Egypt'], 5) is Argentina, Brazil, Denmark" +
    myFunctionTest(
      JSON.stringify(['Argentina', 'Brazil', 'Denmark']),
      JSON.stringify(
        filterLongWords(['Argentina', 'Brazil', 'Chile', 'Denmark', 'Egypt'], 5)
      )
    )
);
