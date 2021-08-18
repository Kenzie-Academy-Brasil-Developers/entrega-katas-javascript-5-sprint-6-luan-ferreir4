//1
function testeReverseString1() {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `ERROR! Expected: ${expected}, got: ${result}`)
 }
 testeReverseString1();

 function testeReverseString2() {
    let result = reverseString('alo');

    console.assert(isNaN(result), `Error, You must type a sting`)
 }
 testeReverseString2();

 function reverseString(str){
    if(isNaN(str) === true){
        let strArr = str.split("").reverse();
        let newStr = strArr.join("");
        return newStr;
    }
    return str;
 }
//  reverseString('stri');
// 2
function testeReverseSentence1() {
    let result = reverseSentence("Kenzie Academy");
    let expected = "Academy Kenzie";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
 testeReverseSentence1();

 function testeReverseSentence2(){
     let test = reverseSentence('string exemple'); 
     console.assert(isNaN(test), `Error! Expected a string insted got: ${test}`)
 }
 testeReverseSentence2();

 function reverseSentence(sentence){
    if(isNaN(sentence) === true){
        let sentenceArr = sentence.split(" ").reverse();
        let newSentece = sentenceArr.join(" ");
        return newSentece;
    }
        return sentence;   
 }

// 3 
