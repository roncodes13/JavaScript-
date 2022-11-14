// ARRAYS ------------------------------------------------------------------------------
  /* Array allows you to store multiple things around them */
  const groceries = ['🍌', '🍎', '🍊', '🍐']
  // console.log(groceries);

  // Indexing 
  // The index gives you the location of the value within an array
  // it is similar to street number
  // console.log(groceries[1]); // in here we grabbed the 2nd index which is apple.

  // PUSH METHOD
  /* Add one or more elements to the end of the array and returns the nw length of the array*/
  groceries.push('🍩')
  groceries.push('🍗','🍖', '🥩', '🍠') 
  // console.log(groceries);

  // SLICE METHOD
  /* The slice method returns the portion of the array you want in a new array */
  console.log(groceries.slice(0, 3));

  // IndexOF Method
  console.log(groceries.indexOf('🍗'));

  // LENGTH Method
  /* Lenth is a array property that returns the number of element in a given array */
  console.log(groceries.length)