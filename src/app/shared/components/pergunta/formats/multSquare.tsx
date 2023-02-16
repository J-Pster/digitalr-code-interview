import Input from "../../input/Input";
import { FormatProps } from "src/app/types/Formats.type";

import "./formats.scss";

const multSquare = ({
  hooks: { errors, register, watch, setValue },
  pergunta,
}: FormatProps) => {
  // Validanto a resposta
  const [x1, x2] = [watch(pergunta.id + "alt"), watch(pergunta.id + "larg")];
  const [x1Valid, x2Valid] = [
    errors[pergunta.id + "alt"] ? false : true,
    errors[pergunta.id + "larg"] ? false : true,
  ];
  const [x1Value, x2Value] = [
    x1Valid ? parseFloat(x1) : 0,
    x2Valid ? parseFloat(x2) : 0,
  ];

  const result = Math.round((x1Value * x2Value || 0) * 100) / 100;

  result < 1 || result > 50 ? true : false;
  setValue(pergunta.id, result);

  const minHeigth = x1Value < 2.2 ? true : false;

  if (result < 1 || result > 50 || minHeigth) {
    errors[pergunta.id] = true;
  } else {
    delete errors[pergunta.id];
  }

  return (
    <>
      <div className="sumSquare">
        <Input
          hooks={{ register, errors }}
          id={pergunta.id + "alt"}
          placeholder="x"
          style={{
            input: { width: "80px" },
            inputBox: { width: "fit-content" },
            inputRoot: { width: "fit-content" },
          }}
          suffix="m²"
          showErrors={false}
          label="Altura"
        />
        <h2>*</h2>
        <Input
          hooks={{ register, errors }}
          id={pergunta.id + "larg"}
          placeholder="x"
          style={{
            input: { width: "80px" },
            inputBox: { width: "fit-content" },
            inputRoot: { width: "fit-content" },
          }}
          suffix="m²"
          showErrors={false}
          label="Largura"
        />
        <h2>= {result} m²</h2>
        <input type="hidden" {...register(pergunta.id, pergunta.validations)} />
      </div>
      {errors[pergunta.id] && (
        <p className="error">
          A area deve ser maior que 1m² e menor que 50m², e altura mínima de
          2.2m.
        </p>
      )}
    </>
  );
};

export default multSquare;
