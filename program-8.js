// Write a JavaScript program to calculate the total value of a specific property in an array of objects.

// Input:  
// arr = [
//     {
//         product: "Laptop",
//         price: 1000,
//         quantity: 2,
//     },
//     {
//         product: "Phone",
//         price: 600,
//         quantity: 3,
//     },
//     {
//         product: "Monitor",
//         price: 250,
//         quantity: 1,
//     },
// ]

// Output: 
// total value for "price": 1850
// total value for "quantity": 6

const arr = [
    {
        product: "Laptop",
        price: 1000,
        quantity: 2,
    },
    {
        product: "Phone",
        price: 600,
        quantity: 3,
    },
    {
        product: "Monitor",
        price: 250,
        quantity: 1,
    },
]

const totalValue = arr.reduce((acc, curr) => acc + curr.price, 0);
const totalQuantity = arr.reduce((acc, curr) => acc + curr.quantity, 0);


console.log(`Total value for "price": ${totalValue}`);
console.log(`Total value for "quantity": ${totalQuantity}`);
