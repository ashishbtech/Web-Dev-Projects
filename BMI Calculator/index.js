function calculateBMI(){
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value


    let bmi = weight/(height/100) ** 2
    let resultMsg = "Your BMI is " + bmi.toFixed(2)


    if(bmi < 18.5){
        resultMsg = resultMsg + "(Underweight)"
    }
    else if(bmi >= 18.5 && bmi<25){
        resultMsg = resultMsg + "(Normal)"
    }
    else if(bmi>= 25 && bmi<30){
        resultMsg = resultMsg +"(Overweight)"
    }

    else if(bmi>=30)
    {
        resultMsg = resultMsg + "(Obese)"
    }
    else{
        resultMsg = "Enter valid Height and Weight !!!"
    }

    document.getElementById("result").innerHTML = resultMsg

    document.getElementById("result").style.display = "block";    /**display: none → The box is invisible.

                                                                   display: block → The box appears. */
}