// A simple count of both brackets wouldn't work because of the instance of having something like:
// )))(((
//
// The count of both brackets would be the same, but you can't return true because they are not properly arranged
// To combat this we push every instance of an open bracket to an array, and pop it if a closing one is found
// If the open bracket is not found but there is a closing bracket, we push a period to the array instead.
// At the end if the length of the array is not 0, we know that the parentheses are not balanced.

export function areParenthesesBalanced(inputString) {
    let arr = [];
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === "(") {
            arr.push(inputString[i]);
        }else if (inputString[i] === ")") {
            if (arr[arr.length - 1] === "(") {
                arr.pop();
            }else{
                arr.push(".");
            }
        }
    }

    if (arr.length == 0) { return true; }else{ return false; }
}
