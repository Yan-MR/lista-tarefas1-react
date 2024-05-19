import React, { useState } from 'react';
import './App.css';

function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');
    }
  };

  const removerTarefa = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    setTarefas(novasTarefas);
  };

  const pressEnter = (e) => {
    if (e.key === 'Enter') {
      adicionarTarefa();
    }
  };

  return (
    <div className="lista-de-tarefas">
      <h2>Lista de Tarefas</h2>
      <div className="input-section">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          onKeyPress={pressEnter}
          placeholder="Adicione uma nova tarefa"
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa}{' '}
            <button onClick={() => removerTarefa(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;