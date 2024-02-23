function carregar() {
    var video = document.getElementById("fundoDivPrincipal")
    video.playbackRate = 0.7;
}

function ibi() {
    var texto = document.getElementById("easterEgg");
    var n1 = 0;

    while (n1 !== 3) {
        n1++;
    }

    if (n1 === 3) {
        texto.innerHTML = "IBIIIII";
    }

}
