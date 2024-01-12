import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import obterID from "../../utils/obterId";
import { listaDeEventos } from "../atoms";
import localEvents from "../../utils/localEvents";

const useCriarNovoEvento = () => {
  const setListaDeEventos = useSetRecoilState(listaDeEventos);

  return (evento: IEvento) => {
    if (evento.inicio < new Date()) {
      throw new Error("Não é muito útil agendar algo que já passou.");
    }
    return setListaDeEventos((listaAntiga) => {
      evento.id = obterID();
      localEvents.add(evento);
      return [...listaAntiga, evento];
    });
  };
};

export default useCriarNovoEvento;
