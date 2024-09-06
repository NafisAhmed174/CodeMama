/*
Problem Statement
Write a program to check whether a number is Repdigit or not. A repdigit is a positive number composed out of the same digit.

Input
The input consists of a positive integer number 
𝑁
N.

Output
The output will print either "true" or "false".

Constraints
0 ≤ |N| ≤ 10000
Example:
Enter number

Input:
55
Output:
true
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

    let s = readline();

    for(let i = 1; i < s.length; i++){
        if(s[i] != s[0]){
            console.log(false);
            return;
        }
    }
    
    console.log(true);
}
 
function main() {
    let t = 1;
    // t = parseInt(readline());

    while(t--){
        solve();
    }
}