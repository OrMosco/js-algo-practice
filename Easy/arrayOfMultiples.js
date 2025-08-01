/*
Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

Examples
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
Notes
Notice that num is also included in the returned array.
*/

function arrayOfMultiples(a,b) {
  let count = 0;
  let list = []
  while (count != b) {
    let c=a*(count+1);
    list.push(c);
    count +=1;
  }
return list;
}

exports.solution = arrayOfMultiples;
