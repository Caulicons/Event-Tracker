import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import obterID from "../../utils/obterId"
import { listaDeEventos } from "../atoms"

const useCriarNovoEvento = () => {

  const setListaDeEventos = useSetRecoilState(listaDeEventos)

  return (evento: IEvento) => {
    return setListaDeEventos(listaAntiga => {
      evento.id = obterID()

      if(evento.inicio < new Date()) {
        throw new Error('Não é muito útil agendar algo que já passou.')
      } 
        return [...listaAntiga, evento]
    })
  }
}

export default useCriarNovoEvento;