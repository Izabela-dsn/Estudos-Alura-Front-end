export const deletarTarefa = (atualiza, id) => {
  const index = id
  const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))
  tarefasCadastradas.splice(index, 1)
  localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))
  atualiza()

  /*
  const botaoDeleta = evento.target
  const excluirTarefa = botaoDeleta.parentElement
  excluirTarefa.remove()
  */
}

/*removendo a tarefa - componente*/
export const BotaoDeleta = (atualiza, id) => {
  const botaoDeleta = document.createElement('button')

  botaoDeleta.innerText = 'Deletar' /* add texto no botão */

  botaoDeleta.addEventListener('click', () => deletarTarefa(atualiza, id))
  return botaoDeleta
}
