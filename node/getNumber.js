const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
let sum = 0;
const getNumber = function () {
  readline.question('Enter number: ', number => {
    if (number == 'stop') {
      console.log('The sum is: ' + sum);
      return readline.close();
    } else {
      sum = sum + parseInt(number);
      getNumber();
    }
  });
};

getNumber();
