let distance = 5; /* obviously need to get input eventually */
let costPerMin = [0.2, 0.4, 0.5, 0.8];
let costPerMile = [0.5, 1, 2, 3];
let rideTime = 30; /* input needed */
let estimate = 0;

//array: 0: economy, 1: standard car, 2: SUV, 3: luxury
const distDisplay = document.getElementById('distance');
const button = document.getElementById('submit');
button.addEventListener('click', checkButtons);


//get all the radio elements, can then loop through them and figure out which was pushed
//you can check to see which button is picked by using .checked
const radio = document.getElementsByName('transport');

function checkButtons(e) {
    for(let i = 0; i < radio.length; i++) {
        if(radio[i].checked) {
            console.log("This button was checked. " + radio[i].value);
        }
    }
    e.preventDefault();
}

for(let i = 0; i <= costPerMile.length; i++) {

    estimate = (costPerMin[0] * rideTime) + (costPerMile[0] * distance);
    estimate = estimate.toFixed(2);
    //console.log("Your Fare Estimate is: $" + estimate + " for a " + distance + " mile ride, if you use a " + transport + ".");
}
