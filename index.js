// Checking if a number is big
// 1 - 9

// const BigNumberCheck = function (number) {
//   if (number > 100) {
//     return true;
//   }
//   return false;
// };

// console.log(BigNumberCheck(99));
// console.log(BigNumberCheck(100));
// console.log(BigNumberCheck(101));

// Bouncer at a club

// const BrendaTheBouncer = function (Age, NumberOfPeople, MaxNumberOfPeople) {
//   if (Age < 18) {
//     return "this a club for adults";
//   } else if (NumberOfPeople > MaxNumberOfPeople) {
//     return "It's too busy now, come back later";
//   } else {
//     return "come in";
//   }
// };

// console.log(BrendaTheBouncer(17, 30, 30));
// console.log(BrendaTheBouncer(17, 31, 40));
// console.log(BrendaTheBouncer(18, 30, 25));
// console.log(BrendaTheBouncer(18, 31, 129));

// Calculating the average

const AverageCalc = function (arr) {
  let Outcome = arr.reduce((a, b) => a + b, 0) / arr.length;
  let RoundedOutcome = Math.round(Outcome);
  return RoundedOutcome;
};

// const list = [1, 4, 5, 73, 234, 38129381];
console.log(AverageCalc([1, 4, 5, 73, 234, 38331]));
console.log(AverageCalc([73, 234, 38381]));
console.log(AverageCalc([1, 4, 5, 73, 234]));

// This one was difficult as I had to search for the average calculation. This is done on a rather odd way
// Nevertheless I found this arrow-function what does what is has to do
// I used the rounded math function as well. It needed me to use a inbetween value to work with
// This function is a function that does something and produces something
