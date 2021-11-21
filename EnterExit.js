let user_in = 0; //입장전 상태
function saveUser() {
  localStorage.setItem("user_in", JSON.stringify(user_in));
  //console.log("save " + user_in);
}
function loadLoginStatus() {
  let login = localStorage.getItem("user_in");
  user_in = JSON.parse(login);
  //console.log("load " + user_in);
}

function ChangeMaintoExit() {
  document.getElementById("beforeEnter").style.display = "none";
  document.getElementById("afterEnter").style.display = "block";
  document.getElementById("personalroutineB").style.visibility = "visible";
  user_in = 1; //입장하지 않은상태
  saveUser();
  //console.log(user_in);
}
function ChangeMaintoEnter() {
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
