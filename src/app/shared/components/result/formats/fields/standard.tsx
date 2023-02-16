import { motion } from "framer-motion";

import { Result } from "src/data/calculadoras/result/tinta.result";
import { resultFormatNormalizer } from "../../../../../services/normalizer.service";

import "./fields.scss";

interface StandardProps {
  calculus: any;
  result: Result;
}

const standard = ({ calculus, result }: StandardProps) => {
  return (
    <div className="fieldBox">
      {result.fields.map((field, index) => {
        return (
          <motion.div
            key={field.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{field.titulo}</h3>
            <p>
              {resultFormatNormalizer({
                value: calculus[field.id].toFixed(2),
                format: field.format,
              })}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default standard;
