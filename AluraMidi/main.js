function tocaSom(idElementoAudio) {
  const elemento = document.querySelector(idElementoAudio)
  if (elemento != null && elemento.localName === 'audio') {
    elemento.play()
  } else {
    alert('Elemento não encontrado ou seletor invalido')
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla')

/* W H I L E */
/*
let contador = 0
while (contador < listaDeTeclas.length) {
  const tecla = listaDeTeclas[contador]
  const instrumento = tecla.classList[1]
  const idAudio = `#som_${instrumento}`

  tecla.onclick = function () {
    tocaSom(idAudio)
  }
  contador = contador + 1

  console.log(contador)
}
*/

/* F O R */
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador]
  const instrumento = tecla.classList[1]
  const idAudio = `#som_${instrumento}`

  tecla.onclick = function () {
    tocaSom(idAudio)
  }
  //console.log(contador)

  tecla.onkeydown = evento => {
    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add('ativa')
    }
  }
  tecla.onkeyup = () => {
    tecla.classList.remove('ativa')
  }
}
