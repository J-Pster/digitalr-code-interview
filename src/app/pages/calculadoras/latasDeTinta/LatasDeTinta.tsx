import { useState } from "react";

import "./LatasDeTinta.scss";
import { latasDeTinta } from "../../../../data/calculadoras/calculos/tinta";
import { Pergunta } from "../../../shared/components";

const LatasDeTinta = () => {
  const [step, setStep] = useState(0);
  const [respostas, setRespostas] = useState<any>({
    nomeDoProjeto: "",
  });

  return (
    <div>
      <Pergunta
        key={latasDeTinta[step].id}
        pergunta={latasDeTinta[step]}
        step={step}
      />
    </div>
  );
};

export default LatasDeTinta;
