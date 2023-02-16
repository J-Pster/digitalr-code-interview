import { Pergunta } from "src/app/types/Pergunta.type";
import Formats from "./formats";
import "./Pergunta.scss";

interface PerguntaProps {
  step: number;
  pergunta: Pergunta;
  buttonText: string;
  hooks: {
    register: any;
    watch: any;
    getValues: any;
    errors: any;
    setValue: any;
    handleOkay: () => void;
  };
}

const Pergunta = ({
  pergunta,
  step,
  buttonText,
  hooks: { register, watch, errors, getValues, setValue, handleOkay },
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
          hooks: { register, errors, watch, getValues, setValue },
        })
      ) : (
        <div>Formato não suportado!</div>
      )}
      <button onClick={handleOkay}>{buttonText}</button>
    </div>
  );
};

export default Pergunta;
