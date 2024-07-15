/*
Problem Statement
Write a program that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

Input
The input consists of one float 
𝐹
F and two integer 
𝑁
N, 
𝑀
M numbers

Output
The output will print either "true" or "false"

Constraints
0 ≤ |F| ≤ 1
0 ≤ |N| ≤ 104
0 ≤ |M| ≤ 104
Example:
Enter numbers

Input:
0.2 50 9
Output:
true
Notes:
A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.
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

    let ar = readline().split(' ');

    let F = parseFloat(ar[0]);
    let N = parseInt(ar[1]);
    let M = parseInt(ar[2]);

    if(F * N > M){
        console.log('true');
    }else{
        console.log('false');
    }

}
 
function main() {
    let t = 1;
    // t = parseInt(readline());

    while(t--){
        solve();
    }
    
}