import { CaixaDeCalculos } from '../../shared/components';
import { calculadoras } from '../../../data/calculadoras';

import { motion } from 'framer-motion';

import './Calculadoras.scss';

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
      duration: 0.8
    }
  },
  initial: {
    opacity: 0,
    transition: {
      when: 'afterChildren'
    }
  }
};

const item = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  initial: { opacity: 0, y: 100 }
};

const Calculadoras = () => {
  return (
    <motion.div className="calcs" initial="initial" animate="visible" variants={list}>
      <h2>O que você quer calcular hoje?</h2>
      <div className="caixas">
        {calculadoras.map((calculadora, index) => (
          <motion.div className="caixaAnimada" key={index} variants={item}>
            <CaixaDeCalculos key={index} titulo={calculadora.name} link={calculadora.path} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Calculadoras;
