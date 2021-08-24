//1
function testeReverseString1() {
    let output   = reverseString('Kenzie Academy');
    let expected = "ymedacA eizneK";

    console.assert(output === expected, `ERROR! Expected: ${expected}, got: ${output}.`);
 }
 testeReverseString1();

 function testeReverseString2() {
    let output = reverseString('Subino onibuS');
    let expected = "Subino onibuS";
    console.assert(output === expected, `ERROR! Expected: ${expected}, got: ${output}.`);
 }
 testeReverseString2();

 function testeStringInputMsg1() {
    let output = reverseString('Exemple');

    console.assert(isNaN(output), `Error in reverseString function, You must type a string.`);
 }
 testeStringInputMsg1();

 function reverseString(str) {
    if(isNaN(str) === true){
        let strArr = str.split("").reverse();
        let newStr = strArr.join("");
        return newStr;
    }
    return str;
 }

// 2
function testeReverseSentence1() {
    let output   = reverseSentence("Kenzie Academy");
    let expected = "Academy Kenzie";

    console.assert(output === expected, `Expected: ${expected}, got: ${output}.`);
 }
 testeReverseSentence1();

 function testeReverseSentence2() {
     let test = reverseSentence('string exemple'); 

     console.assert(isNaN(test), `Error! Expected a string insted got: ${test}.`);
 }
 testeReverseSentence2();

 function testeStringInputMsg2() {
    let test = reverseSentence('string exemple'); 

    console.assert(isNaN(test), `Error! Expected a string insted got: ${test}.`);
}
testeStringInputMsg2();

 function reverseSentence(sentence) {
    if(typeof(sentence) === 'string'){
        let sentenceArr = sentence.split(" ").reverse();
        let newSentece  = sentenceArr.join(" ");
        return newSentece;
    }
        return sentence;   
 }

// 3 
function testMinimumValue1() {
    let arrTest = [7,8,2,4,10,5];
    let output  = minimumValue(arrTest);

    console.assert(output === 2, `Error! Expected 2 insted got ${output}.`);
}
testMinimumValue1();

function testMinimumValue2() {
    let arrTest = [-2,3,-144,10,55,-2]
    let output  = minimumValue(arrTest);

    console.assert(output === -144, `Error! Expexted -144 insted got ${output}.`);
}
testMinimumValue2();

function  minimumValue(array) {
    let lowNum = array[0];

    array.forEach(number =>{
     if(number < lowNum){
         lowNum = number;
     }
    });

    return lowNum;
}

//4
function testMaximumValue1() {
    let arrTest = [-4,200,7,123,0,-247];
    let output  = maximumValue(arrTest);

    console.assert(output === 200, `Error! Expected 200, inted got ${output}.`);
}
testMaximumValue1();

function testMaximumValue2() {
    let arrTest = [-300,-7,-55,-5,-27];
    let output  = maximumValue(arrTest);

    console.assert(output === -5, `Error! Expected -5, inted got ${output}.`);
}
testMaximumValue2();

function maximumValue(array) {
    let greaterNum = array[0];

    array.forEach(number =>{
        if(number > greaterNum){
            greaterNum = number;
        }
       });
   
       return greaterNum;
}

//5
function testCalculateRemainder1() {
    let output   = calculateRemainder(10,3);
    let expected = 1; 
    console.assert(output === expected, `Error! Expected ${1} got: ${output}.`);
}
testCalculateRemainder1();

function testCalculateRemainder2() {
    let output   = calculateRemainder(200,10);
    let expected = 0; 
    console.assert(output === expected, `Error! Expected ${expected} got: ${output}`);
}
testCalculateRemainder2();

function calculateRemainder(x,y) {
    let result = x % y;
    return result;  
}

//6
function  testDistinctValues1() {
    let testInput = '1 2 3 4 5' 
    let output    = distinctValues(testInput);
    let expected  = '1 2 3 4 5'

    console.assert(output === expected, `Error! Got: ${output}, expected: ${expected}`);
}
testDistinctValues1();

function testDistinctValues2() {
    let testInput = '4 22 4 22 4 22' 
    let output    = distinctValues(testInput);
    let expected  = '4 22'

    console.assert(output === expected, `Error! Got: ${output}, expected: ${expected}.`);
}
testDistinctValues2();

function distinctValues(input) {
    let inputArr = input.split(" ");

    let output = '';
    let distinctNumbers = inputArr.filter((number,index,arr)=>{

        return arr.indexOf(number) === index;
        
    })
    
    output = distinctNumbers.join(' ');
    return output;
}

//7
function testCountValues1() {
    let testInput = "1 3 5 3 7 3 1 1 5";
    let output    = countValues(testInput);
    let expected  = "1(3) 3(3) 5(2) 7(1)"

    console.assert(output === expected, `Error! Got: ${output}, expected: ${expected}.`);
}
testCountValues1();

function testCountValues2() {
    let testInput = "4 4 4 3 9 3 9 3 3";
    let output    = countValues(testInput);
    let expected  = "3(4) 4(3) 9(2)"

    console.assert(output === expected, `Error! Got: ${output}, expected: ${expected}.`);
}
testCountValues2();

function countValues(input) {
    let inputArr = input.split(' ').sort();
    let numList  = [];
    let frequenceList = [];
    let ant;
    let outArr = [];

    numList = inputArr.filter((num, index, arr)=>{
        if(arr.indexOf(num) === index){
            return num;
        }
    });

    for (let number of inputArr) {
        if (number !== ant) {
        frequenceList.push(1);
        }
        else ++frequenceList[frequenceList.length - 1];
        ant = number;
      }
    
     for(let i = 0; i < numList.length; i++){
        let num  = numList[i];
        let freq = frequenceList[i]
        outArr.push(`${num}(${freq})`)
     }
    
     let output = outArr.join(" ")
     return output;
}


//8
function testEvaluateExpression1() {
    let output = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    let expected = -3;

    console.assert(output === expected, `esperado: ${expected}, obtido: ${output}`)
}
testEvaluateExpression1();

function testEvaluateExpression2() {
    let output = evaluateExpression("a + b - c + d", {a: 10, b: 85, c: 27, d: 100});
    let expected = 168;

    console.assert(output === expected, `esperado: ${expected}, obtido: ${output}`)
}
testEvaluateExpression2();

function evaluateExpression(expression, obj) {
    let exprArr = expression.split(' ');

    let total = obj[exprArr[0]];

    for(let i = 0; i < exprArr.length; i+=2){

        if(exprArr[i+1] === '+'){
            total += obj[exprArr[i+2]];
        }
        else if(exprArr[i+1] === '-'){
            total -= obj[exprArr[i+2]];
        }
    }     
    
    return total;
}
evaluateExpression("a + b - c + d", {a: 10, b: 85, c: 27, d: 100});