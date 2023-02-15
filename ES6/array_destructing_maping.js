// Destructing
let arr = [1 , 5, 19]

let [a, , b] = arr

console.log(a, b + "\n");

// Array Mapping
let numbers = [1, 2, 3, 4, 5]

let squares = numbers.map(function(item) {
  return item*item;
});

console.log(squares);

let cubes = numbers.map(item => item**3)


console.log(cubes);