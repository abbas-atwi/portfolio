const menuBuguer = document.querySelector(".hamburguer")
menuBuguer.addEventListener("click", (e)=>{
  document.querySelector(".container").classList.toggle("show-menu")
})