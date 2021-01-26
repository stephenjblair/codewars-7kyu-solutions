/*
Given a list of numbers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
*/

function oddOrEven(array) {
    let sum = 0;
    for(let i in array)
     {sum += array[i]}
   return sum % 2 === 0 ? "even" : "odd"
 }

 