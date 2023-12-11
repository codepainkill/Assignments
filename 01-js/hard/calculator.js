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
      if (x==0)
      {
        throw error
      }
      this.Result = this.Result/x; // Attempting to divide by zero
      console.log(this.Result); // This line won't be reached if an exception occurs
      
  }
  getResult()
  {
    return this.Result
  }
  clear()
  {
    this.Result = 0;
  }

  calculate(str){
    if (!/^[0-9+\-*/(). \t]+$/.test(str)) {
      throw new error;
    }    
    str = str.replace(/\s/g, '');
    let parenthesesCount = 0;

    for (const char of str) {
      if (char === '(') {
        parenthesesCount++;
      } else if (char === ')') {
        parenthesesCount--;
        if (parenthesesCount < 0) {
          throw error // Unbalanced parentheses
        }
      }
    }
    if(parenthesesCount!=0){
      throw error
    }
    str = Array.from(str);
    this.Result = this.calculate1(str, 0);

  }
  calculate1(str,index) {

      
      var stack=[];
      var sign='+';
      var number=0;
    
      for(let i=index;i<str.length;i++){
        var current=str[i];
        if(current>='0' && current<='9')
        number=number*10+(current-'0');
    
        if(!(current>='0' && current<='9') || i===str.length-1){
            if(current=='('){
                number=this.calculate1(str,i+1);
                let opening_parentheses=1;
                let closing_parantheses=0;
                //This loop is for counting the parantheses and shift the i pointer to the right position
                for(let j=i+1;j<str.length;j++){




                  if(str[j]===')')
                    {
                        closing_parantheses++;
                        if(opening_parentheses===closing_parantheses){
                        i=j;
                        break;
                        }
    
                    }
                    else if(str[j]=='('){
                        opening_parentheses++;
                    }
                }
            }
    
            let pre=-1;
            switch(sign){
                case '+':
                    stack.push(number);
                    break;
    
                case '-':
                    stack.push(number*-1);
                    break;
    
                case '*':
                    pre=stack.pop();
                    stack.push(pre*number);
                    break;
    
                case '/':
                    pre=stack.pop();
                    if(number==0)
                    {
                      throw error
                    }
                    stack.push(pre/number);
                    break;
            }
            sign=current;
            number=0;
            if(current===')')
            break;
        }
      }
      
      let ans = 0;
      while (stack.length > 0) {
        ans += stack.pop();
      }

      return ans;

  }
}
module.exports = Calculator;
