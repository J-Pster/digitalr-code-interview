import React, { useEffect, useCallback, useState } from "react";
import { Calc } from "src/data/calculadoras/calcs/tinta.calcs";
import { Result } from "src/data/calculadoras/result/tinta.result";

import FieldsFormats from "./formats/fields";
import ResultsFormats from "./formats/results";

import calculadoraService from "../../../services/calculadoras.service";
import { useNavigate } from "react-router-dom";

interface ResultProps {
  calcs: Calc[];
  result: Result;
  form: any;
}

const Result = ({ calcs, result, form }: ResultProps) => {
  const [calculus, setCalculus] = useState<any>(null);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/calculadoras");
  };

  const calculateValues = useCallback(() => {
    const { calculateValues } = calculadoraService;
    const result = calculateValues(calcs, form);
    setCalculus(result);
    console.table("Calculus result", calculus);
  }, [calcs, form]);

  useEffect(() => {
    calculateValues();
  }, []);

  if (!calculus) return <div>Carregando...</div>;

  return (
    <div>
      <h2>{result.titulo}</h2>
      {FieldsFormats[result.fieldType] ? (
        FieldsFormats[result.fieldType]({ calculus, result })
      ) : (
        <div>Formato de fields não suportado!</div>
      )}
      {ResultsFormats[result.resultType] ? (
        ResultsFormats[result.resultType]({ calculus, result })
      ) : (
        <div>Formato de results não suportado!</div>
      )}
      <button onClick={handleBack}>Voltar 🧮 </button>
    </div>
  );
};

export default Result;
