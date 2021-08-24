// Not sure if I understood this properly, it was extremely simple.

export function Reduce(array, reducer, initialValue) {
    let reduced = initialValue;
    for (let i = 0; i < array.length; i++) {
        reduced = reducer(reduced, array[i]);
    }
    
    return reduced;
}

function reducer(acc, curr) { return acc += curr; }
