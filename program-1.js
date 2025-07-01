// Write a JavaScript program to check if obj1 contains all the property values of obj2.

// Example 1:
// Input: obj1: { name: "John", age: 23; degree: "CS" }, obj2: {age: 23, degree: "CS"}
// Output: true

// Example 2:
// Input: obj1: { name: "John", degree: "CS" }, obj2: {name: "Max", age: 23, degree: "CS"}
// Output: false

const obj1 = { name: "John", age: 23, degree: "CS" };
const obj2 = { age: 23, degree: "CS" };
const obj3 = { name: "John", degree: "CS" };
const obj4 = { name: "Max", age: 23, degree: "CS" };

function compare(ob1, ob2) {
  for(let i in ob2) {
      if(!(i in ob1) || ob1[i] !== ob2[i]) {
          return false;
      }
    }
  return true;
}

console.log(compare(obj1, obj2));
console.log(compare(obj3, obj4)); 


