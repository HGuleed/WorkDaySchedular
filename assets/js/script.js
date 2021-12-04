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

function save9() {
  var textarea9 = document.querySelector("#notes9");
  var newNotes9 = document.getElementById("notes9");
  var save9 = document.querySelector("#btn9");

  save9.addEventListener("click", updateNote9);

  newNotes9.textContent = localStorage.getItem("task9");

  function updateNote9() {
    localStorage.setItem("task9", textarea9.value);
    newNotes9.textContent = textarea9.value;

    console.log(textarea9.value);
  }
}
save9();

function save10() {
  var textarea10 = document.querySelector("#notes10");
  var newNotes10 = document.getElementById("notes10");
  var save10 = document.querySelector("#btn10");

  save10.addEventListener("click", updateNote10);

  newNotes10.textContent = localStorage.getItem("task10");

  function updateNote10() {
    localStorage.setItem("task10", textarea10.value);
    newNotes10.textContent = textarea10.value;

    console.log(textarea10.value);
  }
}
save10();

function save11() {
  var textarea11 = document.querySelector("#notes11");
  var newNotes11 = document.getElementById("notes11");
  var save11 = document.querySelector("#btn11");

  save11.addEventListener("click", updateNote11);

  newNotes11.textContent = localStorage.getItem("task11");

  function updateNote11() {
    localStorage.setItem("task11", textarea11.value);
    newNotes11.textContent = textarea11.value;

    console.log(textarea11.value);
  }
}
save11();

function save12() {
  var textarea12 = document.querySelector("#notes12");
  var newNotes12 = document.getElementById("notes12");
  var save12 = document.querySelector("#btn12");

  save12.addEventListener("click", updateNote12);

  newNotes12.textContent = localStorage.getItem("task12");

  function updateNote12() {
    localStorage.setItem("task12", textarea12.value);
    newNotes12.textContent = textarea12.value;

    console.log(textarea12.value);
  }
}
save12();

function save13() {
  var textarea13 = document.querySelector("#notes13");
  var newNotes13 = document.getElementById("notes13");
  var save13 = document.querySelector("#btn13");

  save13.addEventListener("click", updateNote13);

  newNotes13.textContent = localStorage.getItem("task13");

  function updateNote13() {
    localStorage.setItem("task13", textarea13.value);
    newNotes13.textContent = textarea13.value;

    console.log(textarea13.value);
  }
}
save13();

function save13() {
  var textarea13 = document.querySelector("#notes13");
  var newNotes13 = document.getElementById("notes13");
  var save13 = document.querySelector("#btn13");

  save13.addEventListener("click", updateNote13);

  newNotes13.textContent = localStorage.getItem("task13");

  function updateNote13() {
    localStorage.setItem("task13", textarea13.value);
    newNotes13.textContent = textarea13.value;

    console.log(textarea13.value);
  }
}
save13();

function save14() {
  var textarea14 = document.querySelector("#notes14");
  var newNotes14 = document.getElementById("notes14");
  var save14 = document.querySelector("#btn14");

  save14.addEventListener("click", updateNote14);

  newNotes14.textContent = localStorage.getItem("task14");

  function updateNote14() {
    localStorage.setItem("task14", textarea14.value);
    newNotes14.textContent = textarea14.value;

    console.log(textarea14.value);
  }
}
save14();

function save15() {
  var textarea15 = document.querySelector("#notes15");
  var newNotes15 = document.getElementById("notes15");
  var save15 = document.querySelector("#btn15");

  save15.addEventListener("click", updateNote15);

  newNotes15.textContent = localStorage.getItem("task15");

  function updateNote15() {
    localStorage.setItem("task15", textarea15.value);
    newNotes15.textContent = textarea15.value;

    console.log(textarea15.value);
  }
}
save15();

function save16() {
  var textarea16 = document.querySelector("#notes16");
  var newNotes16 = document.getElementById("notes16");
  var save16 = document.querySelector("#btn16");

  save16.addEventListener("click", updateNote16);

  newNotes16.textContent = localStorage.getItem("task16");

  function updateNote16() {
    localStorage.setItem("task16", textarea16.value);
    newNotes16.textContent = textarea16.value;

    console.log(textarea16.value);
  }
}
save16();

function save17() {
  var textarea17 = document.querySelector("#notes17");
  var newNotes17 = document.getElementById("notes17");
  var save17 = document.querySelector("#btn17");

  save17.addEventListener("click", updateNote17);

  newNotes17.textContent = localStorage.getItem("task17");

  function updateNote17() {
    localStorage.setItem("task17", textarea17.value);
    newNotes17.textContent = textarea17.value;

    console.log(textarea17.value);
  }
}
save17();
