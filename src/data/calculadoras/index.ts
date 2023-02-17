import { Pergunta } from 'src/app/types/Pergunta.type';
import { Calc, calcsTinta } from './calcs/tinta.calcs';
import { stepsTinta } from './steps/tinta.steps';
import { ResultInterface, resultTinta } from './result/tinta.result';

export interface Calculadora {
  name: string;
  path: string;
  steps: Pergunta[];
  calcs: Calc[];
  result: ResultInterface;
}

export const calculadoras: Calculadora[] = [
  {
    name: 'Latas de Tinta',
    path: 'latas-de-tinta',
    steps: stepsTinta,
    calcs: calcsTinta,
    result: resultTinta
  },
  {
    name: 'Tijolos',
    path: 'tijolos',
    steps: stepsTinta,
    calcs: calcsTinta,
    result: resultTinta
  },
  {
    name: 'Argamassa',
    path: 'argamassa',
    steps: stepsTinta,
    calcs: calcsTinta,
    result: resultTinta
  },
  {
    name: 'Concreto',
    path: 'concreto',
    steps: stepsTinta,
    calcs: calcsTinta,
    result: resultTinta
  },
  {
    name: 'Pisos',
    path: 'pisos',
    steps: stepsTinta,
    calcs: calcsTinta,
    result: resultTinta
  },
  {
    name: 'Telhados',
    path: 'telhados',
    steps: stepsTinta,
    calcs: calcsTinta,
    result: resultTinta
  }
];
