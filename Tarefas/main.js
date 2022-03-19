import { carregaTarefa } from './components/carregaTarefas.js'
import { criarTarefa } from './components/criaTarefa.js'

const novaTarefa = document.querySelector('[data-form-button]')
novaTarefa.addEventListener('click', criarTarefa)
carregaTarefa()
