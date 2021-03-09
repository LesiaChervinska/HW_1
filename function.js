function getStrDayOfNumber(number) {
  switch (number) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("enter number from 1 to 7");
  }
  return number;
}

function getDistanse(x1, x2, y1, y2) {
  let res = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  res = +res.toFixed(2);
  return res;
}

// 1 вариант
function getStringNumber(num) {
  let numbersUpToTwenty = [
    "",
    "один",
    "два",
    "три",
    "четыре",
    "пять",
    "шесть",
    "семь",
    "восемь",
    "девять",
    "десять",
    "одинадцать",
    "двенадцадь",
    "тринадцать",
    "четырнадцать",
    "пятнадцать",
    "шестнадцать",
    "семнадцать",
    "восемнадцать",
    "девятнадцать",
  ];
  let tens = [
    "сто",
    "десять",
    "двадцать",
    "тридцать",
    "сорок",
    "пятьдесят",
    "шестьдесят",
    "семьдесят",
    "восемьдесят",
    "девяносто",
  ];
  let hundreds = [
    "",
    "сто",
    "двести",
    "триста",
    "четыреста",
    "пятьсот",
    "шестьсот",
    "семьсот",
    "восемьсот",
    "девятьсот",
  ];

  let result;
  if (num < 0) {
    return "enter number more then 0";
  }
  if (num <= 19) {
    result = numbersUpToTwenty[num];
  }

  if (num > 19 && num < 100) {
    result = `${tens[Math.floor(num / 10)]} ${numbersUpToTwenty[num % 10]}`;
    if (num % 10 == 0) {
      result = `${tens[Math.floor(num / 10)]}`;
    }
  }

  if (num > 99 && num <= 999) {
    result = `${hundreds[Math.floor(num / 100)]} ${
      tens[Math.floor((num % 100) / 10)]
    } ${numbersUpToTwenty[Math.floor(num % 10)]}`;

    if (num < 120) {
      result = `${hundreds[Math.floor(num / 100)]} ${
        numbersUpToTwenty[Math.floor(num % 100)]
      }`;
    }
    if (num % 10 == 0) {
      result = `${hundreds[Math.floor(num / 100)]} ${
        tens[Math.floor((num % 100) / 10)]
      }`;
    }
    if (num % 100 == 0) {
      result = `${hundreds[Math.floor(num / 100)]} `;
    }
    if (Math.floor((num / 10) % 10) == 0) {
      result = `${hundreds[Math.floor(num / 100)]} ${
        numbersUpToTwenty[Math.floor(num % 100)]
      } `;
    }
  }
  if (num > 999) {
    result = " enter number less then 999";
  }
  return result;
}

// второй вариант
function getStringFromNumber(number) {
  let numbersUpToTwenty = [
    "",
    "один",
    "два",
    "три",
    "четыре",
    "пять",
    "шесть",
    "семь",
    "восемь",
    "девять",
    "десять",
    "одинадцать",
    "двенадцадь",
    "тринадцать",
    "четырнадцать",
    "пятнадцать",
    "шестнадцать",
    "семнадцать",
    "восемнадцать",
    "девятнадцать",
  ];
  let tens = [
    "сто",
    "десять",
    "двадцать",
    "тридцать",
    "сорок",
    "пятьдесят",
    "шестьдесят",
    "семьдесят",
    "восемьдесят",
    "девяносто",
  ];
  let hundreds = [
    "",
    "сто",
    "двести",
    "триста",
    "четыреста",
    "пятьсот",
    "шестьсот",
    "семьсот",
    "восемьсот",
    "девятьсот",
  ];

  let result = "";

  if (number < 0 || number > 999) {
    result = "Enter number from 1 to 999";
  } else if (number == 0) {
    result = "ноль";
  } else {
    let numHaveHandrets = Math.floor(number / 100);
    result += hundreds[numHaveHandrets];

    let numTens = number % 100;
    if (numTens < 20) {
      result += " " + numbersUpToTwenty[numTens];
    } else {
      let numHaveTens = Math.floor(numTens / 10);
      result += " " + tens[numHaveTens];

      let numHaveOne = numTens % 10;
      result += " " + numbersUpToTwenty[numHaveOne];
    }
  }
  return result;
}

function getNumberFromString(str) {
  let numbersObj = {
    один: 1,
    два: 2,
    три: 3,
    четыре: 4,
    пять: 5,
    шесть: 6,
    семь: 7,
    восемь: 8,
    девять: 9,
    десять: 10,
    одинадцать: 11,
    двенадцать: 12,
    тринадцать: 13,
    четырнадцать: 14,
    пятнадцать: 15,
    шестнадцать: 16,
    семьнадцать: 17,
    восемнадцать: 18,
    девятнадцать: 19,
    двадцать: 20,
    тридцать: 30,
    сорок: 40,
    пятьдесят: 50,
    шестьдесят: 60,
    семьдесят: 70,
    восемьдесят: 80,
    девяносто: 90,
    сто: 100,
    двести: 200,
    триста: 300,
    четыреста: 400,
    пятьсот: 500,
    шестьсот: 600,
    семьсот: 700,
    восемьсот: 800,
    девятьсот: 900,
  };

  let arrStr = str.split(" ");
  let res = 0;

  for (let i = 0; i < arrStr.length; i++) {
    for (let key in numbersObj) {
      if (key === arrStr[i]) {
        res += numbersObj[key];
      }
    }
  }

  return res;
}
