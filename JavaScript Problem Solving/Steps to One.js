/*

Problem Statement
Given a positive integer n, write a program that returns the minimum number of steps to reach 1 by performing one of the following operations: Subtract 1 from it. If it is divisible by 2, divide it by 2. If it is divisible by 3, divide it by 3. For example- from 5 , subtracting 1 it will be 4, then it will be divided by 2 and become 2 then again it will be divided by 2 and become 1. Total 3 steps will be needed.

Input
The program will take an integer 
N
N as input.

Output
The output will print the number of steps to become 1.

Constraints
0 ≤ |N| ≤ 1000
Example:
Enter number

Input:
5
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

function func(n){
    if(n == 1) return 0;
    let res = 0;
    if(n % 3 == 0){
        res = 1 + func(n / 3);
    }
    else if(n % 2 == 0){
        let ans1 = 1 +  func(n / 2);
        let ans2 = 1 + func(n - 1);
        if(ans1 < ans2) res = ans1;
        else res = ans2;
    }
    else{
        res = 1 + func(n - 1);
    }
    return res;
}

function solve(){

    let n = parseInt(readline());

    let res = func(n);

    print(res);
}
 
function main() {
    let t = 1;
    // t = parseInt(readline());

    while(t--){
        solve();
    }
    
}