//math variables
let distance = 5; /* obviously need to get input eventually */
let costPerMin = [0.2, 0.4, 0.5, 0.8];
let costPerMile = [0.5, 1, 2, 3];
let rideTime = 30; /* input needed */
let estimate = 0;

//array: 0: economy, 1: standard car, 2: SUV, 3: luxury

//UI variables
const results = document.getElementById('results');
const container = document.querySelector('.container');
const distDisplay = document.getElementById('distance');
const radio = document.getElementsByName('transport');
const button = document.getElementById('submit');
button.addEventListener('click', checkButtons);

function checkButtons(e) {

    container.style.display = "none";
    results.style.display = "block";

    for(let i = 0; i < radio.length; i++) {
        if(radio[i].checked) {
                estimator(radio[i].value);
        }
    }
    e.preventDefault();
}

function estimator(choice) {
    //choice is the result of the radio button loop
    document.createElement('p');
    //need to create an element for this and place it into the div. 
    //so the button doesn't get deleted by the textContent overwrite
    
    results.textContent = "You picked " + choice;


    for(let i = 0; i <= costPerMile.length; i++) {
        estimate = (costPerMin[0] * rideTime) + (costPerMile[0] * distance);
            estimate = estimate.toFixed(2);
    //console.log("Your Fare Estimate is: $" + estimate + " for a " + distance + " mile ride, if you use a " + transport + ".");
    }
}

