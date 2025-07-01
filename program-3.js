// Write a JavaScript program to flatten object into single depth object.

// Input: 
// obj = {
//     Company: "GeeksforGeeks",
//     Address: "Noida",
//     contact: +91-999999999,
//     mentor: {
//         HTML: "GFG",
//         CSS: "GFG",
//         JavaScript: "GFG"
//     }
// };

// Output: 
// obj = {
//     Company: 'GeeksforGeeks',
//     Address: 'Noida',
//     contact: -999999908,
//     'mentor.HTML': 'GFG',
//     'mentor.CSS': 'GFG',
//     'mentor.JavaScript': 'GFG'
// }

const obj = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: 91 - 999999999,
    mentor: {
            HTML: "GFG",
            CSS: "GFG",
            JavaScript: "GFG"
    }
};

const flattenObject = (obj) => {
    const result = {};
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            const nestedObj = flattenObject(obj[key]);
            for (let nestedKey in nestedObj) {
                result[key + '.' + nestedKey] = nestedObj[nestedKey];
            }
        } else {
            result[key] = obj[key];
        }
    }
    return result;
};

const flattenedObj = flattenObject(obj);

console.log(flattenedObj);



