import { useRecoilValue } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import {listaDeEventosState} from "../selectores";

const useListaDeEventos = () => {

  return useRecoilValue<IEvento[]>(listaDeEventosState)
}

export default useListaDeEventos;

