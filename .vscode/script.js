function toggleMode() {
  const html = document.documentElement
  //if (html.classList.contains('light')) {
  //  html.classList.remove('light')
  //} else {
  //  html.classList.add('light')
  //}
  html.classList.toggle("light")
  //pegar a tag img
  const img = document.querySelector("#profile img")
  //trocar a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/assets/avatar-light.png")
    img.setAttribute("alt", "Foto de uma roda gigante sob o sol e céu azul")
  } else {
    //se não tiver, manter imagem normal
    img.setAttribute("src", "./assets/assets/avatar_dark.png")
    img.setAttribute("alt", "Foto de uma roda gigante iluminada no escuro")
  }
}
