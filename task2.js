/*
Write a JavaScript function that checks whether a passed string is a palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, 
e.g., madam or nurses run
*/


function isPalindrome(str) {
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedStr = cleanStr.split('').reverse().join('');
   if(cleanStr === reversedStr) {
      console.log(str + " " + "is a Palindrome word!");
   } else {
      console.log(str + " " + "is'nt a Palindrome word!");
   }
}

isPalindrome("madam");        
isPalindrome("nurses run");
isPalindrome("hello");  
      
