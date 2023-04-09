function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Привіт, я ${this.name}, мені ${this.age} років`;
  }
}

const user = new User("Дмитро", 25);
console.log(user.sayHello());


class Calculator {
  constructor() {
    this.num1 = 0;
    this.num2 = 0;
  }

  ask() {
    this.num1 = parseFloat(prompt("Введіть перше число:"));
    this.num2 = parseFloat(prompt("Введіть друге число:"));
  }

  sum() {
    return this.num1 + this.num2;
  }

  mul() {
    return this.num1 * this.num2;
  }
}

const calc = new Calculator();
calc.ask();
console.log(`Сума: ${calc.sum()}`);
console.log(`Добуток: ${calc.mul()}`);
