/*
Problem Statement
Write a program that removes duplicate characters from a given string, keeping only the first occurrence of each character.

Input
The input consists of a string.

Output
The output will be a string without any duplicate character.

Constraints
0 ≤ |S| ≤ 1000
Example:
Enter string

Input:
apples
Output:
aples
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
    let res = "";

    let taken = new Array(26);

    for(let i = 0; i < 26; i++) taken[i] = 0;

    for(let i = 0; i < s.length; i++){
        let index = s.charCodeAt(i) - 97;
        // console.log(index);
        if(taken[index]){}
        else{
            taken[index] = 1;
            res += s[i];
        }
    }
    
    console.log(res);
}
 
function main() {
    let t = 1;
    // t = parseInt(readline());

    while(t--){
        solve();
    }
    
}