import { Result } from "src/data/calculadoras/result/tinta.result";
import { resultFormatNormalizer } from "../../../../../services/normalizer.service";

import "./results.scss";

interface TintaProps {
  calculus: any;
  result: Result;
}

const generateBucketImages = (number: number, id: string) => {
  const images = [];
  for (let i = 0; i < number; i++) {
    images.push(
      <img
        key={i}
        src={`/ink-bkt-${id}.png`}
        alt="Tinta"
        style={{ width: "25px", height: "25px" }}
      />
    );
  }
  return images;
};

const tinta = ({ calculus, result }: TintaProps) => {
  return (
    <div className="resultBox">
      {result.results.map((result) => (
        <div key={result.id}>
          <h3>{result.titulo}</h3>
          <div id="result">
            {result.format === "ink-bkt" &&
              generateBucketImages(calculus[result.id], result.id)}
            <p>
              {resultFormatNormalizer({
                value: calculus[result.id],
                format: result.format,
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default tinta;
