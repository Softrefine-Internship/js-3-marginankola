// Write a JavaScript program to convert two-dimensional array in to an object.

// Input:  [
    //     ["John", 12],
    //     ["Jack", 13],
    //     ["Matt", 14],
    //     ["Maxx", 15]
    // ]
    
// Output: {
    //     "John": 12,
    //     "Jack": 13,
    //     "Matt": 14,
    //     "Maxx": 15
    // }
    

const arr = [
    ["John", 12],
    ["Jack", 13],
    ["Matt", 14],
    ["Maxx", 15]
]

const obj = {};

arr.forEach(([key, value]) => {
    obj[key] = value;
});
console.log(obj);
