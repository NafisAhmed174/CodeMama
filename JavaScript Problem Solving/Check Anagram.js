/*
Problem Statement
You are given two strings 
A and B. Your task is check whether the string 
B is anagram of string A or not. 

An anagram of a string 
is another string that contains the same characters, only the 
order of characters can be different. For example, “abcd” and “dabc” 
are an anagram of each other whereas "abcd" and "aabc" are not.

Input
The input consists of two strings 
A and B in two lines containing only lowercase English letters.

Output
In output print "YES" if string 
B is anagram of string A or "NO" otherwise. Print without quotation mark.

Constraints
1 ≤ ∣A∣,∣B∣ ≤ 10000
strings contains only lowercase (a−z) English letters.

Example 1:
Input:
abcd
dbac
Output:
YES

Example 2:
Input:
abcd
aabc
Output:
NO
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

    let s1 = readline();
    let s2 = readline();

    if(s1.length != s2.length){
        console.log("NO");
        return;
    }

    let f1 = new Array(26);
    let f2 = new Array(26);

    for(let i = 0; i < 26; i++){
        f1[i] = 0;
        f2[i] = 0;
    }
    
    for(let i = 0; i < s1.length; i++){
        let indx1 = s1.charCodeAt(i) - 97;
        let indx2 = s2.charCodeAt(i) - 97;
        f1[indx1]++;
        f2[indx2]++;
    }
    
    for(let i = 0; i < 26; i++){
        if(f1[i] != f2[i]){
            console.log("NO");
            return;
        }
    }

    console.log("YES");
}
 
function main() {
    let t = 1;
    // t = parseInt(readline());

    while(t--){
        solve();
    }
    
}