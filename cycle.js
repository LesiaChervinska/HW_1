function getSumOfEvenNumbers() {
  let sum = 0;
  let amount = 0;
  for (let i = 1; i <= 99; i++) {
    if (i % 2 == 0) {
      sum += i;
      amount++;
    }
  }
  return `Sum of even numbers - ${sum}, amount - ${amount}`;
}

function checkPrimeNumber(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    } else {
      return true;
    }
  }

  return num > 1;
}

function getMathSqrt(num) {
  let sqrt = 0;
  for (let i = 0; i < num; i++) {
    if (i * i <= num) {
      sqrt = i;
    }
  }
  return sqrt;
}

function getFactorial(num) {
  let number = 1;
  for (let i = 1; i <= num; i++) {
    number *= i;
  }
  return number;
}

function getSumOfNummer(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

function getMirrorNumber(num) {
  let number = 0;
  while (num > 0) {
    number = number * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return number;
}
