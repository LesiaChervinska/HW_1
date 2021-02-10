let a = [1,4,7,3,3];
function getMinElement(arr) {
  let min = arr[0];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      index = i;
    }
  }
  return [min, index];
}

function getMaxElement(arr) {
  let max = arr[0];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      index = i;
    }
  }
  return [max, index];
}


function getSumOddIndex (arr){
    let sum = 0;
    for(let i= 0; i< arr.length; i++){
        if(i % 2 === 0){
            sum += arr[i]
        }
    }
    return sum;
}


function reverseArray(arr){
    let arrReverse = arr.reverse();
    return arr;
}


function getSumOddElements(arr){
    let count = 0;
    for(let i =0; i< arr.length;i++){
        if(arr[i] % 2 !==0){
            count++
        }
    }
    return count;
}

function changePlaceElements (a){
    
}