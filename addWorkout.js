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
  console.log(localStorage.getItem("menu"));
  console.log(localStorage.getItem("weight"));  
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
function getDietInfo() {
  console.log(localStorage.getItem("menu_breakfast"));
  console.log(localStorage.getItem("weight_breakfast"));
  console.log(localStorage.getItem("menu_lunch"));
  console.log(localStorage.getItem("weight_lunch"));
  console.log(localStorage.getItem("menu_dinner"));
  console.log(localStorage.getItem("weight_dinner"));
}
function getDietInfo() {
  console.log("Breakfast Menu: " + localStorage.getItem("menu_breakfast"));
  console.log("Breakfast Weight: " + localStorage.getItem("weight_breakfast"));
  console.log("Lunch Menu: " + localStorage.getItem("menu_lunch"));
  console.log("Lunch Weight: " + localStorage.getItem("weight_lunch"));
  console.log("Dinner Menu: " + localStorage.getItem("menu_dinner"));
  console.log("Dinner Weight: " + localStorage.getItem("weight_dinner"));    
}