import { motion } from 'framer-motion';

import { ResultInterface } from 'src/data/calculadoras/result/tinta.result';
import { resultFormatNormalizer } from '../../../../../services/normalizer.service';

import './results.scss';

interface TintaProps {
  calculus: any;
  result: ResultInterface;
}

const generateBucketImages = (number: number, id: string) => {
  const images = [];
  for (let i = 0; i < number; i++) {
    images.push(
      <motion.img
        key={i}
        src={`/ink-bkt-${id}.png`}
        alt="Tinta"
        style={{ width: '25px', height: '25px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.2 }}
      />
    );
  }
  return images;
};

const tinta = ({ calculus, result }: TintaProps) => {
  return (
    <div className="resultBox">
      {result.results.map((result) => (
        <motion.div
          key={result.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <h3>{result.titulo}</h3>
          <div id="result">
            {result.format === 'ink-bkt' && generateBucketImages(calculus[result.id], result.id)}
            <p>
              {resultFormatNormalizer({
                value: calculus[result.id],
                format: result.format
              })}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default tinta;
