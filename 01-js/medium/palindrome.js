/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  //str = str.replace(/\s/g, '');
  str = str.replace(/[,\!\?\.\s]/g, '');
  str = str.toLowerCase();
  console.log(str)
  let str1 = "";
  for(let i=str.length;i>0;i--)
  {
  str1 = str1+str[i-1]
  }
  let len = 0;
  for(let i=0;i<str.length;i++)
  {
    if(str[i]==str1[i])
    {
      len +=1
    }
  }
  if(len==str.length)
  {
    return true;
  }
  else
  {
    return false; 
  }
  
}

console.log(isPalindrome("RaCeCaR"))
module.exports = isPalindrome;
