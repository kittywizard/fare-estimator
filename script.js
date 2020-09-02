//math variables
let distance = 5; /* obviously need to get input eventually */
let costPerMin = [0.2, 0.4, 0.5, 0.8];
let costPerMile = [0.5, 1, 2, 3];
let rideTime = 30; /* input needed */
let estimate = 0;

//array: 0: economy, 1: standard car, 2: SUV, 3: luxury

//UI variables
const container = document.querySelector('.container');
const distDisplay = document.getElementById('distance');
const radio = document.getElementsByName('transport');
const button = document.getElementById('submit');
const resetBtn = document.getElementById('resetBtn');

//new div elements
const display = document.querySelector('.display');
const results = document.querySelector('.results');

button.addEventListener('click', checkButtons);
resetBtn.addEventListener('click', reset);


function checkButtons(e) {

    for(let i = 0; i < radio.length; i++) {
        if(radio[i].checked) {
                estimator(radio[i].value);
        }
    }
    e.preventDefault();
}

function estimator(choice) {
    //choice is the result of the radio button loop

    container.style.display = "none";
    results.style.display = "block";

    for(let i = 0; i <= costPerMile.length; i++) {
        estimate = (costPerMin[0] * rideTime) + (costPerMile[0] * distance);
            estimate = estimate.toFixed(2);

            display.textContent = "You picked " + choice + " and your estimate is: $" + estimate;

    }
}

function reset() {

 distance = 5; /* obviously need to get input eventually */
 costPerMin = [0.2, 0.4, 0.5, 0.8];
 costPerMile = [0.5, 1, 2, 3];
 rideTime = 30; /* input needed */
 estimate = 0;

 container.style.display = "block";
 results.style.display = "none";

}