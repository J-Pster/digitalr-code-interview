import { useNavigate } from "react-router-dom";
import "./CaixaDeCalculos.scss";

interface CaixaDeCalculosProps {
  titulo: string;
  link: string;
}

const CaixaDeCalculos = ({ titulo, link }: CaixaDeCalculosProps) => {
  const navigate = useNavigate();

  return (
    <div className="caixa" onClick={() => navigate(link)}>
      <h4>{titulo}</h4>
      <p>Calcular</p>
    </div>
  );
};

export default CaixaDeCalculos;
