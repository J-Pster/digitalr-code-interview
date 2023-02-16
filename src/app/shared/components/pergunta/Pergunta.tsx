import { Pergunta } from "src/app/types/Pergunta.type";
import Input from "../input/Input";
import "./Pergunta.scss";
import { useState } from "react";

interface PerguntaProps {
  step: number;
  pergunta: Pergunta;
}

const Pergunta = ({ pergunta, step }: PerguntaProps) => {
  const [resposta, setResposta] = useState<string>();

  const handleChange = (value: string) => {
    setResposta(value);
  };

  return (
    <div>
      <h3 id="titulo">
        <span id="step">{step}.</span> {pergunta.titulo}
      </h3>
      <Input onChange={handleChange} />
      <button>Okay ✔️</button>
    </div>
  );
};

export default Pergunta;
