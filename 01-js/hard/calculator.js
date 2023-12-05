/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
constructor()
  {
    this.Result = 0;
  }
  
  add(x)
  {
    this.Result +=x

  }
  
  subtract(x)
  {
    this.Result -= x;

  }

  multiply(x)
  {

      this.Result = this.Result *x;
    
  }

  divide(x)
  {
     try
    {
      if (x !=0)
      {
        this.Result = this.Result /x;
      }
      if (typeof x !== 'number' || x === 0) {
        throw new Error('Invalid input: not a non-zero number');
      }
  
    
    }
    catch(Error)
    {
      console.log(Error)
    }   

  }
  getResult()
  {
    return this.Result
  }
  clear()
  {
    this.Result = 0;
  }
}
calc = new Calculator();
calc.add(12);

calc.divide(4);
console.log(calc.getResult());

console.log(calc.divide(0));
/**console.log(calc.getResult())**/
module.exports = Calculator;
