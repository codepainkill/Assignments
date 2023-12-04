/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let biggestNumber = numbers[0]
    for(let i=0;i<numbers.length;i++)
    {
        if(biggestNumber<numbers[i])
        {
            biggestNumber = numbers[i]
        }
    }
    return biggestNumber
}
console.log(findLargestElement([2,3,8]))

module.exports = findLargestElement;