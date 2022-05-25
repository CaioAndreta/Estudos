const ListaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio)

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }

    else {
        console.log('Elemento ou seletor inválido!')
    }
}

for (let contador = 0; contador < ListaDeTeclas.length; contador++) {

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function() {
        console.log(idAudio)
        tocaSom(idAudio) 
    }

    tecla.onkeydown = function (evento) {

        console.log(evento)

        if(evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
