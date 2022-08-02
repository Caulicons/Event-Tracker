import { useSetRecoilState } from "recoil"
import { listaDeEventos } from "../atoms"
import { IEvento } from "../../interfaces/IEvento"

const useDeletarTarefa = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventos)
  return (evento: IEvento) => {

    setListaDeEventos(listaAntiga =>
      listaAntiga.filter(evt => evt.id !== evento.id))
  }
}

export default useDeletarTarefa;