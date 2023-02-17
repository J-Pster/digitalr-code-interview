import { useEffect, useCallback, useState } from 'react';
import { motion } from 'framer-motion';

import { Calc } from 'src/data/calculadoras/calcs/tinta.calcs';
import { ResultInterface } from 'src/data/calculadoras/result/tinta.result';

import FieldsFormats from './formats/fields';
import ResultsFormats from './formats/results';

import calculadoraService from '../../../services/calculadoras.service';
import { useNavigate } from 'react-router-dom';

interface ResultProps {
  calcs: Calc[];
  result: ResultInterface;
  form: any;
}

const Result = ({ calcs, result, form }: ResultProps) => {
  const [calculus, setCalculus] = useState<any>(null);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/calculadoras');
  };

  const calculateValues = useCallback(() => {
    const { calculateValues } = calculadoraService;
    const result = calculateValues(calcs, form);
    setCalculus(result);
    console.table('Calculus result', calculus);
  }, [calcs, form]);

  useEffect(() => {
    calculateValues();
  }, []);

  if (!calculus) return <div>Carregando...</div>;

  return (
    <motion.div className="result" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
    </motion.div>
  );
};

export default Result;
