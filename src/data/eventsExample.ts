import { IEvento } from "../interfaces/IEvento";

const eventsExample: IEvento[] = [
  {
    descricao: "Estudar React",
    inicio: new Date("2022-08-01T09:00"),
    fim: new Date("2022-08-01T13:00"),
    completo: false,
    id: 101,
  },
  {
    descricao: "Estudar Recoil",
    inicio: new Date("2022-08-16T09:00"),
    fim: new Date("2022-08-16T11:00"),
    completo: false,
    id: 102,
  },
  {
    descricao: "Estudar React Native",
    inicio: new Date("2022-08-17T09:00"),
    fim: new Date("2022-08-17T13:00"),
    completo: false,
    id: 103,
  },
  {
    descricao: "Estudar TypeScript",
    inicio: new Date("2022-08-21T09:00"),
    fim: new Date("2022-08-21T11:00"),
    completo: false,
    id: 104,
  },
];

export default eventsExample;
