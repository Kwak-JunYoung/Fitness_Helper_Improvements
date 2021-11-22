function storeDiet() {
  var input = document.getElementById("menu_breakfast").value;
  var input2 = document.getElementById("weight_breakfast").value;
  var input = document.getElementById("menu_lunch").value;
  var input2 = document.getElementById("weight_lunch").value;
  var input = document.getElementById("menu_dinner").value;
  var input2 = document.getElementById("weight_dinner").value;

  var dummy = document.querySelectorAll('input[name="meal"]');
  let selectedTime;

  for (let b of dummy) {
    if (b.checked) {
      selectedTime = b.value;
      break;
    }
  }

  var old = "";

  localStorage.setItem("time", selectedTime);
  // 시간별로 메뉴추가해야

  var menuStorage = localStorage.getItem("menu");
  if (menuStorage === null) old = "";
  localStorage.setItem("menu", input + old);

  old = "";

  var weightStorage = localStorage.getItem("weight");
  if (weightStorage === null) old = "";
  localStorage.setItem("weight", input2 + old);
}