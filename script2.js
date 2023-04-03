
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