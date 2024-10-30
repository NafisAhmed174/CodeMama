/*
Problem Statement
Write a program that checks if a number entered by the user is even or odd.

Input
The input consists of a integer.

Output
Output a single line explaining whether it is even or odd.

Constraints
-2 31 ≤ |S| ≤ 231 - 1
Example-1:
Enter a number

Input:
7
Output:
7 is an odd number.
Example-2:
Enter a number

Input:
8
Output:
8 is an even number.
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

    let n = parseInt(readline());

    if(n & 1){
        console.log(`${n} is an odd number.`);
    }
    else{
        console.log(`${n} is an even number.`);
    }

}
 
function main() {
    let t = 1;
    // t = parseInt(readline());

    while(t--){
        solve();
    }
    
}