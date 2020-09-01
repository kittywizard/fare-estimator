let distance = 5; /* obviously need to get input eventually */
let costPerMin = [0.2, 0.4, 0.5, 0.8];
let costPerMile = [];
let rideTime = 30; /* input needed */

//array: 0: economy, 1: standard car, 2: SUV, 3: luxury
const distDisplay = document.getElementById('distance');

//get all the radio elements, can then loop through them and figure out which was pushed
//you can check to see which button is picked by using .checked
const radio = document.getElementsByName('transport');
