// Write a JavaScript program to generate all combinations of a string.

// Input: Dog 
// Output: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]

const generateCombinations = (str) => {
    let result = [];
    const strl = str.toLowerCase();
    for (let i = 0; i < strl.length; i++) {
        for (let j = i + 1; j <= strl.length; j++) {
            result.push(strl.slice(i, j));
        }
    }
    return result;
};

console.log(generateCombinations("Dog"));



