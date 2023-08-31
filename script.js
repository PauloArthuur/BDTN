
function carregar() {
    var msg = document.getElementById("msg")
    var imagem = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours("")
    var minuto = data.getMinutes()
    var texto = document.getElementById("texto")


    msg.innerHTML = `Agora são ${hora}:${minuto}`
    if (hora >= 0 && hora < 12) {
        imagem.src = "img/manha.jpg"
        document.body.style.backgroundColor = "#b79670"
        texto.innerHTML = "<strong>Bom dia"
        texto.style.color = "#b79670"


    } else if (hora >= 12 && hora < 18) {
        imagem.src = "img/tarde.jpg"
        document.body.style.backgroundColor = "#9da8b7"
        texto.innerHTML = "<strong>Boa tarde"
        texto.style.color = "#9da8b7"
    } else {
        imagem.src = "img/noite.jpg"
        document.body.style.backgroundColor = "#0e181c"
        document.getElementById("section").style.boxShadow = "3px 3px 8px #f0f8ffad "
        texto.innerHTML = "<strong>Boa noite"
        texto.style.color = "#000111"
    }
}
