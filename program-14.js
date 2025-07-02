// Write a JavaScript program to count frequency of character in string.

// Input: "hello"
// Output: { 'h': 1, 'e': 1, 'l': 2, 'o': 1 }


const count = (str) => {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
    }
    console.log(obj);
};

count("hello");