import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { Pergunta } from "../../shared/components";

import "./Form.scss";

import { Calculadora, calculadoras } from "../../../data/calculadoras";
import { Result } from "../../shared/components";

const Form = () => {
  // Router
  const location = useLocation();
  const { pathname } = location;
  const path = pathname.split("/")[2];
  console.log(path);

  // Use Effect State Load
  const [step, setStep] = useState(0);
  const [formSelected, setFormSelected] = useState<Calculadora | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [formValues, setFormValues] = useState<any>({});

  useEffect(() => {
    const form = calculadoras.find((form) => form.path === path);
    setFormSelected(form as Calculadora);
  }, [path]);

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
  const onSubmit = (data: any) => {
    console.log(data);
    setFormValues(data);
    setShowResult(true);
  };

  // Loading
  if (!formSelected) return <div>Carregando...</div>;

  // Showing Result
  if (showResult)
    return (
      <div>
        <Result
          calcs={formSelected.calcs}
          result={formSelected.result}
          form={formValues}
        />
      </div>
    );

  // Showing Form
  const { steps } = formSelected;
  const maxStep = steps?.length - 1;

  const handleOkay = () => {
    trigger(steps[step].id).then((res) => {
      if (!res) return;

      if (errors[steps[step].id]) return;

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
        key={steps[step].id}
        pergunta={steps[step]}
        hooks={{ register, watch, getValues, setValue, errors, handleOkay }}
        step={step}
        buttonText={step === maxStep ? "Calcular 🔣" : "Próximo ✔️"}
      />
    </div>
  );
};

export default Form;
