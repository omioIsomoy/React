// Normal 
function retSome(num) {
    return num*num;
  }
console.log(retSome(5));

  // Arrow Function
  let a = () => {
    console.log("Omio");
  };
  a();

  let b = (name) => {
    return name;
  };
  console.log(b("Somoy"));

  let c = name => name;
  console.log(c("Hello There!"));
  // Three way of writing arrow fuction
  let saySomething = num => num*num;
  console.log(saySomething(25));