/*
Problem Statement
Write a program where you will be given a number and it's exponent. You will have to calculate the power of the number.

Input
The input consists of two integer numbers.

Output
The output will be an integer number.

Constraints
0 ≤ |S| ≤ 109
Example:
Enter numbers.

Input:
3 4
Output:
81
*/

"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");
 
function print(x) {
    console.log(x);
}
let inputString = "";
let currentLine = 0;
 
process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});
process.stdin.on("end", () => {
    inputString = inputString.split("\n");
    main();
});
function readline() {
    return inputString[currentLine++];
}

function solve(){

    let nums = readline().split(' ').map(Number);
    let a = nums[0];
    let b = nums[1];

    let BinaryExponentiation = (base, power) => {

        let result = 1;

        while(power){
            if(power & 1){
                result *= base;
            }
            power >>= 1;
            base *= base;
        }
        return result;
    };

    console.log(BinaryExponentiation(a, b));

}
 
function main() {
    let t = 1;
    // t = parseInt(readline());

    while(t--){
        solve();
    }
    
}