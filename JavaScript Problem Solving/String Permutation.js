/*
Problem Statement
Write a program to implement a function to generate all possible permutations of characters in a given string. For example, if the input is "abc," the output should include "abc," "acb," "bac," "bca," "cab," and "cba." The output answers will be in sorted order.

Input
The program will take a string as input.

Output
The output will be the possible strings after permutation.

Constraints
0 ≤ |S| ≤ 100
Example:
Enter string

Input:
abc
Output:
abc acb bac bca cab cba
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


function permute(string) {
    if (string.length === 0) return [''];
    let result = [];
    
    for (let i = 0; i < string.length; i++) {
        let currentChar = string[i];
        let remainingString = string.slice(0, i) + string.slice(i + 1);
        let remainingPermutations = permute(remainingString);

        for (let perm of remainingPermutations) {
            result.push(currentChar + perm);
        }
    }
    return result;
}

function generatePermutations(inputString) {
    let permutations = permute(inputString);
    permutations = [...new Set(permutations)];
    permutations.sort();
    return permutations;
}

function solve(){

    let s = readline();

    console.log(generatePermutations(s).join(' '));

}
 
function main() {
    let t = 1;
    // t = parseInt(readline());

    while(t--){
        solve();
    }
    
}