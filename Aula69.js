function MyFunction()
{
    console.log("MyFunction Arg:");
    console.log(arguments);
}

MyFunction(1,2,3,4); 

function MyFunction1(a, b, c, d) {
    console.log("MyFunction1 Params:");
    console.log(a,b,c,d);
  }
  
  MyFunction1(1, 2);

  function MyFunction2({ name, city, age }) {
    console.log(name, city, age);
  }
  let obj = { name: "myName", city: "myCity", age: 20 };
  MyFunction2(obj);

  function MyFunction3([value1, value2, value3]) {
    console.log(value1, value2, value3);
  }
  let array = ["myName", "myCity", 20];
  MyFunction3(array);

  function MyFunction4(operator, accumulator, ...num) {
    console.log(operator, accumulator, num);
    for (let number of num) {
      if(operator==="+")accumulator += number;
      if(operator==="-")accumulator -= number;
      if(operator==="*")accumulator *= number;
      if(operator==="/")accumulator /= number;
    }
    console.log("accumulator: " + accumulator);
  }
  MyFunction4("+", 0, 20, 30, 40, 50);