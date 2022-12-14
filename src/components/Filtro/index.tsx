import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { IFiltroDeEvento } from '../../interfaces/IFiltroDeEvento';
import {filtroDeEventos } from '../../state/atoms';
import style from './Filtro.module.scss';

const Filtro: React.FC = () => {
  
  const [data, setData] = useState('')
  const [status, setStatus] = useState('')
  const setFiltro = useSetRecoilState<IFiltroDeEvento>(filtroDeEventos)
  
  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    const filtro: IFiltroDeEvento = {}

    if(!data) {
      filtro.data = null 
    } else {
      filtro.data = new Date(data)
    }

    if(!status){
      filtro.status = 'ambos'
    } else {
      filtro.status = status
    }
    
    setFiltro(filtro)
  }

  return (<form className={style.Filtro} onSubmit={submeterForm}>
    <h3 className={style.titulo}>Filtrar por data</h3>
    <input 
      type="date" 
      name="data"
      className={style.input}
      onChange={evento => setData(evento.target.value)} 
      placeholder="Por data"
      value={data} />

    <select className={style.input} name="status" id="status" value={status} onChange={event => setStatus(event.target.value)}>
      <option value="ambos">Todos</option>
      <option value="completos">Apenas Completo</option>
      <option value="incompletos">Apenas Incompleto</option>
    </select>

    <button className={style.botao}>
      Filtrar
    </button>

  </form>)
}

export default Filtro