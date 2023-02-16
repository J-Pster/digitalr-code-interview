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
      {result.fields.map((field) => {
        return (
          <div key={field.id}>
            <h3>{field.titulo}</h3>
            <p>
              {resultFormatNormalizer({
                value: calculus[field.id].toFixed(2),
                format: field.format,
              })}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default standard;
