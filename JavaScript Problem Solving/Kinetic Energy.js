/*
Problem Statement
Write a program that will calculate Kinetic Energy. It can be calculated with the following formula: KE = 0.5mV*V where m is mass in kg, v is velocity in m/s, KE is kinetic energy in J. Return the Kinetic Energy in Joules, given the mass and velocity. For the purposes of this challenge, round answers to the nearest integer.

Input
The input consists of two double number: mass and velocity.

Output
The output will print an integer.

Constraints
0 ≤ |S| ≤ 104
Example:
Enter numbers

Input:
60 3
Output:
270
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

    let mass = parseFloat(ar[0]);
    let velocity = parseFloat(ar[1]);

    let KE = 0.5 * mass * velocity * velocity;

    let ke = Math.floor(KE);

    if(KE - ke >= 0.5){
        ke += 1;
    }
    console.log(ke);
}
 
function main() {
    let t = 1;
    // t = parseInt(readline());

    while(t--){
        solve();
    }
    
}