// Write a JavaScript program to get the longest string in an array.

// Input:  
// arr = [
    // "JavaScript",
    // "Python",
    // "Java",
    // "C++",
    // "Ruby",
    // "Swift",
    // ]
    
    // Output: "JavaScript"
    
    const arr = [
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "Ruby",
      "Swift",
    ];
    
const getLongestString = (arr) => {
  let longestStr = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longestStr.length) {
      longestStr = arr[i];
    }
  }
  return longestStr;
};

console.log(getLongestString(arr));

