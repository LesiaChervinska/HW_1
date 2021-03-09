let array = [5, 3, 1, 4, 2, 7];

function getMinElement(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function getMaxElement(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

function getIndexMinElement(arr) {
  let minIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[minIndex] > arr[i]) {
      minIndex = i;
    }
  }
  return minIndex;
}

function getIndexMaxElement(arr) {
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[maxIndex] < arr[i]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

function getSumOddIndex(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
}

function reverseArray(arr) {
  let arrReverse = arr.reverse();
  return arr;
}

function getSumOddElements(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      count++;
    }
  }
  return count;
}

function changePlaceElements(arr) {
  let temp = arr.splice(0, arr.length / 2);
  let arr1 = arr.concat(temp);
  return arr1;
}

function sortArrByBuble(arr) {
  let temp;
  for (let k = 0; k < arr.length; k++) {
    let change = 0;
    for (let i = 0; i < arr.length - 1 - k; i++) {
      if (arr[i] > arr[i + 1]) {
        change++;
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    if (!change) {
      break;
    }
  }

  return arr;
}

function sortArrBySelect(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    let minEl = i;
    let change = 0;
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[k] < arr[minEl]) {
        minEl = k;
        change++;
      }
    }
    if (minEl !== i) {
      temp = arr[i];
      arr[i] = arr[minEl];
      arr[minEl] = temp;
    }
    if (!change) {
      break;
    }
  }
  return arr;
}

function sortArrByInsert(arr) {
  for (let i = 1; i < arr.length; i++) {
    let insertEl = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > insertEl) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = insertEl;
  }
  return arr;
}
