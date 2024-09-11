const userInputString = prompt(
    "Please enter the Froyo flavors you would like to order seperated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );

  // Splits the above string of flavers into an own array of substrings
  const userInputArray = userInputString.split(','); //userInputString.split(',') is telling the code to create a substring after each comma on line 2-3
  console.log(userInputArray);
  
  const flavors = {}; // {}=>newly created object
    for (let i = 0; i < userInputArray.length; i++) {
      const str = userInputArray[i];
      console.log(`flavors ${i}`, str); //How
   
      if(flavors[str] !== undefined){
          flavors[str] += 1;
      } else{
          flavors[str] = 1;
      }
    }
  console.table(flavors);



