let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1 FOR EACH

// let result = 0;

// function shownumber(number) {
//   console.log(`sekarang nomor &(number)`);
//   result += number;
// }

// numbers.forEach(shownumber);

// //  consol.log(doubleNumber);

// // 2 MAP
// const doubleNumbers = numbers.map((number) => {
//   return number * 2;
// });

// console.log(doubleNumbers);

// doubleNumbers.forEach((doubleNumbers) => {
//   result += doubleNumbers;
// });
// console.log(result);

//  console.log(numbers);

// 3 FILTER
// const candidates = [
//   {
//     name: "Septania Nopa",
//     score: 70,
//     expectedSallary: 200,
//     prefferedPosition: "Fullstack",
//   },
//   {
//     name: "Hafidzsyah",
//     score: 40,
//     expectedSallary: 200,
//     prefferedPosition: "Fullstack",
//   },
//   {
//     name: "Fawaz Nopa",
//     score: 90,
//     expectedSalary: 1500,
//     prefferedPosition: "BackEnd",
//   },
//   {
//     name: "Syaddaad Afif",
//     score: 80,
//     expectedSalary: 700,
//     prefferedPosition: "BackEnd",
//   },
// ];

// const criteria = {
//   score: 70,
//   expectedSalary: 1000,
//   prefferedPosition: "Fullstack",
// };

// const passCandidates = candidates.filter((candidate) => {
//   if (
//     candidate.score >= criteria.score &&
//     candidate.expectedSalary <= criteria.expectedSalary &&
//     candidate.prefferedPosition === criteria.prefferedPosition
//   )
//     return true;

//   return false;
// });

// console.log(passCandidates);

// 4 REDIUCE

const sum =
  numbers.reduce[
    (previous, current) => {
      console.log("previous :", previous);
      console.log("current :", current);
      console.log("previous + current =", previous + current);
      return previous - current;
    }
  ];

console.log(sum);
