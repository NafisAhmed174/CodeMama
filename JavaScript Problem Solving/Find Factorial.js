/*
Problem Statement
Write a program where you will be given a number. You will have to print the factorial of that number.

Input
The input consists of an integer numbers.

Output
The output will be an integer number.

Constraints
0 ≤ |S| ≤ 109
Example:
Enter a number.

Input:
4
Output:
24
*/

function main (input) {
    let lines = input.split('\n');
    let n = parseInt(lines[0]);

    let factorial = 1;

    for(let i = 2; i <= n; i++){
        factorial *= i;
    }
    console.log(factorial);
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});