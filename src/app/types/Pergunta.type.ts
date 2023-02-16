import { RegisterOptions } from "react-hook-form";

export interface Pergunta {
  id: string;
  validations: RegisterOptions;
  titulo: string;
  format: string;
}
