const userInputString = prompt(
    "Please enter the Froyo flavors you would like to order seperated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );

  // Splits the above string of flavers into an own array of substrings
  const userInputArray = userInputString.split(','); //userInputString.split(',') is telling the code to create a substring after each comma on line 2-3
  console.log(userInputArray);
  




