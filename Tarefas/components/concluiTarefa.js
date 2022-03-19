/* concluindo tarefa */
export const concluirTarefa = (atualiza, id) => {
  /* usando o local storage */
  const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))
  tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida
  localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))
  atualiza()

  /*
  /em quem eu cliquei /
  const botaoConclui = event.target
  /*console.log(botaoConclui)/

  const tarefaCompleta = botaoConclui.parentElement
  /console.log(tarefaCompleta) 
  tarefaCompleta.classList.toggle('done')
  */
}

/* criando botão de concluir - componente*/
export const BotaoConclui = (atualiza, id) => {
  const botaoConclui = document.createElement('button')
  botaoConclui.classList.add('check-button') /* add classe*/
  botaoConclui.innerText = 'Concluir' /* add texto no botão */

  botaoConclui.addEventListener('click', () => concluirTarefa(atualiza, id))
  return botaoConclui
}
