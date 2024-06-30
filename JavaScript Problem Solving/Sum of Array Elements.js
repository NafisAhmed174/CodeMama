/*
Problem Statement
Write a program where user will give an array of elements. You will have to print the sum of elements where each element will be less than median element.

Input
The input consists of size of the array and the elements of the array. Every input will be unsigned integer number.

Output
The output will be sum of elements that are lesser than median element.

Constraints
0 ≤ |S| ≤ 109
Example:
Enter size of the array and the elements.

Input:
6
30 10 5 40 60 15
Output:
30
*/

function main (input) {
    
    let lines = input.split('\n');
    let n = parseInt(lines[0]);
    let ar = lines[1].split(' ').map(Number);

    ar.sort((a, b) => a - b);

    let median;

    if(n & 1){ // odd 
        median = ar[(n - 1) / 2];
    }else{
        median = (ar[n / 2] + ar[n / 2 - 1]) / 2;
    }

    let sum = 0;

    for(let i = 0; i < n; i++){
        if(ar[i] < median) sum += ar[i];
    }
    
    // console.log(ar);
    // console.log(median);
    console.log(sum);
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});