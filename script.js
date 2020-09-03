//math variables
let costPerMin = [0.2, 0.4, 0.5, 0.8];
let costPerMile = [0.5, 1, 2, 3];
let rideTime = 15;
let estimate = 0;

//array: 0: economy, 1: standard car, 2: SUV, 3: luxury

//UI variables
const container = document.querySelector('.container');
const distance = document.getElementById('distance');
const radio = document.getElementsByName('transport');
const button = document.getElementById('submit');
const resetBtn = document.getElementById('resetBtn');

//new div elements
const display = document.querySelector('.display');
const results = document.querySelector('.results');

button.addEventListener('click', checkButtons);
resetBtn.addEventListener('click', reset);


function checkButtons(e) {

    //i need to check for errors. do that here?

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

    for(let i = 0; i < costPerMile.length; i++) {
        estimate = (costPerMin[i] * rideTime) + (costPerMile[i] * distance.value);
            estimate = estimate.toFixed(2);

            const estDisplay = document.createElement('div');
            estDisplay.classList.add('display');
            display.appendChild(estDisplay);
            console.log(estimate + " " + estDisplay);

            const distDisplay = document.createElement('div');
            distDisplay.classList.add('display');
            distDisplay.textContent = distance.value + " miles is how far you want to go.";
            display.appendChild(distDisplay);

    }
}

function reset() {

 costPerMin = [0.2, 0.4, 0.5, 0.8];
 costPerMile = [0.5, 1, 2, 3];
 rideTime = 30; /* input needed */
 estimate = 0;

 container.style.display = "block";
 results.style.display = "none";

}