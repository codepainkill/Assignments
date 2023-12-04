/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {

  if(transactions.length==0)
  {
    return []
  }
  console.log(transactions[0]['category'])
  let category = [{"category":transactions[0]['category'],'totalSpent':0}];
  for(let i=0;i<transactions.length;i++)
  {
    for(let j=0;j<category.length;j++)
    {
      let flag = checkCategory(category,transactions[i]['category'])
      //if(flag == true)
      //{
        if(category[j]['category']==transactions[i]['category'])
        {
          category[j]['totalSpent'] += transactions[i]['price'];
          //category[j]['totalSpent'] = category[j]['totalSpent'] + transactions[i]['price']
          console.log(transactions[i])
          console.log("-----------------------------------------------")
          console.log(category)
        }
      //}
      if(flag==false){
        category.push({"category":transactions[i]['category'],'totalSpent':0})
      }
      
    }
  }
  return category;
}

function checkCategory(transaction,category) {
  let flag = false 
  for(let i=0;i<transaction.length;i++)
  {

      if(category==transaction[i]['category'])
      {
        console.log("transaction Cateogry: "+transaction[i]['category'])
        console.log(" Cateogry: "+category)
        flag = true;
            
      }
  }
  return flag;
}

let a =calculateTotalSpentByCategory( [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: 'Electronics',
    itemName: 'Headphones',
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: 'Clothing',
    itemName: 'Jeans',
  },
])

console.log(a)

module.exports = calculateTotalSpentByCategory;
