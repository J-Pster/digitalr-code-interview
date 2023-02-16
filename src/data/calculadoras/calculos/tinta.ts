import { Pergunta } from "src/app/types/Pergunta.type";

export const latasDeTinta: Pergunta[] = [
  {
    id: "nomeDoProjeto",
    validations: { required: true },
    titulo: "Qual o nome do seu projeto?",
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
];
