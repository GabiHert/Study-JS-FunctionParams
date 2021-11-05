# Study-JS-FunctionParams

## `arguments` object

---

### when arguments are sent to a function where any parameter were declared.

- When a function is declared with "**function**", js machine storages every arguments sent to the function into the "**arguments**" object.

- When you send arguments to a function which doesn't have any declared parameters, all the arguments sent will be storage into the **arguments** object.

```javascript
function MyFunction() {
  console.log(arguments);
}

MyFunction(1, 2, 3, 4);
```

console.log: `[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }`

### Less arguments sent then parameters.

- PArameter from argument not sent gets "**undefined**".

```javascript
function MyFunction(a, b, c, d) {
  console.log(a, b, c, d);
}

MyFunction(1, 2);
```

console.log: `1 2 undefined undefined`

## Default parameter value.

---

- When a parameter is declared as an equality, it gets the equality as its default value.

```javascript
function MyFunction(a, b = 2, c = 4) {
  console.log(a + b + c);
}
```

- If `b` or `c` have `any arguments set` or have their arguments set as `undefined`, they will get their default value as argument (`b = 2` and `c = 4`)

```javascript
function MyFunction(a, b = 2, c = 4) {
  console.log(a + b + c);
}

MyFunction(2, undefined, 20); //log1
MyFunction(2); //log2
```

`(log1)`console.log: `24` (2+0+20)

`(log2)`console.log: `8` (2+2+4)

## Assignment through destructuring.

---

```javascript
function MyFunction({ name, city, age }) {
  console.log(name, city, age);
}
let obj = { name: "myName", city: "myCity", age: 20 };
MyFunction(obj);
```

console.log: `myName myCity 20`

```javascript
function MyFunction([value1, value2, value3]) {
  console.log(value1, value2, value3);
}
let array = ["myName", "myCity", 20];
MyFunction(array);
```

console.log: `myName myCity 20`

## Rest operator (`...`).

---

```javascript
function MyFunction(operator, sum, ...num) {
  console.log(operator, sum, num);
}
MyFunction("+", 0, 20, 30, 40, 50);
```

console.log: `+ 0 [20,30,40,50]`

- The rest operator is the `...` before `num` parameter.
- The rest operator must be the lest function parameter.
- All values sent as attributes after `sum` are put into the `num` as an array.

EX:

```javascript
function MyFunction(operator, accumulator, ...num) {
  console.log(operator, accumulator, num);
  for (let number of num) {
    if (operator === "+") accumulator += number;
    if (operator === "-") accumulator -= number;
    if (operator === "*") accumulator *= number;
    if (operator === "/") accumulator /= number;
  }
  console.log("accumulator:" + accumulator);
}
MyFunction("+", 0, 20, 30, 40, 50);
```
