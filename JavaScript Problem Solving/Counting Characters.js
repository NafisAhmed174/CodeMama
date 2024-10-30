/*
Problem Statement
Write a program that counts the number of characters in a string entered by the user.

Input
The input is a string.

Output
Output the number of characters.

Constraints
Output will be an unsigned integer.
Example:
Enter a string

Input:
Alice
Output:
5
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

    console.log(s.length);

}
 
function main() {
    let t = 1;
    // t = parseInt(readline());

    while(t--){
        solve();
    }
    
}