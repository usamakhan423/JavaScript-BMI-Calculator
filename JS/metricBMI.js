var feetInput = document.querySelector('.feet-input');
var inchesInput = document.querySelector('.inches-input');
var weightInput = document.querySelector('.weight-input');
var calculateButton = document.querySelector('.btn');
var result = document.querySelector('.result');
var statement = document.querySelector('.statement');
var height, weight, BMI;

calculateButton.addEventListener('click', function() {
    feet = feetInput.value;
    feet = feet*0.3048;
    inches = inchesInput.value;
    inches = inches*0.0254;
    height = feet+inches;
    weight = weightInput.value/2.20;
    BMI = weight/(height**2);
    result.innerHTML = BMI;

    if(BMI < 18.5) {
        statement.innerHTML = 'You are in Bad situation! Please focus on yourself';
    } else if(BMI > 18.5 && BMI < 24.5) {
        statement.innerHTML = 'You are Normal & Healthy..Chill!';
    }else if(BMI > 24.5 && BMI < 29.9) {
        statement.innerHTML = ' You are overweight! Please do some dite';
    }else {
        statement.innerHTML = 'You are in too fatty.! Do visit to the specialist';
    }
});
