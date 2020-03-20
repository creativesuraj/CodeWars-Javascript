/**
 * Create a function named divisors/Divisors that takes an integer n > 1
 * and returns an array with all of the integer's divisors(except for 1 and the number itself),
 * from smallest to largest. If the number is prime return the string '(integer) is prime'
 * (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
 * Example:

 *divisors(12); // should return [2,3,4,6]
 *divisors(25); // should return [5]
 *divisors(13); // should return "13 is prime"
*/


export default function divisors(n) {
  // divisors are always less than equal to n/2 except the number itself.
  const mid = n % 2 ? (n+1)/2 : n/2;
  const divisorsList = [];
  for (let i = 2; i <= mid; i++) {
    if (n % i === 0) {
      divisorsList.push(i);
    }
  }
  if (divisorsList.length) return divisorsList;
  return `${n} is prime`;
};
