/*
Problem Statement
Write a program that asks the user for their name and then prints a personalized greeting.

Input
The input consists of a string 
S
S

Output
Output a single line containing the personalized greeting.

Constraints
1 ≤ S ≤ 1000
Example:
What is your name?

Input:
Alice
Output:
Hello, Alice! Nice to meet you.
Notes:
In the example, the user's name is "Alice". The program prints a greeting message, combining the user's name with the predefined message.
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

    console.log(`Hello, ${s}! Nice to meet you.`);
}
 
function main() {
    let t = 1;
    // t = parseInt(readline());

    while(t--){
        solve();
    }
    
}