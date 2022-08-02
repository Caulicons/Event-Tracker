import React from 'react';
import { IEvento } from '../../../interfaces/IEvento';
import useAtualizaEvento from '../../../state/hook/useAtualizarEventos';

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {

  const atualizaEvento = useAtualizaEvento()

  const AlterarStatusDoEvento = () => {
    const eventoAtualizado = {...evento}
    eventoAtualizado.completo = !evento.completo

    atualizaEvento(eventoAtualizado)
  }

  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  return (<i className={estilos.join(' ')} onClick={AlterarStatusDoEvento}></i>)
}

export default EventoCheckbox