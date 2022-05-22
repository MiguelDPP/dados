var dadosplayer1 = document.getElementsByClassName("dadoplayer1");
var dadosplayer2 = document.getElementsByClassName("dadoplayer2");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var modal = document.getElementsByClassName('modal-f')[0];
var modalwindow = modal.children[0];
var modalConten = modalwindow.children[1].children[0];
var puntosplayer1 = document.getElementById("puntosPy1");
var puntosplayer2 = document.getElementById("puntosPy2");
var puntajePlayer1 = 0;
var puntajePlayer2 = 0;
var puntosGlobalesPy1 = 0;
var puntosGlobalesPy2 = 0;
var intervalo;
var detener = document.getElementById("reset");

detener.addEventListener("click", () => {
    puntajePlayer1 = 0;
    puntajePlayer2 = 0;
    puntosplayer1.innerHTML = puntajePlayer1 + " Puntos";
    puntosplayer2.innerHTML = puntajePlayer2 + " Puntos";
})

button1.addEventListener("click", () => {
    TirarDados(1);
    setTimeout(() => {
        clearInterval(intervalo)
        button2.removeAttribute("disabled");
        setTimeout(() => {
            if (puntosGlobalesPy2 != 0) {
                elegirGanador();
            }
        }, 300);
    }, 600);

});

button2.addEventListener("click", () => {
    TirarDados(2);
    setTimeout(() => {
        clearInterval(intervalo)
        button1.removeAttribute("disabled");
        setTimeout(() => {
            if (puntosGlobalesPy1 != 0) {
                elegirGanador();
            }
        }, 300);

    }, 600);
})


function TirarDados(jugador) {
    intervalo = setInterval(() => {
        var valordado1 = generarRamdom(1, 6);
        var valordado2 = generarRamdom(1, 6);
        if (jugador == 1) {
            puntosGlobalesPy1 = parseInt(valordado1) + parseInt(valordado2);
            dadosplayer1[0].style.backgroundImage = 'url("img/' + valordado1 + '.svg")';
            dadosplayer1[0].style.backgroundSize = "cover";
            dadosplayer1[1].style.backgroundImage = 'url("img/' + valordado2 + '.svg")';
            dadosplayer1[1].style.backgroundSize = "cover";
            button2.setAttribute("disabled", "");
        } else {
            puntosGlobalesPy2 = parseInt(valordado1) + parseInt(valordado2);
            dadosplayer2[0].style.backgroundImage = "url(img/" + valordado1 + ".svg)";
            dadosplayer1[0].style.backgroundSize = "cover";
            dadosplayer2[1].style.backgroundImage = "url(img/" + valordado2 + ".svg)";
            dadosplayer1[1].style.backgroundSize = "cover";
            button1.setAttribute("disabled", "");
        }
    }, 100)
}

function elegirGanador() {
    if (puntosGlobalesPy1 > puntosGlobalesPy2) {
        modalConten.innerHTML = "Puntuación jugador1 es: " + puntosGlobalesPy1 + "<br>Puntuación jugador2 es: " + puntosGlobalesPy2 + "<br>El ganador es el jugador 1";
        OpenModal();
        puntajePlayer1++;
        puntosplayer1.innerHTML = puntajePlayer1 + " Puntos";
    } else if (puntosGlobalesPy1 < puntosGlobalesPy2) {
        modalConten.innerHTML = "Puntuación jugador1 es: " + puntosGlobalesPy1 + "<br>Puntuación jugador2 es: " + puntosGlobalesPy2 + "<br>El ganador es el jugador 2";
        OpenModal();
        puntajePlayer2++;
        puntosplayer2.innerHTML = puntajePlayer2 + " Puntos";
    } else {
        modalConten.innerHTML = "Puntuación jugador1 es: " + puntosGlobalesPy1 + "<br>Puntuación jugador2 es: " + puntosGlobalesPy2 + "<br>¡Es un empate!";
        OpenModal();
        puntajePlayer1++;
        puntajePlayer2++;
        puntosplayer1.innerHTML = puntajePlayer1 + " Puntos";
        puntosplayer2.innerHTML = puntajePlayer2 + " Puntos";
    }
}

function generarRamdom(lim1, lim2) {
    return (Math.random() * (lim2 - lim1) + lim1).toFixed();
}

function OpenModal() {
    setTimeout(() => {
        modal.className += " active";
    }, 300)
}

function closeModal() {
    modalwindow.children[0].style.display = "none";
    modalwindow.children[1].style.display = "none";
    modalwindow.children[2].style.display = "none";
    modalwindow.style.animationName = "salida";
    modalwindow.style.animationDuration = ".3s";
    setTimeout(() => {
        modal.className = 'modal-f';
        modalwindow.removeAttribute("style");
        modalwindow.children[0].removeAttribute("style");
        modalwindow.children[1].removeAttribute("style");
        modalwindow.children[2].removeAttribute("style");
        for (var i = 0; i < dadosplayer1.length; i++) {
            dadosplayer1[i].removeAttribute("style");
            dadosplayer2[i].removeAttribute("style");
        }
        puntosGlobalesPy1 = 0;
        puntosGlobalesPy2 = 0;
    }, 300)
}