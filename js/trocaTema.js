const trocaTema = document.querySelector(".trocaTema");
var light = document.getElementsByClassName('light');

trocaTema.addEventListener("click", function(){
    for( var i = 0; i < light.length; i++){
        document.getElementsByClassName('light')[i].classList.toggle("dark");
    }
    var className = document.body.className;
    if(className == "light") {
        this.textContent = "Light";
    }
    else {
        this.textContent = "Dark";
    }
})