import { selector } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { filtroDeEventos, listaDeEventos } from "../atoms";

export const listaDeEventosState = selector({
  key: 'listaDeEventosState',
  get: ({get}) => {
    const todosEventos = get(listaDeEventos);
    const filtro = get(filtroDeEventos);

    const eventos = todosEventos.filter(evento => {
      if (!filtro.data) {
        return true
      } else {
        const passouNoTeste = filtro.data?.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10);
        return passouNoTeste;
      }
    })

    /* Essa lógica aqui abaixo é uma vergonha mas ainda vou pensa em uma forma melhor de resolver ai refatoro. */
    let eventos2 = eventos
    
    if(filtro.status !== 'ambos'){

      if(filtro.status === 'completos'){
       eventos2 = eventos2.filter( evento => evento.completo === true)
      } 

      if(filtro.status === 'incompletos'){
        eventos2 = eventos2.filter( evento => evento.completo === false)
      } 
    }
    return eventos2
  }
})

export const eventosAsync = selector({
  key: 'eventosAsync',
  get: async () => {
    const respostaHttp = await fetch('http://localhost:8080/eventos')
    const respostaJSON: IEvento[] = await respostaHttp.json()

    return respostaJSON.map( evento => ({
      ...evento,
      inicio: new Date(evento.inicio),
      fim: new Date(evento.fim)
    }))
  }
})