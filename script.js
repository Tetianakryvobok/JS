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
