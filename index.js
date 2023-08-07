const prompt = require("prompt-sync")();

// TASK 1
function firstLetterCap(input) {
  return input.replace(/\b\w/g, (letter) => {
    return letter.toUpperCase();
  });
}

// TASK 2
function isPalindrone(input) {
  const reversedInput = input.split("").reverse().join("");
  return input === reversedInput;
}

// TASK 3
function evenNumbers(numbers) {
  return numbers.filter((number) => number % 2 == 0);
}

// TASK 4
function validateDateFormat(date) {
  const validator = /^(19|20)[0-9]{2}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

  if (!validator.test(date)) {
    return false;
  }

  var parts = date.split("-");
  var year = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10);
  var day = parseInt(parts[2], 10);

  var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
    monthLength[1] = 29;
  }

  return monthLength[month - 1] >= day && day > 0;
}

// TASK 5
function blurCardNumber(card) {
    const validator = /^([0-9]{4}-){3}[0-9]{4}$/;

    if(!validator.test(card)) {
        return "Wrong card format";
    }

    return card.replace(/[0-9]{4}-/g, "####-");
}

// MAIN
do {
  console.log("1. Capitalize first letter");
  console.log("2. Is Palindrone?");
  console.log("3. Even numbers");
  console.log("4. Validate date format (YYYY-MM-DD)");
  console.log("5. Blur card number");
  console.log("0: Exit");

  const input = prompt("Choose a task: ");

  var num = Number(input);

  if (!(!isNaN(num) && num >= 0 && num <= 5)) {
    console.log("WRONG INPUT! Start application again");
    process.exit();
  }

  let string;

  switch (num) {
    case 1:
      string = prompt("Enter a string: ");
      console.log(firstLetterCap(string));
      break;
    case 2:
      string = prompt("Enter a string: ");
      console.log(isPalindrone(string));
      break;
    case 3:
      const numberArray = [];
        console.log("Type any number to add it into array");
        console.log("Type any character to stop adding into array");
        do {
          const inputed = prompt();
          const inputedNum = Number(inputed);
          if(isNaN(inputedNum)) {
            break;
          }
          numberArray.push(inputedNum);
        }while(true);
        console.log(evenNumbers(numberArray));
      break;
    case 4:
      string = prompt("Enter a date: ");
      console.log(validateDateFormat(string));
      break;
    case 5:
        string = prompt("Enter a card number: ");
        console.log(blurCardNumber(string));
  }

  console.log("----");
} while (num != 0);
