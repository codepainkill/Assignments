/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor()
  {
    this.arr = []
  }
  add(task)
  {
    
    this.arr.push(task)
  }
  get(index)
  {
    if(this.arr[index])
    {
      return this.arr[index];
    }
    else
    {
      return null
    }
    
  }
  getAll()
  {
    return this.arr
  }

  remove(index)
  {
     this.arr.splice(index,1);
  }
   
  update(index,updated_value)
  {
    if(this.arr[index])
    {
      this.arr[index] = updated_value;
    }
    
  }
  clear()
  {
    this.arr =[]
  }
}

/**todoList = new Todo();

todoList.add('Task 1');
todoList.add('Task 2');
todoList.add('Task 3');

todoList.update(1, 'Updated Task 2');
console.log(todoList.get(1))
todoList.update(3, 'Invalid Task');
console.log(todoList.getAll())**/
module.exports = Todo;

