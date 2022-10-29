const trocaTema = document.querySelector(".trocaTema");
/* let light = document.querySelector('.light'); */

trocaTema.addEventListener("click", function(){
    document.getElementsByClassName('light')[0].classList.toggle("dark");
    document.getElementsByClassName('light')[1].classList.toggle("dark");
    document.getElementsByClassName('light')[2].classList.toggle("dark");
})