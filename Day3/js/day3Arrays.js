/*
Dan Williams
3-7-15
Section 00
Day 3 Arrays
 */
//alert("Testing to make sure it is linked");

//Create a basic array
var avengersNames=["Thor", "Hulk", "Iron Man","Captain America"];

//Print out whole array
console.log(avengersNames);

//Print out one specific item in the array.
console.log(avengersNames[2]);

//Swap items in our array
avengersNames[1]="Black Widow";

console.log(avengersNames);

// Use a variable for the index number
var num = 3;
console.log(avengersNames[num]);

//Find the length of an array
//length property = How many items are in the array.
//dot syntax - fancy for use a period
console.log(avengersNames.length);

//Add an item to our array
avengersNames[4]="Hawkeye";

avengersNames[avengersNames.length]= "Wolverine";

console.log(avengersNames);


//Picking Oranges
var orangesPicked = [13,350, 1000, 600];

//How many oranges did we pick in total?
var totalOranges = orangesPicked[0] + orangesPicked[1]+orangesPicked[2]+orangesPicked[3];
console.log("The total number of oranges picked is "+totalOranges + ".");

var averageOranges = totalOranges/orangesPicked.length;
console.log("The average number of oranges picked per day is "+averageOranges+".");

///-----------------------------------------------------------------------------------------

/*------------------------------------------------------debug
var fruitBowl = ['apple', "mango","grape", "grape", "banana"];
console.log(fruitBowl);



fruitBowl.push("streaberry");
fruitBowl.log ("pinapple");



/// pop()    ----removes the last item form the array
// it also retruns the item
var caughtitem = fruitBowl.pop();
var caughtStrwwberry = fruitBowl.pop

console.log (fruitBowl);
console.log (caughtitem;
console.log (caughtStrwwberry);

*/






