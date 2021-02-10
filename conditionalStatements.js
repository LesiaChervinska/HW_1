function doCalculate(num1,num2){
    let result = 0;
    if(num1 % 2 === 0){
        result = num1 * num2;
    }
    else{
        result = num1 + num2;
    }
    return result;
}

function getDefineQuarter(x, y){
    let result;
    if(x > 0 && y >0){
        result = 'I quarter';
    }
    else if(x < 0 && y > 0){
        result = 'II quarter';
    }
    else if(x < 0 && y < 0){
        result = 'III quarter';
    }
    else if(x > 0 && y < 0){
        result = 'IV quarter';
    }
    else if(x === 0 && y === 0){
        result = 'Start of coordinate system';
    }
    else if(x === 0 && y > 0){
        result = 'Between I  and II quarter';
    }
    else if(x === 0 && y < 0){
        result = 'Between III  and IV quarter';
    }
    else if(y === 0 && x > 0){
        result = 'Between I  and IV quarter';
    }
    else if(y === 0 && x < 0){
        result = 'Between II  and III quarter';
    }
    return result;
}


function getSum(num1, num2, num3){
    let sum = 0;
    if(num1 >  0){
        sum += num1;
    }
    if(num2 > 0){
        sum += num2;
    }
    if(num3 > 0){
        sum += num3;
    }
    return sum;
}


function getMaxResult(a, b, c){
   let max = 0;
   if(a + b + c > a* b * c){
       max = a + b + c + 3;
   }
   else{
       max = a * b * c + 3;
   }
   return max;
}

function getRatingOfStudents(rate){
    let grade;
    if(rate === 0 && rate <=19){
        grade = 'F'
    }
    else if(rate >=20 && rate <=39 ){
        grade = 'E'
    }
    else if(rate >=40 && rate <=59 ){
        grade = 'D'
    }
    else if(rate >=60 && rate <=74 ){
        grade = 'C'
    }
    else if(rate >=75 && rate <=89 ){
        grade = 'B'
    }
    else if(rate >=90 && rate <=100 ){
        grade = 'A'
    }

    return `Your grade is '${grade}'`
}
