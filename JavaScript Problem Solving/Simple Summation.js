/*
Problem Statement
Write a program that calculates and prints the sum of two numbers entered by the user.

Input
The input consists of two integers.

Output
Output a single line containing the sum of two integers.

Constraints
-2 31 ≤ |S| ≤ 231 - 1
Example:
Enter two numbers

Input:
5 2
Output:
7
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

    let a = readline().split(' ').map(Number);
    console.log(a[0] + a[1]);
}
 
function main() {
    let t = 1;
    // t = parseInt(readline());

    while(t--){
        solve();
    }
    
}