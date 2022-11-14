// FUNCTIONS--------------------------------------------------
/* 
  A javascript function is a block of code designed to perform a particular task and is executed when "something" calls it.
*/

/*
  this is a function called 'sayMyName and it has 0 arguments'
  it logs out your name to the console
*/
// function sayMyName(){
//   console.log('mouqueer');
// }
// sayMyName();

/* this is a function called 'sayMyName2' and it has 1 argument called 'name'
   it logs out your name to the console
*/
// function sayMyName2(name){
//     console.log(name);
//   }
//   sayMyName2('emma');
  
//    function greetings(name) {
  
  /* Template literals provide an easy was to interpolate variables    and expressions into strings. 
    
    Interpolation is an efficient way of concatenation
  */
  //  greet = `hi ${name}, nice to meet you`;
  // greet = 'hi ' + name + ', nice to meet you'
   
  // console.log(greet)
  
  // greetings('mouqueer')
  /* Template literals provide an easy was to interpolate variables and expressions into strings*/
  
  /* Function arguments are the values recieved by the function when it is called, they behave as variables, however they only live within the function and cannot be accessed outside */
  
   function sum(a , b){   // Function is called, it will reurn the value in sum
  /* RETURN
     the return statement stops the execution of a function and returns a value

     the return statement makes the function resuable, 
     you can use the same function in multiple places
  */
    return a + b  
   }

    num1 = sum(1 , 2); // value of sum got s tored in num1
    console.log(num1);

  function calculateFoodTotal(food , tip) {  // this function will calculate the food and tip amount
    tipPercentage = tip / 100 
    tipAmount = food * tipPercentage
    total = food + tipAmount
    return total
  }

  console.log(calculateFoodTotal(100,20)) 


  // ES6 ----------------------------------------------------------------------------------
  // ARROW FUNCTIONS ----------
  /* Arror functions allows us to write shorter function syntax */
   
   //Regular function (old)
   function myFunction (name) {
    console.log(`hi ${name}`);
   }

  //  Arrow function (new)
    const myFunction2 = (name2) => {
      console.log(`hi ${name2}`);
    }
  
  // Arrow function with explicit return
     const subArrow = (c , d) => {
      return c - d 
     }

     console.log(subArrow(20 , 30));

  // Arrow function with implicit return
  //  NOTE : For implicit return , remove the squigglies
    const addArrow = (a , b) => a + b

    console.log(addArrow(10 , 30));