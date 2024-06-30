/*
Problem Statement
Write a program to check whether a number is palindrome or not. palindrome Number: A palindromic number is a number (such as 16461) that remains the same when its digits are reversed.

Input
The input consists of an integer number.

Output
The output will print whether the input is palindrome number or not.

Constraints
0 ≤ |S| ≤ 109
Example-1:
Enter number

Input:
121
Output:
121 is a palindrome number
Example-2:
Enter number

Input:
123
Output:
123 is not a palindrome number
*/

function isPalindrome(str){
    let n = str.length;
    for(let i = 0; i < n; i++){
        if(str[i] != str[n - 1 - i]) return false;
    }
    return true;
}

function main (input) {
    
    let lines = input.split('\n');
    let numInString = lines[0];

    if(isPalindrome(numInString)){
        console.log(`${numInString} is a palindrome number`);
    }else{
        console.log(`${numInString} is not a palindrome number`);
    }
       
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});