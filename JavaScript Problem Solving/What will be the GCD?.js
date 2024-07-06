/*
Problem Statement
Write a program where you have to find the GCD(Greatest Common Divisor) of two numbers.

Input
The input consists of two integer numbers.

Output
The output will be an integer number.

Constraints
0 ≤ |S| ≤ 109
Example:
Enter two numbers.

Input:
9 12
Output:
3
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


    const GCD = (a, b) => {
        if(a == 0) return b;
        if(b == 0) return a;

        while(b){
            let temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    }

    console.log(GCD(a, b));

}
 
function main() {
    let t = 1;
    // t = parseInt(readline());

    while(t--){
        solve();
    }
    
}