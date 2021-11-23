window.addEventListener("load", () => {
    document.querySelectorAll(".pixel").forEach((pixel) => {
      /*달력에서 클릭된 날짜의 id(ex. 2021-11-11)을 가져와서 나머지 파트의 현재 날짜로 설정*/
      pixel.addEventListener("click", () => {
        let select_date = pixel.id;
        document.getElementById("selected_date").innerHTML = select_date;
        document.getElementById("selected_date_workout").innerHTML = select_date;
        document.getElementById("selected_date_diet").innerHTML = select_date;
        document.getElementById("add_diet_date").innerHTML = select_date;

        //<train 표시>

        //0. 표시 없게

        let p= document.querySelector("#train_goal");
        document.querySelectorAll(".part").forEach(c => {
          p.removeChild(c);
        });
        

        //1. 날짜 찾기
        let train_l= localStorage.getItem("train");
        if(!train_l) return;

        let all_train= JSON.parse(train_l);
        var n= all_train.length;
        let day_train= [];
        var n2=0;

        for(i=0; i< n; i++){
          if(select_date in all_train[i]){
            day_train= all_train[i][select_date];
            n2= day_train.length;
            break;
          }
        }

        //2. 붙이기
        //큰 div
        let b_div= document.createElement("div");
        b_div.className="part";
        for(i=0; i< n2; i++){
          
          //label 만들기
			    let label = document.createElement("label");
			    label.className = "switch";

			    //span 만들기
			    let span = document.createElement("span");
          span.className = "slider round";

          let span_c1= document.createElement("span");
			    span_c1.textContent = day_train[i]["운동 이름"] + " ";

          //checkbox 만들기
          let check= document.createElement("input");
          check.type= "checkbox";
			    span.appendChild(span_c1);
          span.appendChild(check);
          label.appendChild(span);


          //div 만들기
          let div= document.createElement("div");
          let str="";
          let j;
          let arrs= day_train[i]["상세 부위"].length;
          for(j=0; j<arrs; j++){
            str+= day_train[i]["상세 부위"][j];
            if(j!== (arrs-1))str+= ", ";
          }
          str= day_train[i]["운동 구분"]+ "/ " + str + "/ " + day_train[i]["횟수"] + "times/ " + day_train[i]["무게"]+ "g";
          div.textContent= str;
          label.appendChild(div);

          let br= document.createElement("br");
          let br2= document.createElement("br");
          
          b_div.appendChild(label);
          b_div.appendChild(br);
          b_div.appendChild(br2);
        }

        let list = document.querySelector("#train_goal");
			  list.appendChild(b_div);
        
      });
    });
  });