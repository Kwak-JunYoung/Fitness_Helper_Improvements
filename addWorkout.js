function onDisplayWorkout() {
  var clickshow = document.getElementById("clickshow");
  var midpane = document.getElementById("midpane");
  var rightpane = document.getElementById("rightpane");
  if (clickshow.style.display === "none") {
    clickshow.style.display = "block";
  }
  if (midpane.style.display === "block") {
    midpane.style.display = "none";
  }
  if (rightpane.style.display === "block") {
    rightpane.style.display = "none";
  }
}
function ReturnNormal() {
  var clickshow = document.getElementById("clickshow");
  var midpane = document.getElementById("midpane");
  var rightpane = document.getElementById("rightpane");
  if (clickshow.style.display === "block") {
    clickshow.style.display = "none";
  }
  if (midpane.style.display === "none") {
    midpane.style.display = "block";
  }
  if (rightpane.style.display === "none") {
    rightpane.style.display = "block";
  }
}
