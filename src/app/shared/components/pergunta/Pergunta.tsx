import { Pergunta } from "src/app/types/Pergunta.type";
import Formats from "./formats";
import "./Pergunta.scss";

interface PerguntaProps {
  step: number;
  pergunta: Pergunta;
  hooks: {
    register: any;
    watch: any;
    errors: any;
    handleOkay: () => void;
  };
}

const Pergunta = ({
  pergunta,
  step,
  hooks: { register, watch, errors, handleOkay },
}: PerguntaProps) => {
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleOkay();
    }
  };

  return (
    <div onKeyDown={handleKeyDown}>
      <h3 id="titulo">
        <span id="step">{step}.</span> {pergunta.titulo}
      </h3>
      {Formats[pergunta.format] ? (
        Formats[pergunta.format]({
          pergunta,
          hooks: { register, errors, watch },
        })
      ) : (
        <div>Formato não suportado!</div>
      )}
      <button onClick={handleOkay}>Okay ✔️</button>
    </div>
  );
};

export default Pergunta;
