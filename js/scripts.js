function firstPart(CC) {
    return ((CC / 4) -2 * CC - 1);
}
function middlePart(YY) {
    return (5 * YY / 4);
}
function lastPart(MM) {
    return (26 * (MM + 1) / 10);
}
var year = Number (prompt("Which year were you born?"))
var gender = prompt("What is your gender?")


const firstPartResult = firstPart(10)
const middlePartResult = middlePart(year)
const lastPartResult = lastPart(10)

var calcResult = (firstPartResult + middlePartResult + lastPartResult + 10) % 7
const wholeNumber = calcResult.toFixed(0)
alert(wholeNumber)

const maleNames = ["Kwasi representing Sunday","Kwadwo representing Monday","Kwabena representing Tuesday","Kwaku rep Wednesday","Yaw representing Thursday","Kofi representing Friday","Kwame representing Saturday"]
const femaleNames = ["Akosua representing Sunday","Adwoa representing Monday","Abenaa representing Tuesday","Akua representing Wednesday","Yaa representing Thursday","Afua representing Friday","Ama representing Saturday"]

let result;
if (gender == "male") {
    result = maleNames[wholeNumber]
} else if (gender == "female") {
    result = femaleNames[wholeNumber]
} else {
    alert('Enter a valid gender')
} 
    alert(`Your Akan name is ${result}`)



