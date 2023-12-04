/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    str = str.replace(/\s/g, '');
    str = str.toLowerCase();
    // Your code here
    let countVowels = 0;
    let arr = ["a","e","i","o","u"]
    for(let i=0;i<str.length;i++)
    {
      for(let j=0;j<arr.length;j++)
      {
        if(arr[j]==str[i])
        {
          countVowels +=1;
        }
      }
    }
  return countVowels
}

module.exports = countVowels;