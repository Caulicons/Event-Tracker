import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEvento } from "../interfaces/IFiltroDeEvento";
import { eventosAsync } from "./selectores";

export const listaDeEventos = atom<IEvento[]>({
    key: 'listaDeEventos',
    default: eventosAsync
})

export const filtroDeEventos = atom<IFiltroDeEvento>({
    key: 'filtroDeEvento', 
    default: {}
})