// Spread Operator
// spliting then marging
let numbers= [1 ,2 ,5, 7]
let numbers2 = [7, 8, 9]
let arr = [ ...numbers, ...numbers2, 6, 7, 10];

let person = {
  name : "x",
  age : 45
}
console.log(arr);

let another = { ...person, nationality: "Bangladeshi"} 
console.log(another);


// Rest Operator
// only marging 
let something = (...numArr) => console.log(numArr);

something(1, 3, 5, 8);

// works on array, objects
// looks like same thing but diffrent use case