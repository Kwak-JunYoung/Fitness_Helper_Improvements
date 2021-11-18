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

    var old = new Array();

    localStorage.setItem("time", selectedTime);
    // 시간별로 메뉴추가해야

    if (selectedTime === "breakfast"){
        if (typeof localStorage.getItem("breakfast_menu") === 'null'){
            localStorage.setItem("breakfast_menu", JSON.stringify([input]));
            console.log(localStorage.getItem("breakfast_menu"));
        }
        else{
            localStorage.setItem("breakfast_menu", JSON.parse(localStorage.getItem("breakfast_menu")).push(input));
        }
        console.log(localStorage.getItem("breakfast_menu"));
    }

    if (selectedTime === "lunch"){
        var old = localStorage.getItem("menu_lunch");
        if (old === null) old = [input];
        else old.push(input);
        localStorage.setItem("menu_lunch", old);
    
        old = new Array();
    
        var old = localStorage.getItem("weight_lunch");
        if (old === null) old = [input2];
        else old.push(input2);
        localStorage.setItem("weight_lunch", old)
    }

    if (selectedTime === "dinner"){
        var old = localStorage.getItem("menu_dinner");
        if (old === null) old = [input];
        else old.push(input);
        localStorage.setItem("menu_dinner", old);
    
        old = new Array();
    
        var old = localStorage.getItem("weight_dinner");
        if (old === null) old = [input2];
        else old.push(input2);
        localStorage.setItem("weight_dinner", old)
    }    
    // window.close("diet.html");
}