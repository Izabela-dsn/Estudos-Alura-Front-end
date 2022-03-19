import { carregaTarefa } from './carregaTarefas.js'
import { BotaoConclui } from './concluiTarefa.js'
import { BotaoDeleta } from './deletaTarefa.js'

export const criarTarefa = evento => {
  /* evitando comportamento do form de enviar dado pra algum lugar*/
  evento.preventDefault()

  /* tendo acesso ao local storage */
  /* caso não tenha nada coloca um []*/
  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

  /*capturando valor do input */
  const input = document.querySelector('[data-form-input]')
  const valor = input.value

  /* add data e hora na tarefa */
  const calendario = document.querySelector('[data-form-date]')
  const data = moment(calendario.value)
  const horario = data.format('HH:mm')
  const dataFormatada = data.format('DD/MM/YYYY')

  /* conclusão da tarefa*/
  const concluida = false

  /* guardando dados */
  const dados = {
    valor,
    dataFormatada,
    horario,
    concluida
  }

  /*Atualizando local storage e colocando no local storage */
  const tarefaAtualizadas = [...tarefas, dados]
  localStorage.setItem('tarefas', JSON.stringify(tarefaAtualizadas))

  input.value = ' '

  carregaTarefa()
}

export const criarTarefaNoHtml = ({ valor, horario, concluida }, id) => {
  const tarefa = document.createElement('li')
  tarefa.classList.add('task')

  const conteudo = `<p class='content'>${horario} ${valor}</p>`
  /* verificando se a tarefa foi concluida */
  if (concluida) {
    tarefa.classList.add('done')
  }
  tarefa.classList.add('task')

  tarefa.innerHTML = conteudo

  tarefa.appendChild(BotaoConclui(carregaTarefa, id))
  tarefa.appendChild(BotaoDeleta(carregaTarefa, id))
  return tarefa
}
