import division from "./class";
import nums from "./type";



let numbers: nums = {
    MAX_SAFE_INTEGER: 9007199254740991,
    caseinArray: false
}
let numArray: number[] = [];
let evenArray: number[] = [];
let evenArrayDivBy4: number[] = [];
let evenArrayDivBy6: number[] = [];
let evenArrayDivBy8: number[] = [];
let oddArray: number[] = [];
let primeNumArray: number[] = [];

//This while loop defines the number of numbers, their span and not to be repeated
while (numArray.length != 100) {
    let randomNum = randomNumber(1 , numbers.MAX_SAFE_INTEGER);
    let caseinArray = controlOfNums(numArray.length, randomNum);

    if (!caseinArray)
        numArray.push(randomNum);
        numbers.caseinArray = true;
}

numArray = numArray.sort((num1,num2) => num1 - num2);

//this prints numbers in string
let allNums: string = numArray.toString();
console.log("Generated numbers are: " + allNums);

//this division prints even numbers with their divider
division.divisionNum(numArray, evenArray, numArray.length, 0, 2);
let evenNums: string = evenArray.toString();
console.log("Even Numbers are: " + evenNums);

//these divisions prints even numbers with their divider
console.log("Even numbers divisible by 2 are: " + evenNums);

division.divisionNum(evenArray, evenArrayDivBy4, evenArray.length, 0, 4);
let evenNums4: string = evenArrayDivBy4.toString();
console.log("Even numbers divisible by 4 are: " + evenNums4);

division.divisionNum(evenArray, evenArrayDivBy6, evenArray.length, 0, 6);
let evenNums6: string = evenArrayDivBy6.toString();
console.log("Even numbers divisible by 6 are: " + evenNums6);

division.divisionNum(evenArray, evenArrayDivBy8, evenArray.length, 0, 8);
let evenNums8: string = evenArrayDivBy8.toString();
console.log("Even numbers divisible by 8 are: " + evenNums8);


//this division prints odd  numbers string
division.divisionNum(numArray, oddArray, numArray.length, 1, 2);
let oddNums: string = oddArray.toString();
console.log("Odd Numbers are: " + oddNums);

//this prime Array prints prime numbers string
primeNumArray = division.primeNumbers(oddArray, primeNumArray, oddArray.length);
let primeNums: string = primeNumArray.toString();
console.log("Prime Numbers are: " + primeNumArray);


/**
 * This function generates random numbers
 * @param min_num defines that min_num is number
 * @param max_num defines that max_num is number
 * @returns integer from span
 */
function randomNumber(min_num : number, max_num : number){
    return Math.floor(Math.random() * (max_num - min_num)) + min_num;
}

/**
* This function ensures that numbers are not repeated
* @param numOfRepeats1 defines number of repeats of this function
* @param generatedNum defines that value is number
* @returns boolean
*/
function controlOfNums(numOfRepeats1: number, generatedNum: number) {
    let control = false;
    for (let i: number = 0; i <= numOfRepeats1; i++)
    {
        if(generatedNum == numArray[i])
        {
           control = true;
           break;
        }
    }
    if (control)
    return true;
    if (!control)
    return false;
}