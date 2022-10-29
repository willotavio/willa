const trocaTema = document.querySelector(".trocaTema");

var light = document.getElementsByClassName('light');

const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
    for( var i = 0; i < light.length; i++){
    document.getElementsByClassName('light')[i].classList.add("dark");
    }
  }

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

    let theme = "light";
  if (document.body.classList.contains("dark")) {
    theme = "dark";
}
  localStorage.setItem("theme", theme);
})