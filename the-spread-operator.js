/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log("second array:", arr2);
//arr2 now has same values as arr1
arr2.push(4);
console.log("second array with push:", arr2);
console.log("first array:", arr1);
// the first array changed after the push also, because second array
// is just a new variable that still points to same object as first array


// Copying an array
let arr3 = [4, 5, 6];
// using spread operator ... to spread arr3 into arr4
let arr4 = [...arr3];

arr4.push(7);
console.log("third array:", arr3);
console.log("fourth array:", arr4);

// Copying an object
let obj1 = {a:1, b:2, c:3};
// use spread operator as before, can also add more items - first obj unchanged
let obj2 = {... obj1, d:4};
// can amend existing items when copying also - below updates value of b at same time
let obj3 = {... obj1, b:5};

console.log("first object:", obj1);
console.log("second object:", obj2);
console.log("third object:", obj3);

// Copying only part of an array/object
// copying all of other arrays, objects, and adding new elements:
let arr5 =[...arr1, {...obj1}, ...arr3, "x", "y", "z"]
console.log("array 5:", arr5);