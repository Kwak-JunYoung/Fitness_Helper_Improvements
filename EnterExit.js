let user_in = 0; //입장전 상태
let user_num = 0;
function saveUser() {
  localStorage.setItem("user_num", JSON.stringify(user_num));
  localStorage.setItem("user_in", JSON.stringify(user_in));
  //console.log("save " + user_num);
}
function loadLoginStatus() {
  let login = localStorage.getItem("user_in");
  let num = localStorage.getItem("user_num");
  user_in = JSON.parse(login);
  user_num = JSON.parse(num);
  if (user_num === null) user_num = 0;
  //console.log("load " + user_num);

  //console.log("load " + user_in);
}

function ChangeMaintoExit() {
  loadLoginStatus();
  user_num += 1;

  document.getElementById("usernumber").innerText = user_num + "명";

  document.getElementById("beforeEnter").style.display = "none";
  document.getElementById("afterEnter").style.display = "block";
  document.getElementById("personalroutineB").style.visibility = "visible";

  user_in = 1; //입장하지 않은상태
  saveUser();

  //console.log(user_in);
}
function ChangeMaintoEnter() {
  loadLoginStatus();
  user_num -= 1;

  document.getElementById("usernumber").innerText = user_num + "명";

  document.getElementById("beforeEnter").style.display = "block";
  document.getElementById("afterEnter").style.display = "none";
  document.getElementById("personalroutineB").style.visibility = "hidden";

  user_in = 0; //입장한 상태
  saveUser();
  //console.log(user_in);
}
function checkEntering() {
  loadLoginStatus();
  console.log(user_in);
  if (user_in === 0) {
    document.getElementById("personalroutineB").style.visibility = "hidden";
  }
}
window.addEventListener("load", () => {
  loadLoginStatus();

  document.getElementById("usernumber").innerText = user_num + "명";
  if (user_in === 1) {
    document.getElementById("beforeEnter").style.display = "none";
    document.getElementById("afterEnter").style.display = "block";
    document.getElementById("personalroutineB").style.visibility = "visible";
  } else {
    document.getElementById("beforeEnter").style.display = "block";
    document.getElementById("afterEnter").style.display = "none";
    document.getElementById("personalroutineB").style.visibility = "hidden";
  }
});
