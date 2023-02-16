import { Pergunta } from "./Pergunta.type";

export interface FormatProps {
  pergunta: Pergunta;
  hooks: {
    register: any;
    errors: any;
    watch: any;
  };
}
