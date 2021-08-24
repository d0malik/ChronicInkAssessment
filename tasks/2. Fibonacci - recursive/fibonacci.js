export function getFibonacciUntil(n) {
    if (n - 1 <= 1) {
        return [0, 1];
    }else{
        let arr = getFibonacciUntil(n - 1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
    }
}
