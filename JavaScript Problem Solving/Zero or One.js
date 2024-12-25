/*

Problem Statement
A number from 0 to 9 will be presented as an word in lower case english letter. For example- three. The program will take it as input. Print 0 if the remainder is 0 while the number is divided by 2, otherwise print 1 if the remainder is 1.

Input
The program will take a string 
S
S as input.

Output
The output will print either 0 0r 1.

Constraints
0 ≤ |S| ≤ 9
Example:
Enter string

Input:
three
Output:
1
Notes:
No number greater than 9 will be given as input

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

    if(n == "one" || n == "three" || n == "five" || n == "seven" || n == "nine"){
        print(1);
    }
    else{
        print(0);
    }

}
 
function main() {
    let t = 1;
    // t = parseInt(readline());

    while(t--){
        solve();
    }
    
}