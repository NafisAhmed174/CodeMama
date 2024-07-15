/*
Problem Statement
Write a program that returns the number of frames shown in a given number of minutes for a certain FPS. FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.

Input
The input consists of two integer number: minute and fps.

Output
The output will print an integers.

Constraints
0 ≤ |S| ≤ 104
Example:
Enter numbers

Input:
10 25
Output:
15000
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

    let ar = readline().split(' ').map(Number);

    console.log(ar[0] * 60 * ar[1]);

}
 
function main() {
    let t = 1;
    // t = parseInt(readline());

    while(t--){
        solve();
    }
    
}