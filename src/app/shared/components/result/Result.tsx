import React, { useEffect } from "react";
import { Calc } from "src/data/calculadoras/calcs/tinta.calcs";
import { Result } from "src/data/calculadoras/result/tinta.result";

import calculadoraService from "../../../services/calculadoras.service";

interface ResultProps {
  calcs: Calc[];
  result: Result;
  form: any;
}

const Result = ({ calcs, result, form }: ResultProps) => {
  useEffect(() => {
    const { calculateValues } = calculadoraService;
    const calculus = calculateValues(calcs, form);
    console.log(calculus);
  }, [form]);

  return <div>Result</div>;
};

export default Result;
