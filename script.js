let distance = 5; /* obviously need to get input eventually */
let costPerMin = [0.2, 0.4, 0.5, 0.8];
let costPerMile = [0.5, 1, 2, 3];
let rideTime = 30; /* input needed */

//array: 0: economy, 1: standard car, 2: SUV, 3: luxury
const distDisplay = document.getElementById('distance');

//get all the radio elements, can then loop through them and figure out which was pushed
//you can check to see which button is picked by using .checked
const radio = document.getElementsByName('transport');

let estimate = (costPerMin[0] * rideTime) + (costPerMile[0] * distance);
estimate = estimate.toFixed(2);

//need to add decimal places to the estimate
//i think that's a math function
console.log("Your Fare Estimate is: $" + estimate + " for a " + distance + " mile ride.");