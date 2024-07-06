/*
Problem Statement
Write a program where you will be given a number. You will have to check whether the number is prime or not.

Input
The input consists of an integer numbers.

Output
The output will print whether the number is prime or not. For example, for 13 it will print "13 is a prime number." for 24 it will print "24 is not a prime number."

Constraints
0 ≤ |S| ≤ 109
Example:
Enter number.

Input:
13
Output:
13 is a prime number.
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

    let n = parseInt(readline());

    const isPrime = (n) =>{
        if(n < 2) return false;
        for(let i = 2; i * i <= n; i++){
            if(n % i == 0) return false;
        }
        return true
    };

    if(isPrime(n)){
        console.log(`${n} is a prime number.`);
    }else{
        console.log(`${n} is not a prime number.`);
    }

}
 
function main() {
    let t = 1;
    // t = parseInt(readline());

    while(t--){
        solve();
    }
    
}