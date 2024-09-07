/*
Problem Statement
Write a program to find the index of a target element from a sorted array in logarithmic time. If the target element is in the array it will print it's index value. Otherwise it will print "Element not found".

Input
The program will take an integer 
𝑁
N as the size of a sorted array. Then it will take the integer values of the array 
𝑀
[
]
M[]. Finally, it will take the target value 
𝑃
P.

Output
The output will print either the index of the target element or "Element not found" if the element is not found.

Constraints
0 ≤ |N| ≤ 100000
0 ≤ |M[]| ≤ 100000
0 ≤ |P| ≤ 100000
Example-1:
Enter numbers

Input:
5
10 20 30 40 50
20
Output:
1
Example-2:
Enter numbers

Input:
5
10 20 30 40 50
60
Output:
Element not found
Notes:
There will be no repeated elements.
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

    let ar = readline().split(' ').map(Number);

    let target = parseInt(readline());


    let l = 0, r = n - 1;
    let mid = 0;

    while(r - l >= 0){
        mid = (l + r) >> 1;
        
        if(ar[mid] > target){
            r = mid - 1;
        }
        else if(ar[mid] < target){
            l = mid + 1;
        }
        else{
            console.log(mid);
            return;
        }
    }

    console.log('Element not found');

}
 
function main() {
    let t = 1;
    // t = parseInt(readline());

    while(t--){
        solve();
    }
    
}