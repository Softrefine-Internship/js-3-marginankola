// Write a JavaScript program to count number of occurrences of repeated names in an array of objects.

// Input:  
// arr = [
//     {
//        employeeName: "Ram",
//        employeeId: 23
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 24
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 21
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 25
//     },
//     {
//        employeeName: "Kisan",
//        employeeId: 22
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 20
//     }
//  ]

// Output: 
// [
//     {employeeName: "Ram", occurrences: 3},
//     {employeeName: "Shyam", occurrences: 2},
//     {employeeName: "Kisan", occurrences:  1}
// ] 


const arr = [
    {
       employeeName: "Ram",
       employeeId: 23
    },
    {
       employeeName: "Shyam",
       employeeId: 24
    },
    {
       employeeName: "Ram",
       employeeId: 21
    },
    {
       employeeName: "Ram",
       employeeId: 25
    },
    {
       employeeName: "Kisan",
       employeeId: 22
    },
    {
       employeeName: "Shyam",
       employeeId: 20
    }
 ];

 const countOccurrences = (arr, key) => arr.reduce((acc, curr) => 
   (acc[curr[key]] = (acc[curr[key]] || 0) + 1, acc), {});

 console.log(countOccurrences(arr, 'employeeName'));




