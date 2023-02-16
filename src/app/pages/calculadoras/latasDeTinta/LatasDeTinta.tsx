import { useState } from "react";
import { useForm } from "react-hook-form";

import "./LatasDeTinta.scss";
import { stepsTinta } from "../../../../data/calculadoras/steps/tinta.steps";
import { Pergunta } from "../../../shared/components";

const LatasDeTinta = () => {
  // RHF
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data: any) => console.log(data);

  // State
  const [step, setStep] = useState(0);
  const maxStep = stepsTinta.length - 1;

  const handleOkay = () => {
    trigger(stepsTinta[step].id).then((res) => {
      if (!res) return;

      if (errors[stepsTinta[step].id]) return;

      if (step === maxStep) {
        handleSubmit(onSubmit)();
        return;
      }

      setStep(step + 1);
    });
  };

  return (
    <div>
      <Pergunta
        key={stepsTinta[step].id}
        pergunta={stepsTinta[step]}
        hooks={{ register, watch, getValues, setValue, errors, handleOkay }}
        step={step}
        buttonText={step === maxStep ? "Calcular 🔣" : "Próximo ✔️"}
      />
    </div>
  );
};

export default LatasDeTinta;
