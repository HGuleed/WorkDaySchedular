var today = new Date();
console.log(today);

var date = moment().format("MMMM Do YYYY, h:mm:ss a");

document.getElementById("currentDT").textContent = date;

var currentHr = moment().format("H");

function timeColor() {
  //   debugger;

  //   $(".time-block").each(function () {
  //     var timeBlock = $(this);
  //     var actualTime = timeBlock.attr("id");
  //     var timeContainer = timeBlock.parent();

  //     if (actualTime === currentHr) {
  //       timeContainer.addClass("present");
  //     } else if (actualTime < currentHr) {
  //       timeContainer.addClass("past");
  //     } else if (actualTime > currentHr) {
  //       timeContainer.addClass("future");
  //     }
  //     console.log(actualTime);
  //   });
  var timeBlock9 = document.getElementById("timeSlot9");

  if (currentHr === 9) {
    timeBlock9.classList.add("present");
  } else if (currentHr < 9) {
    timeBlock9.classList.add("past");
  } else {
    timeBlock9.classList.add("future");
  }

  var timeBlock10 = document.getElementById("timeSlot10");

  if (currentHr === 10) {
    timeBlock10.classList.add("present");
  } else if (currentHr < 10) {
    timeBlock10.classList.add("past");
  } else {
    timeBlock10.classList.add("future");
  }

  var timeBlock11 = document.getElementById("timeSlot11");

  if (currentHr === 11) {
    timeBlock11.classList.add("present");
  } else if (currentHr < 11) {
    timeBlock11.classList.add("past");
  } else {
    timeBlock11.classList.add("future");
  }

  var timeBlock12 = document.getElementById("timeSlot12");

  if (currentHr === 12) {
    timeBlock12.classList.add("present");
  } else if (currentHr < 12) {
    timeBlock12.classList.add("past");
  } else {
    timeBlock12.classList.add("future");
  }

  var timeBlock13 = document.getElementById("timeSlot13");

  if (currentHr == 13) {
    timeBlock13.classList.add("present");
  } else if (currentHr < 13) {
    timeBlock13.classList.add("past");
  } else {
    timeBlock13.classList.add("future");
  }

  var timeBlock14 = document.getElementById("timeSlot14");

  if (currentHr == 14) {
    timeBlock14.classList.add("present");
  } else if (currentHr < 14) {
    timeBlock14.classList.add("past");
  } else {
    timeBlock14.classList.add("future");
  }

  var timeBlock15 = document.getElementById("timeSlot15");

  if (currentHr == 15) {
    timeBlock15.classList.add("present");
  } else if (currentHr < 15) {
    timeBlock15.classList.add("past");
  } else {
    timeBlock15.classList.add("future");
  }

  var timeBlock16 = document.getElementById("timeSlot16");

  if (currentHr == 16) {
    timeBlock16.classList.add("present");
  } else if (currentHr < 16) {
    timeBlock16.classList.add("past");
  } else {
    timeBlock16.classList.add("future");
  }

  var timeBlock17 = document.getElementById("timeSlot17");

  if (currentHr == 17) {
    timeBlock17.classList.add("present");
  } else if (currentHr < 17) {
    timeBlock17.classList.add("past");
  } else {
    timeBlock17.classList.add("future");
  }
}
timeColor();
