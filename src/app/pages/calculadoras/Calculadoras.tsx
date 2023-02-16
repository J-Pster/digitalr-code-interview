import { CaixaDeCalculos } from "../../shared/components";
import { calculadoras } from "../../../data/calculadoras";

import "./Calculadoras.scss";

const Calculadoras = () => {
  return (
    <div className="calcs">
      <h2>O que você quer calcular hoje?</h2>
      <div className="caixas">
        {calculadoras.map((calculadora, index) => (
          <CaixaDeCalculos
            key={index}
            titulo={calculadora.name}
            link={calculadora.path}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculadoras;
