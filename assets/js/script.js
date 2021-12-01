var today = new Date();
console.log(today);

var date = moment().format("MMMM Do YYYY, h:mm:ss a");

document.getElementById("currentDT").textContent = date;

function timeColor() {
  var currentHr = moment().format("H");
  $(".time").each(function () {
    var timeBlock = $(this);
    var actualTime = timeBlock.attr("id");
    var container = timeBlock.parent();

    if (actualTime === currentHr) {
      container.addClass("present");
    }
  });
}
timeColor();
