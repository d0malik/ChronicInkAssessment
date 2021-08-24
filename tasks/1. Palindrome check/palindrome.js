export function isPalindrome(inputString) {
  let reverse = inputString.split('').reverse().join('');
  return inputString === reverse;
}
