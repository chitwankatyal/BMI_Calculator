//Global variable
var calculateBmr = 0;

document.getElementById("imperialButton").addEventListener("click", function(){
    imperialCal();
})
document.getElementById("metricButton").addEventListener("click", function(){
    metricCal();
})
//Imperial BMR
function imperialCal()
{
    document.getElementById("heightBig").innerHTML = "Feet";
    document.getElementById("height1").value = 0;
    document.getElementById("heightSmall").innerHTML = "Inches";
    document.getElementById("height2").value = 0;
    document.getElementById("weightKgs").innerHTML = "Pounds";
    document.getElementById("weightPounds").value = 0;
    document.getElementById("age").value = 0;
}

//Metric BMR
function metricCal()
{
    document.getElementById("heightBig").innerHTML = "Metres";
    document.getElementById("height1").value = 0;
    document.getElementById("heightSmall").innerHTML = "Centimetres";
    document.getElementById("height2").value = 0;
    document.getElementById("weightKgs").innerHTML = "Kilograms";
    document.getElementById("weightPounds").value = 0;
    document.getElementById("age").value = 0;
}

//Imperial calculation for males
function imperialCalMales(weightPounds, height1, height2, age)
{
    var weight = parseInt(weightPounds);
    var heightFeet = parseInt(height1);
    var heightInches = parseInt(height2);
    var age1 = parseInt(age);
    heightInches += heightFeet * 12;

    //Imperial BMR for male = (4.536 * weight in pounds) + (15.88 * height in inches) - (5 * age) +5
    calculateBmr = (4.536 * weight) + (15.88 * heightInches) - (5 * age1) + 5;
}

//Imperial calculation for females
function imperialCalFemales(weightPounds, height1, height2, age)
{
    var weight = parseInt(weightPounds);
    var heightFeet = parseInt(height1);
    var heightInches = parseInt(height2);
    var age1 = parseInt(age);
    heightInches += heightFeet * 12;

    //Imperial BMR for females = (4.536 * weight in pounds) + (15.88 * height in inches) - (5 * age) - 161
    calculateBmr = (4.536 * weight) + (15.88 *  heightInches) - (5 * age1) - 161;
}

//Metric calculation for males
function metricCalMales(weightPounds, height1, height2, age)
{
    var weightKgs = parseInt(weightPounds);
    var heightMetres = parseInt(height1);
    var heightCentimetres = parseInt(height2);
    var age2 = parseInt(age);

//Metric BMR for males = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
calculateBmr = ((10 * weightKgs) + (6.25 * ((heightMetres * 100) + heightCentimetres))) - (5 * age2) + 5;
}

//Metric calculation for females
function metricCalFemales(weightPounds, height1, height2, age)
{
    var weightKgs = parseInt(weightPounds);
    var heightMetres = parseInt(height1);
    var heightCentimetres = parseInt(height2);
    var age2 = parseInt(age);

    //Metric BMR for females =  (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
calculateBmr = (10 * weightKgs) + (6.25 * ((heightMetres * 100) + heightCentimetres)) - (5 * age2) - 161;
}

//Calculate BMR
document.getElementById("result").addEventListener("click", function(){
    var weight = document.getElementById("weightPounds").value;
    var height1 = document.getElementById("height1").value;
    var height2 = document.getElementById("height2").value;
    var age = document.getElementById("age").value;
     if (document.getElementById("gender").value == "Male")
     {
         (document.getElementById("imperialButton").checked) ? imperialCalMales(weight, height1, height2, age) : metricCalMales(weight, height1, height2, age);
     }
     else if (document.getElementById("gender").value == "Female")
     {
         (document.getElementById("imperialButton").checked) ? imperialCalFemales(weight, height1, height2, age) : metricCalFemales(weight, height1, height2, age);
     }
     alert("Your BMR is: " + calculateBmr);
})

//Activity BMR calculation
document.getElementById("resultActivity").addEventListener("click", function()
{
    var activityBmr = 0;
    if(document.getElementById("sedentary").checked)
    {
        activityBmr = calculateBmr * 1.2; //for sedentary lifestyle
    }
    else if(document.getElementById("lightlyActive").checked)
    {
        activityBmr = calculateBmr * 1.375; //lightly active
    }
    else if(document.getElementById("moderatelyActive").checked)
    {
        activityBmr = calculateBmr * 1.55; //Moderately active
    }
    else if(document.getElementById("veryActive").checked)
    {
        activityBmr = calculateBmr * 1.725; //Very active
    }
    else if(document.getElementById("superActive").checked)
    {
        activityBmr = calculateBmr * 1.9; //Super active
    }
    alert("Your BMR according to the activity level is: " + activityBmr)
})
