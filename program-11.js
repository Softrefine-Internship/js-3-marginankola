// Write a JavaScript program to check a given string is an anagram of another string.

// Example 1:
// Input: evil = vile
// Output: true

// Example 2:
// Input: a gentleman = elegant man
// Output: true

// Example 3:
// Input: eleven plus two = twelve plus one
// Output: true

const str1 = "vile";
const str2 = "evil";

const str3 = "a gentleman";
const str4 = "elegant man";

const str5 = "eleven plus two";
const str6 = "twelve plus one";

const checkAnagram = (str1, str2) => {
    const arr1 = str1.split("").sort().join("");
    const arr2 = str2.split("").sort().join("");
    return arr1 === arr2;
}

console.log(checkAnagram(str1, str2));
console.log(checkAnagram(str3, str4));
console.log(checkAnagram(str5, str6));