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
  var clickshow1 = document.getElementById("restpane1");
  var midpane = document.getElementById("midpane");
  var rightpane = document.getElementById("rightpane");
  if (clickshow.style.display === "block") {
    clickshow.style.display = "none";
  }
  if (clickshow1.style.display === "block") {
    clickshow1.style.display = "none";
  }
  if (midpane.style.display === "none") {
    midpane.style.display = "block";
  }
  if (rightpane.style.display === "none") {
    rightpane.style.display = "block";
  }
}

function diet() {
  var clickshow = document.getElementById("restpane1");
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
function showdietinsert() {
  var clickshow = document.getElementById("restpane2");
  var clickdelete = document.getElementById("restpane1");
  if (clickshow.style.display === "none") {
    clickshow.style.display = "block";
  }
  if (clickdelete.style.display === "block") {
    clickdelete.style.display = "none";
  }
}
function returndiet() {
  var clickshow = document.getElementById("restpane1");
  var clickdelete = document.getElementById("restpane2");
  if (clickshow.style.display === "none") {
    clickshow.style.display = "block";
  }
  if (clickdelete.style.display === "block") {
    clickdelete.style.display = "none";
  }
}
