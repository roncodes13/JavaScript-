// OBJECTS --------------------------------------------------------------------------------
  /* Objects are type of variable, quite similar to array but they have something called key-value pairs */

  // const person = {
  //   name: 'Emma Watson' ,
  //   shirt: 'white'
  // }
  
  //  ACCESS OBJECT - 
  //  Dot notation
  // console.log(person.name);
  // console.log(person.shirt);

  // Bracet Notation
  // console.log(person['name']);
  // console.log(person['shirt']);

  // Assign object
  // person['phone'] = '+910000000000'
  // console.log(person.phone)

  // console.log(person)

  // 

  // const person2 = {
  //   name: 'Mouqueer' ,
  //   shirt: ' black'
  // }
  // console.log

  // ES6 arrow functions (2 arguments)
  // Objects
  // Template literals
  // Methods - a method is a property containing a function defination

  const introducer = (name , shirt ) => {
    const person = {
      name: name ,
      shirt: shirt,
      assets: 100000,
      liabilities: 50000,
      netWorth: function() {
        return this.assets - this.liabilities
      }
    }

    const intro = `Hey my name is ${person.name} and my shirt colour is ${person.shirt} and my net worth is $${person.netWorth()} US dollars`
    return(intro)
  }

  console.log(introducer('mouuqeer' , 'black'));