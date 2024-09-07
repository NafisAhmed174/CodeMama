/*
Problem Statement
Write a program to find the length of the longest substring in a given string without repeating characters. For example, in the string "abcabcbb," the longest substring without repeating characters is "abc," which has a length of 3.

Input
The program will take a string as input.

Output
The output will be the length of the longest substring which will be an integer.

Constraints
0 ≤ |S| ≤ 1000
Example:
Enter string

Input:
abcabcbb
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

    let s = readline();

    let n = s.length;

    let mx = 0;

    for(let i = 0; i < n; i++){

        let frequency = new Array(26);

        for(let i = 0; i < 26; i++) frequency[i] = 0;

        let cnt = 0;

        for(let j = i; j < i + 26 && j < n; j++){
            let id = s.charCodeAt(j) - 97;
            // console.log(`id = ${id}`)
            frequency[id]++;
            if(frequency[id] > 1) break;
            cnt++;
            // console.log(`cnt = ${cnt}`)
            if(cnt > mx){
                mx = cnt;
            }
        }

    }

    console.log(mx);

}
 
function main() {
    let t = 1;
    // t = parseInt(readline());

    while(t--){
        solve();
    }
    
}