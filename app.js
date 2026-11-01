// Exercise 1 



// const menuItem = ['Tea', 'Coffe', 
//     'Sandwich', 'Cookie']

//     console.log(menuItem[0])
//     console.log(menuItem[2])
//     console.log(menuItem.length)
//     console.log(menuItem[3])

    // Exercise 2

    // const waitingCustomer = ['Aisha',' Omar', 'Noor']
    // waitingCustomer[1] = 'Ali'
    // waitingCustomer.push('Dana')
    // removedCustomer = waitingCustomer.pop()
    // console.log(removedCustomer)
    // console.log(waitingCustomer)
   
    //Exercise 3

    // const drinks = ['Water', 'Tea', 'Coffee', 'Juice'];
    // for(i = 0; i <= drinks.length-1; i++){
    //     console.log([i+1]+ '. ' +drinks[i])
    // }
// both solution are correct 
    // drinks.forEach((drink) => {
    //     console.log((drinks.indexOf(drink)+1)+ '. ' +drink)
    // })

    //Exercise 4 
    // const prices = [2,5,3,6,4]; 

    // let totalPrice = 0
    // let expensiveItemCount = 0 
    // prices.forEach((price) => {
    //  totalPrice = totalPrice + price
    // if(price >=4){
    //     expensiveItemCount++ 
    // }
  
    // })
    //   console.log('Total Price: ' +totalPrice )
    // console.log('Expensive Item Count: ' +expensiveItemCount)
    // const numbers = [10,20,30,40]
    // numbers.forEach((number) => {
    //     console.log(number)
    // })

    // Exercise 5 
    // const cafe = { name : 'Campus Cafe', 
    //     location: 'Building A', 
    //     seats: 24, 
    //     isOpen: true
    // }
    // console.log(cafe.name + ' is located in '
    //     + cafe.location +'. ')
    //     console.log('Available seats: '+cafe.seats)

        // Exercise 6
//         const drink = {
//   name: 'Iced Coffee',
//   price: 3,
//   size: 'small',
//   temporaryCode: 'TEMP-01',
// };
//   drink.size = 'Large'
//  drink.price = drink.price + 1
//  drink.isAvailable= true
//   delete drink.temporaryCode; 
//   console.log(drink)

//Exercise 7 

// const order = { 
//   customerName: ' Mariam', 
//   itemName: 'sandwich',
//   price: 4,
//   quantity: 3,
//   isPaid: false, 
// }
// order.orderTotal = order.price * order.quantity
// console.log(order.customerName + ' ordered ' + order.quantity +
//   ' '+ order.itemName+ ' items')
// console.log(' Order total: ' + order.orderTotal)
// if(order.isPaid === true){
//   console.log(' Ready to prepare')
// }
// else {
//   console.log('Waiting for payment ')
// }

// Exercise 8 
// const studySession = {
//   title: 'JavaScript practice', 
//   room: 'Lab 2', 
//   topics: ['varible', ' Arrays']
// }
// studySession.topics.push('Objects')
// console.log('Number of topic: '+ studySession.topics.length)
// studySession.topics.forEach((topic) => {
//   console.log(topic)
// });
// studySession.room = 'Lab 3'
// console.log(studySession.title +' Will take place in '+ studySession.room)
// console.log(studySession.topics)

// Exercise 9 
// const product = [ 
//   {name: 'Tea', price: 2},
//   {name: 'Sandwich', price: 4},
//   {name: 'Cookie', price: 1 },
// ]; 
// console.log(product[1].name)
// product[1].price = 5
// product.push({name: 'Juice', price: 3})
// console.log(product[3])
// for( i=0; i < product.length; i++ ){
//   console.log(product[i].name +' Cost '+ product[i].price + ' BD')
// }
const studyGroup =  {
name: 'JavaScript Crew', 

member: [
  { name: 'Aisha', completedHomework: true},
  {name: ' Omar', completedHomework: false},
  {name: 'Noor', completedHomework: true}
],
};
console.log(studyGroup.name)
console.log(studyGroup.member.length)
let completedCount = 0
for( i =0 ; i<studyGroup.member.length; i++){
  const member = studyGroup.member[i]
  if(member.completedHomework === true){
    completedCount ++;
  }
  else {
    console.log(member.name +' Need to finish the homework')
  }
}
console.log('Completed homework: ' +completedCount)