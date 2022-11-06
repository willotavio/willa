const botaoSideBar = document.querySelector(".botaoSideBar");

botaoSideBar.addEventListener("click", function(){
  if(botaoSideBar.classList.contains('sideBarFechada')){
    document.getElementById("conteudoSideBar").style.width = "15rem";
    document.getElementById("btnSideBar").classList.remove("sideBarFechada");
    document.getElementById("btnSideBar").classList.add("sideBarAberta");  
  }
  else{
    document.getElementById("conteudoSideBar").style.width = "0";
    document.getElementById("btnSideBar").classList.remove("sideBarAberta");
    document.getElementById("btnSideBar").classList.add("sideBarFechada");  
  }
})