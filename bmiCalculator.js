function bmiCalculator (weight, height) {
    let heightInMeters = height * 0.3048; 
    let bmi = Math.round(weight / (heightInMeters*heightInMeters));
    if(bmi <18.5){
        console.log("Your BMI is "+bmi+", so you are underweight.");
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        console.log("Your BMI is "+bmi+", so you are normal weight.");
    }
    else if(bmi > 24.9){
        console.log("Your BMI is "+bmi+", so you are overweight.");
    }
}
bmiCalculator(60,6.1);