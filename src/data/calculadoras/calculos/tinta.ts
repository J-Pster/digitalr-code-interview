import { Pergunta } from "src/app/types/Pergunta.type";

export const latasDeTinta: Pergunta[] = [
  {
    id: "nomeDoProjeto",
    validations: { required: true },
    titulo: "Qual o nome desse cômodo?",
    format: "text",
  },
  {
    id: "parede01",
    validations: { required: true },
    titulo: "Qual a área da parede 01 de 04?",
    format: "sumSquare",
  },
  {
    id: "parede02",
    validations: { required: true },
    titulo: "Qual a área da parede 02 de 04?",
    format: "sumSquare",
  },
  {
    id: "parede03",
    validations: { required: true },
    titulo: "Qual a área da parede 03 de 04?",
    format: "sumSquare",
  },
  {
    id: "parede04",
    validations: { required: true },
    titulo: "Qual a área da parede 04 de 04?",
    format: "sumSquare",
  },
  {
    id: "select01",
    validations: { required: true },
    titulo: "Quantas janelas/portas tem na parede 01?",
    format: "inSquareSelect",
  },
  {
    id: "select02",
    validations: { required: true },
    titulo: "Quantas janelas/portas tem na parede 02?",
    format: "inSquareSelect",
  },
  {
    id: "select03",
    validations: { required: true },
    titulo: "Quantas janelas/portas tem na parede 03?",
    format: "inSquareSelect",
  },
  {
    id: "select04",
    validations: { required: true },
    titulo: "Quantas janelas/portas tem na parede 04?",
    format: "inSquareSelect",
  },
];
