// You can iterate over items in an array using forEach. To use forEach,
  // you define a function which will be invoked once for every element in
  // the array. When the function is invoked, it will receive the item from
  // the array as an argument.
  // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

  // This array of dog breeds will be used for the examples below. Don't modify it here!
const dogs = ["Labrador", "Beagle", "Poodle", "Pug", "Chihuahua"]

  // When invoked, this function will print "The {dogName} barks." You'll use this below. Don't modify it here!
const printDogName = (dogName) => {
    console.log("The " + dogName + " barks.")
}

  // Task 1: Pass the printDogName function into a .forEach call on the `dogs` array, to
  // make it print "The {dogName} barks." for each item in the array.
dogs.forEach((dogName) => {
    printDogName(dogName)
});

  // Task 2: Create a new function called `printDogNameUppercase` which works similarly
  // to the `printDogName` function but makes the string uppercase. (See https://www.w3schools.com/jsref/jsref_touppercase.asp
  // for how to make a string uppercase). Use .forEach to run the function for each
  // dog in the dogs array.
const printDogNameUppercase = (dogName) => {
    console.log(dogName.toUpperCase());
}
dogs.forEach((dogName) => {
    printDogNameUppercase(dogName)
});
  // Task 3: Write a forEach function which uses an anonymous function instead of defining a
  // named function like the examples above (hint; the lecture material used anonymous functions)
  // and uses console.log to print "The {dogName} needs to go for a walk!".

dogs.forEach( (dogName) => {
    console.log(`The ${dogName} needs to go for a walk!`);
} );