window.addEventListener("load", () => {
  document.querySelectorAll(".pixel").forEach((pixel) => {
    /*달력에서 클릭된 날짜의 id(ex. 2021-11-11)을 가져와서 나머지 파트의 현재 날짜로 설정*/
    pixel.addEventListener("click", () => {
      let select_date = pixel.id;
      document.getElementById("selected_date").innerHTML = select_date;
      document.getElementById("selected_date_workout").innerHTML = select_date;
      document.getElementById("selected_date_diet").innerHTML = select_date;
      document.getElementById("add_diet_date").innerHTML = select_date;
    });
  });
});
