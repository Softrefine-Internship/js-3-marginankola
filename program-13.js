// Write a JavaScript program to group elements by their properties.

// Input:
// arr = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Alice" },
//     { id: 3, name: "Bob" },
//     { id: 4, name: "Alice" },
// ]

// Output:
// { 'John' => [ 1 ], 'Alice' => [ 2, 4 ], 'Bob' => [ 3 ] }

const arr = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" },
    { id: 4, name: "Alice" },
]

const grouped = arr.reduce((acc, curr) => {
    if (acc[curr.name] !== undefined) {
        acc[curr.name].push(curr.id);
    } else {
        acc[curr.name] = [curr.id];
    }
    return acc;
}, {});


console.log(grouped);