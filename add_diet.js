function storeDiet() {
    // localStorage.clear();
    var input = document.getElementById("menu").value;
    var input2 = document.getElementById("weight").value;
    var dummy = document.querySelectorAll('input[name="meal"]');
    let selectedTime;
    for (let b of dummy) {
        if(b.checked){
            selectedTime = b.value;
            break;
        }
    }
    
    if (localStorage.getItem("DietList") === null) {
      var dietGraph = ('{"아침":' + '[]' + ',"점심":' + '[]' + ',"저녁":' + '[]' + '}')
      localStorage.setItem("DietList", dietGraph)
    }

    var old = JSON.parse(localStorage.getItem("DietList"))
    var text = JSON.parse(('{"메뉴":"' + input + '","무게":' + input2 + '}'));

    old[selectedTime].push(text);
    var strold = JSON.stringify(old)
    localStorage.setItem("DietList", strold)
    // window.close("diet.html");
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
  var storage = JSON.parse(localStorage.getItem("DietList"));
  var breakfastList = storage["아침"];
  var lunchList = storage["점심"];
  var dinnerList = storage["저녁"];

  var breakfastText = '';
  var lunchText = '';
  var dinnerText = '';

  breakfastList.forEach(element =>{ 
    breakfastText += element["메뉴"];
    breakfastText += '/';
    breakfastText += element["무게"];
    breakfastText += '(g)'
    breakfastText += '\n';
  });
  document.getElementById("breakfastID").innerHTML = breakfastText;

  lunchList.forEach(element =>{ 
    lunchText += element["메뉴"];
    lunchText += '/';
    lunchText += element["무게"];
    lunchText += '(g)'
    lunchText += '\n';
  });
  document.getElementById("lunchID").innerHTML = lunchText;

  dinnerList.forEach(element =>{ 
    dinnerText += element["메뉴"];
    dinnerText += '/';
    dinnerText += element["무게"];
    dinnerText += '(g)'
    dinnerText += '\n';
  });
  document.getElementById("dinnerID").innerHTML = dinnerText;

}

function removeAll() {
  localStorage.clear();
}