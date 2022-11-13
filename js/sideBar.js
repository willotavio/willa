const botaoSideBar = document.querySelector(".botaoSideBar");
botaoSideBar.onclick = function(event){
  if (event.target = botaoSideBar && botaoSideBar.classList.contains('sideBarFechada')){
    document.getElementById("conteudoSideBar").style.width = "15rem";
    document.getElementById("btnSideBar").classList.remove("sideBarFechada");
    document.getElementById("btnSideBar").classList.add("sideBarAberta");
  }
  else if (event.target = botaoSideBar && botaoSideBar.classList.contains('sideBarAberta')){
    document.getElementById("conteudoSideBar").style.width = "0";
    document.getElementById("btnSideBar").classList.remove("sideBarAberta");
    document.getElementById("btnSideBar").classList.add("sideBarFechada");
  }
}
const conteudo = document.getElementById("divPerfil");
conteudo.onclick = function(event){
  if (event.target = conteudo && botaoSideBar.classList.contains('sideBarAberta')){
    document.getElementById("conteudoSideBar").style.width = "0";
    document.getElementById("btnSideBar").classList.remove("sideBarAberta");
    document.getElementById("btnSideBar").classList.add("sideBarFechada");
  }
}