function onDisplayWorkout() {
  var clickshow = document.getElementById("clickshow");
  var addButtons = document.getElementById("addButtons");

  if (clickshow.style.display === "none") {
    clickshow.style.display = "block";
  }
  if (addButtons.style.display === "block") {
    addButtons.style.display = "none";
  }
}
function ReturnNormal() {
  var clickshow = document.getElementById("clickshow");
  if (clickshow.style.display === "block") {
    clickshow.style.display = "none";
  }
  if (addButtons.style.display === "none") {
    addButtons.style.display = "block";
  }
}
