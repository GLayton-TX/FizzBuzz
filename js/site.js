//  get values from the ui and use them to run the app
function getValues(){
    let fizzValue = parseInt(document.getElementById("fizzVal").value);
    let buzzValue = parseInt(document.getElementById("buzzVal").value);
    if (isValid(fizzValue) && isValid(buzzValue)) {
        let fbValue = fizzValue*buzzValue;
        displayResults(fizzBuzz(fizzValue,buzzValue,generateNumbers()),fbValue);        
    }
}

// generate numbers from start value to ending value, set up in case you wanted to alter the number range
function generateNumbers(){
    startVal = 1;
    endVal = 100;
    let numbers = [];
    for (let i = startVal; i < endVal+1; i++) {
        numbers.push(i);
    }
    return numbers;
}

//create the generated numbers, fizz for multiples of fizzValue, buzz for multiples of buzzValue, fizzBuzz for multiples of both
function fizzBuzz(fizzValue, buzzValue,numbers){
    let tableRow ="";
    let temp ="";
    numbers.forEach(element => {
        if (element % (fizzValue*buzzValue) === 0) {
            temp =`<span class="text-danger"><b>FizzBuzz</b></span>`;
        }
        else if (element % buzzValue === 0){
            temp ="<i>Buzz</i>";
        }
        else if (element % fizzValue === 0){
            temp ="<b>Fizz</b>";
        }
        else {
            temp = element;
        }
        tableRow += `<tr><td>${temp}</td></tr>`;

    });
    return tableRow;
}

// displays the generated table and FizzBuzz Value
function displayResults(tableRow,fbValue){
    document.getElementById("fbValueHolder").classList.remove("invisible");
    document.getElementById("fizzBuzzVal").innerHTML = fbValue;
    document.getElementById("results").innerHTML = tableRow;
}

// validate form entry, form only allows integers but full validation listed here
function isValid(number){
    if (!Number.isInteger(number)) {
            alert("You must enter only Integers.");
    }
    else if (number < 0){
        alert("Value cannot be negative");
    }
    else if (number === 0){
        alert("Value cannot be Zero");
    }
    else {
        return true;
    }
}

// clear form
function clearForm(){
    location.reload();
}