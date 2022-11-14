// Arrays and Loops Excecises ---------------------------------------------------------------
const howManyLetters = () => {
    const phrase = 'Hey , can you go to the super store with me ?'

    let result = 0;

    for(const index in phrase){
      console.log(Number(index) +1);
      result = Number(index) + 1
    }
     return { result }
  }
  // const phrase = prompt('Write your shit here')

  // console.log(howManyLetters(phrase));

  // Summing up all the numbers in an array
  const sumArray = (numbers) => {
    let result = 0;
    // for loop
    for(const number of numbers){
      console.log(number);
      result = result + number
    }
    return {result}
  }

  const nums = [1 , 2 , 3 , 4]
  // console.log(sumArray(nums));

  const max = (numbers) => {
    let result = numbers[0];

    // loop
    for(const number of numbers){
      if(number > result){
        result = number
      }
    }
    return {result}
  }
  console.log(max([1, 2, 3, 4, 5]));

// -----------------------------------------------------

  const letterFrequency = (phrase) => {
    console.log(phrase);

    let frequency = {}
    for(const letter of phrase){
      if (letter in frequency){
        frequency[letter] = frequency[letter] + 1
      }
      else {
        frequency[letter] = 1
      }
    }
    return frequency
  }

  // console.log(letterFrequency('hey man how you doing toning, did you watch the game last night, it was a hell of a win for england'))