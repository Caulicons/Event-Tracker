import { useRecoilValue } from "recoil"
import { filtroDeEventos } from "../atoms"
import useListaDeEventos from "./useListaDeEventos"

const useEventosFiltrados = () => {

    const todosEventos = useListaDeEventos()
    const filtro = useRecoilValue(filtroDeEventos)
  
    const eventos = todosEventos.filter(evento => {
      if (!filtro.data) {
        return true
      } else {
        const passouNoTeste = filtro.data?.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10);
        return passouNoTeste;
      }
    })

    return eventos
  }


export default useEventosFiltrados