import { useState } from "react";
import { InputProps } from "../../../types/Input.type";

import "./Input.scss";

const Input = ({ placeholder, onChange }: InputProps) => {
  const [value, setValue] = useState("");

  const handleChange = (event: any) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="native-input">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

Input.defaultProps = {
  placeholder: "Escreva a resposta aqui...",
};

export default Input;
