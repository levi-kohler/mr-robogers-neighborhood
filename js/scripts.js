// Create a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

// Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"

// Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"

// Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

function beepBoop(number) {
  let numberArray = []
  for(let i = 0; i <= number; i++) {
    let numberString = i.toString();
    numberArray.push;
    console.log(numberArray)

    return (numberArray + numberString)
  }
};


// UI Logic
$(document).ready(function() {
  $("#formOne").submit(function(e) {
    e.preventDefault()

    let number = ($("input#inputNumber").val()); 
    let returnString = beepBoop(number)
    $("#output").text(returnString);
  });
});
