/* Write a JavaScript function that reverses a number.
   Example x = 32243;
   Expected Output: 34223
*/


function numberReverser(number) {
    let result = parseInt(number.toString().split('').reverse().join(''));
    console.log(result);
}

numberReverser(1337);
