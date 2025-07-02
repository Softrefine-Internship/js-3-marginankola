// Write a JavaScript program to check subset.

// Example 1:
// Input: 
// let set1 = new Set([1, 2, 3, 4, 5]);
// let set2 = new Set([3, 4]);

// Output: false


// Example 2:
// Input: 
// let set1 = new Set([3, 4]);
// let set2 = new Set([1, 2, 3, 4, 5]);

// Output: true

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([3, 4]);

const set3 = new Set([3, 4]);
const set4 = new Set([1, 2, 3, 4, 5]);

const isSubset = (set1, set2) => {
    for (let i of set1) {
        if (!set2.has(i)) {
            return false;
        }
    }
    return true;
};

console.log(isSubset(set1, set2));
console.log(isSubset(set3, set4));


