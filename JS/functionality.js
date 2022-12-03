var heightInput = document.querySelector('.height-input');
var weightInput = document.querySelector('.weight-input');
var calculateButton = document.querySelector('.btn');
var result = document.querySelector('.result');
var statement = document.querySelector('.statement');
var height, weight, BMI;

calculateButton.addEventListener('click', function() {
    height = heightInput.value/100;
    weight = weightInput.value;
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
