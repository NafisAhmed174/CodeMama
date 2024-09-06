/*
Problem Statement
Write a program that takes in a number as a string S and returns the number without trailing zeros. Trailing zeroes before decimal point has importance , so they will not be removed. Only the trailing zeroes after decimal point which does not have any importance will be removed.

Input
The input consists of a string 
𝑆
S.

Output
The output will print a number without trailing zeroes.

Constraints
0 ≤ |S| ≤ 10000
Example:
Enter number

Input:
505.4500
Output:
505.45
Notes:
If there are only zeroes after decimal point then it will print the number without any decimal point. For example, 50.00 will be printed as 50.
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

    let n = readline();

    let parts = n.split('.');

    let res = "";

    res += parts[0];

    if(parts.length == 2){
        let l = parts[1].length - 1;
        while(l >= 0 && parts[1][l] == '0'){
            l--;
        }
        if(l >= 0){
            res += '.';
            for(let i = 0; i <= l; i++){
                res += parts[1][i];
            }
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