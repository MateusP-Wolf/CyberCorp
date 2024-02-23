function carregar() {
    var video = document.getElementById("fundoDivPrincipal")
    video.playbackRate = 1;
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

function fecharDiv(id) {
    var div = document.getElementById(id);
    div.classList.add('fadeOut');
    setTimeout(function() { div.style.display = 'none'; }, 1000);
  }