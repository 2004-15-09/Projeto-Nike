let body = document.querySelector("body");
let tenis = document.querySelector(".imagem-tenis");
// document = html
// querySelector = selecionar / pegar o elemento

function mudarVisual(cor, imagem) {
    
    body.style.background = cor
    tenis.src = imagem
}