/*
Problem Statement
Write a program where user will give a number. You will reverse the number and print it.

Input
The input consists of an integer number.

Output
The output will be the reverse of the integer number.

Constraints
0 ≤ |S| ≤ 109
Example:
Enter number.

Input:
1234
Output:
4321
*/

function main (input) {
    let lines = input.split('\n');
    let numberInString = lines[0];

    let reverseNumber = "";
    for(let i = numberInString.length - 1; i >= 0; i--){
        reverseNumber += numberInString[i];
    }
    let number = parseInt(reverseNumber);
    console.log(number);
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});