
function isNumber(value) {
   return !isNaN(parseFloat(value)) && isFinite(value);
}

function addNumbers(firstNumber, secondNumber) {
   if (!isNumber(firstNumber) || !isNumber(secondNumber)) {

   }
   return Number(firstNumber) + Number(secondNumber);
}

function subtractNumbers(firstNumber, secondNumber) {
   if (!isNumber(firstNumber) || !isNumber(secondNumber)) {

   }
   return Number(firstNumber) - Number(secondNumber);
}

function multiplyNumbers(firstNumber, secondNumber) {
   if (!isNumber(firstNumber) || !isNumber(secondNumber)) {

   }
   return Number(firstNumber) * Number(secondNumber);
}

function divideNumbers(firstNumber, secondNumber) {
   if (!isNumber(firstNumber) || !isNumber(secondNumber)) {

   }
   if (Number(secondNumber) === 0) {
      return "Помилка: На нуль ділення неможливе";
   }
   return Number(firstNumber) / Number(secondNumber);
}

let firstNumber = prompt("Введіть перше число");
let secondNumber = prompt("Введіть друге число");

if (!firstNumber || !secondNumber) {
   alert("Помилка: обидва параметри мають бути задані");
} else {
   let sum = addNumbers(firstNumber, secondNumber);
   alert("Сума: " + sum);

   let difference = subtractNumbers(firstNumber, secondNumber);
   if (firstNumber < secondNumber) {
      let confirmed = confirm("Ви впевнені, що хочете продовжити операцію?");
      if (confirmed) {
         difference = subtractNumbers(firstNumber, secondNumber);
         alert("Різниця: " + difference);
      }
   } else {
      alert("Різниця: " + difference);
   }

   let product = multiplyNumbers(firstNumber, secondNumber);
   alert("Добуток: " + product);

   let quotient = divideNumbers(firstNumber, secondNumber);
   alert("Ділення: " + quotient);
}



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

function findMin(array) {
   let min = Infinity;
   for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "number" && array[i] < min) {
         min = array[i];
      }
   }
   return min;
}

function findMax(array) {
   let max = -Infinity;
   for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "number" && array[i] > max) {
         max = array[i];
      }
   }
   return max;
}

console.log(findMin(arr));
console.log(findMax(arr));


let row = "";
for (let i = 1; i <= 5; i++) {

   row += "#";

   console.log(row);

}