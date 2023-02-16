import { useState } from "react";
import { useForm } from "react-hook-form";

import "./LatasDeTinta.scss";
import { latasDeTinta } from "../../../../data/calculadoras/calculos/tinta";
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
  const maxStep = latasDeTinta.length - 1;

  const handleOkay = () => {
    trigger(latasDeTinta[step].id).then((res) => {
      if (!res) return;

      if (errors[latasDeTinta[step].id]) return;

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
        key={latasDeTinta[step].id}
        pergunta={latasDeTinta[step]}
        hooks={{ register, watch, getValues, setValue, errors, handleOkay }}
        step={step}
      />
    </div>
  );
};

export default LatasDeTinta;
