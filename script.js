let body = document.querySelector("body");
let tenis = document.querySelector(".imagem-tenis");
// document = html
// querySelector = selecionar / pegar o elemento

function mudarVisual(cor, imagem) {
    tenis.classList.add("troca-efeito")
    
    body.style.background = cor

    setTimeout(() => {
    tenis.src = imagem
    tenis.classList.remove("troca-efeito")
    }, 500);

}