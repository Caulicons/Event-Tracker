import { useSetRecoilState } from "recoil";
import { listaDeEventos } from "../atoms";
import { IEvento } from "../../interfaces/IEvento";
import localEvents from "../../utils/localEvents";

const useDeletarTarefa = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventos);
  return (evento: IEvento) => {
    localEvents.delete(evento);
    setListaDeEventos((listaAntiga) =>
      listaAntiga.filter((evt) => evt.id !== evento.id)
    );
  };
};

export default useDeletarTarefa;
