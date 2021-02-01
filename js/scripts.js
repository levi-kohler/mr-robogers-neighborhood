// Create a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

// Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"

// Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"

// Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

function beepBoop(number) {
  let numArray = [];
  for (let i = 0; i <= number; i++) {
    let numString = i.toString();
    if (numString.includes("3")) {
      numArray.push("Won't you be my neighbor?");
    } else {
      numArray.push(" " + numString)
    }
  };
  return numArray
};


// UI Logic
$(document).ready(function() {
  $("#formOne").submit(function(e) {
    e.preventDefault()

    let number = ($("#inputNumber").val()); 
    let returnString = beepBoop(number);
    $("#output").text(returnString);
  });
});
