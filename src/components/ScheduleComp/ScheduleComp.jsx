import React from 'react'
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './ScheduleComp.css'

let initialState = [
  {
    id: 1,
    descricao: 'Primeiro Atendimento',
  },
  {
    id: 2,
    descricao: 'Segundo Atendimento',
  },
];

const ScheduleComp = () => {
  const [agendamentos, setAgendamentos] = useState(initialState);

  function addConsulta(e) {
    e.preventDefault();

    const agendamento = {
      id: document.getElementById('id').value,
      descricao: document.getElementById('descricao').value,
    };
    agendamentos.push(agendamento);
    console.log(agendamento);
    setAgendamentos([...agendamentos, { ...agendamentos }]);
  };

  return (
    <>
      <div className='ScheduleComp'>
      <form className='row g-3'>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">Id</label>
          <input id="id" type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">Consulta</label>
          <input id="descricao" type="text" className="form-control" />
        </div>
        <hr />
        <div className="col-12">
          <button 
            className="btn btn-outline-secondary" 
            onClick={addConsulta}
          >
            Marcar Consulta
          </button>
        </div>
      </form>
        <div className="mt-3">
          {agendamentos.map(agend => (
            <div key={agend.id} className="card mb-2 shadow-sm">
              <div className="card-body">
                <p className="card-text">
                  {agend.id} - {agend.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ScheduleComp