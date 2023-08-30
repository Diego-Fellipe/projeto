function toggleMode(){
const html = document.documentElement


const img = document.querySelector("#profile img")


if(html.classList.contains('light')){
//se tiver light mode, adicionar imagem light
img.setAttribute("src", "./assets/assets/avatar-light.png")
  html.classList.remove('light')
} else{
img.setAttribute("src", "./assets/assets/avatar.png")
//se tiver sem light mode, manter a img
  html.classList.toggle('light')
}

}