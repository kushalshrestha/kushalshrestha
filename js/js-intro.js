/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return ' TEST SUCCEEDED';
  } else {
    return ' TEST FAILED.  Expected ' + expected + ' found ' + found;
  }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(
  'Expected output of max(20,10) is 20  ' + myFunctionTest(20, max(20, 10))
);
console.log(
  'Expected output of max(20,10) is 20  ' +
    myFunctionTest(10000, max(200, 10000))
);

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);
}

console.log(
  'Expected output of maxOfThree(5,4,44) is 44  ' +
    myFunctionTest(44, maxOfThree(5, 4, 44))
);
console.log(
  'Expected output of maxOfThree(55,4,44) is 55  ' +
    myFunctionTest(55, maxOfThree(55, 4, 44))
);

function isVowel(character) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowels.length; i++) {
    if (character.toLowerCase() == vowels[i]) {
      return true;
    }
  }
  return false;
}
console.log(
  'Expected ouptput of isVowel("a") is true ' +
    myFunctionTest(true, isVowel('a'))
);
console.log(
  'Expected ouptput of isVowel("z") is false ' +
    myFunctionTest(false, isVowel('z'))
);

function sum(array_list) {
  return array_list.reduce((acc, cv) => acc + cv);
}
console.log(
  'Expected output of sum([1, 2, 3, 4, 5]) is 15' +
    myFunctionTest(15, sum([1, 2, 3, 4, 5]))
);
console.log(
  'Expected output of sum([100, 200, 300]) is 600' +
    myFunctionTest(600, sum([100, 200, 300]))
);

function multiply(array_list) {
  return array_list.reduce((acc, cv) => acc * cv);
}
console.log(
  'Expected output of multiply([1, 2, 3, 4]) is 24' +
    myFunctionTest(24, multiply([1, 2, 3, 4]))
);
console.log(
  'Expected output of multiply([100, 200]) is 20000' +
    myFunctionTest(20000, multiply([100, 200]))
);

function reverse(a) {
  let reversedString = '';
  for (let i = a.length - 1; i >= 0; i--) {
    reversedString += a.charAt(i);
  }
  return reversedString;
}
console.log(
  'Expected output of reverse("jag testar") is ratset gaj' +
    myFunctionTest('ratset gaj', reverse('jag testar'))
);
console.log(
  'Expected output of reverse("Yellow Submarine") is enirambuS wolleY' +
    myFunctionTest('enirambuS wolleY', reverse('Yellow Submarine'))
);

function findLongestWord(wordList) {
  return wordList.reduce((acc, cv) => (acc.length > cv.length ? acc : cv));
}
console.log(
  "Expected output of findLongestWord(['Kushal', 'Shrestha', 'Ibrahimovic', 'Nesta']) is Ibrahimovic" +
    myFunctionTest(
      'Ibrahimovic',
      findLongestWord(['Kushal', 'Shrestha', 'Ibrahimovic', 'Nesta'])
    )
);
console.log(
  "Expected output of findLongestWord(['Big Data', 'Machine Learning', 'Mobile Programming', 'JAVA']) is Mobile Programming" +
    myFunctionTest(
      'Mobile Programming',
      findLongestWord([
        'Big Data',
        'Machine Learning',
        'Mobile Programming',
        'JAVA',
      ])
    )
);

function filterLongWords(wordList, lengthCheck) {
  let filteredList = [];
  for (var i = 0; i < wordList.length; i++) {
    if (wordList[i].length > lengthCheck) {
      filteredList.push(wordList[i]);
    }
  }
  return filteredList;
}
console.log(
  "Expected output of filterLongWords(['Argentina', 'Brazil', 'Chile', 'Denmark', 'Egypt'], 5) is Argentina, Brazil, Denmark" +
    myFunctionTest(
      JSON.stringify(['Argentina', 'Brazil', 'Denmark']),
      JSON.stringify(
        filterLongWords(['Argentina', 'Brazil', 'Chile', 'Denmark', 'Egypt'], 5)
      )
    )
);

const a = [1, 3, 5, 3, 3];
const multiplyByTen = a.map(function (elem, i, array) {
  return elem * 10;
});
console.log(
  'Output of multiplyByTen for [1, 3, 5, 3, 3] is [' + multiplyByTen + ']'
);

const equals3 = a.filter(function (elem, i, array) {
  return elem === 3;
});
console.log('Output of equals3 for [1, 3, 5, 3, 3] is [' + equals3 + ']');

const productofAll = a.reduce(function (prevValue, elem, i, array) {
  return prevValue * elem;
});
console.log('Output of productofAll for [1, 3, 5, 3, 3] is ' + productofAll);

// console.assert(productofAll == 13532, {
//   input: a,
//   output: productofAll,
//   expected_output: 135,
// });

// const d2 = a.find(function (elem) {
//   return elem > 1;
// }); //3
// const d3 = a.findIndex(function (elem) {
//   return elem > 1;
// }); //1
