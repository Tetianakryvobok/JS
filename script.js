let firstNumber;
let secondNumber;

firstNumber = prompt("Введіть перше число");
secondNumber = prompt("Введіть друге число");

if (!firstNumber || !secondNumber) {
  alert("Помилка");
} else {

  let sum = Number(firstNumber) + Number(secondNumber); alert("Сума: " + sum);

  let difference = Number(firstNumber) - Number(secondNumber);
  if (firstNumber < secondNumber) {
    let confirmed = confirm("Ви впевнені, що хочете продовжити операцію?");
    if (confirmed) {
      difference = Number(firstNumber) - Number(secondNumber);
      alert("Різниця: " + difference);
    }
  } else {
    alert("Різниця: " + difference);
  }

  let product = Number(firstNumber) * Number(secondNumber); alert("Добуток: " + product);
  let quotient = Number(firstNumber) / Number(secondNumber);
  if (Number(secondNumber) === 0) {
    alert("На нуль ділення неможливе");
  } else {
    quotient = Number(firstNumber) / Number(secondNumber);
    alert("Ділення: " + quotient);
  }


}
class Accumulator {
  constructor(initialValue) {
    this.value = initialValue;
  }

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }
}
const acc = new Accumulator(1);
acc.increment();
console.log(acc.value);
acc.increment();
console.log(acc.value);

acc.decrement();
console.log(acc.value);
acc.decrement();
console.log(acc.value);

class CancelableAccumulator extends Accumulator {
  constructor(initialValue) {
    super(initialValue);
    this.initialValue = initialValue;
  }

  clear() {
    this.value = this.initialValue;
  }
}

const acc2 = new CancelableAccumulator(1);
console.log(acc2.value);

acc2.increment();
console.log(acc2.value);

acc2.decrement();
console.log(acc2.value);

acc2.clear();
console.log(acc2.value);




let arr = [74, 12, 27, 37, 41, 108, 36, 7, 15, 3];

let sum = 0;
let min = Infinity;
let max = -Infinity;

for (let i = 0; i < arr.length; i++) {

  if (typeof arr[i] === "number") {
    sum = sum + arr[i];

    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
}
console.log(sum);
console.log(min);
console.log(max);

let row = "";
for (let i = 1; i <= 5; i++) {

  row += "#";

  console.log(row);

}