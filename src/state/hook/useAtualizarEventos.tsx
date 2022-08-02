import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { listaDeEventos } from "../atoms"

const useAtualizaEvento = () => {

   const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventos)

   return (evento: IEvento) => 
    setListaDeEventos(listaAnterior => {
      const indice = listaAnterior.findIndex(evt => evt.id === evento.id)
      return [...listaAnterior.slice(0, indice), evento, ...listaAnterior.slice(indice + 1)]
    })
}

export default useAtualizaEvento