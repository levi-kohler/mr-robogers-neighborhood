//Business Logic
function beepBoop(number) {
  let numArray = [];
  for (let i = 0; i <= number; i++) {
    let numString = i.toString();
    if (numString.includes("3")) {
      numArray.push("Won't you be my neighbor?");
    } else if (numString.includes("2")) {
      numArray.push("Boop!");
    } else if (numString.includes("1")) {
      numArray.push("Beep!");
    }
    else {
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
