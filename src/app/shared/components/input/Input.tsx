import { useState } from "react";
import { InputProps } from "../../../types/Input.type";

import "./Input.scss";

const Input = ({
  placeholder,
  hooks: { register, errors },
  id,
  vals,
  style,
  suffix,
  showErrors,
  label,
}: InputProps) => {
  console.warn(errors);

  return (
    <div className="native-input" style={style.inputRoot}>
      <div id="internal-input" style={style.inputBox}>
        {label && <label htmlFor={id}>{label}</label>}
        <input
          id={id}
          style={style.input}
          type="text"
          placeholder={placeholder}
          {...register(id, vals)}
        />
        {suffix && <div>{suffix}</div>}
      </div>
      {showErrors && errors[id] && <p>Input inválido!</p>}
    </div>
  );
};

Input.defaultProps = {
  placeholder: "Escreva a resposta aqui...",
  style: {},
  suffix: "",
  vals: {},
  showErrors: true,
  label: "",
};

export default Input;
