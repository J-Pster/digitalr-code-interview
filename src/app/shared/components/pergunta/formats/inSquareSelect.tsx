import Select from "../../select/Select";
import { FormatProps } from "src/app/types/Formats.type";

import "./formats.scss";
import { useState } from "react";

const inSquareSelect = ({
  hooks: { errors, register, watch, getValues, setValue },
  pergunta,
}: FormatProps) => {
  const janelas = watch(pergunta.id + "jan") || 0;
  const portas = watch(pergunta.id + "por") || 0;

  const { titulo } = pergunta;
  const digitsArr = titulo.match(/\d+/g);
  const digits = digitsArr ? digitsArr[0] : "";

  const paredeAltura = getValues(`parede${digits}alt`);
  const paredeLargura = getValues(`parede${digits}larg`);
  const paredeArea = Math.round(paredeAltura * paredeLargura * 100) / 100;

  const areaPortas = parseInt(portas) * 2.4;
  const areaJanelas = parseInt(janelas) * 1.52;

  const areaJanelaPorta = areaPortas + areaJanelas;
  setValue(pergunta.id, areaJanelaPorta);

  const result = areaJanelaPorta > paredeArea * 0.5 ? true : false;

  if (result) {
    errors[pergunta.id] = true;
  } else {
    delete errors[pergunta.id];
  }

  return (
    <>
      <p className="descritivo-de-parede">
        A parede {digits} tem: {paredeAltura}m * {paredeLargura}m = {paredeArea}
        m²
      </p>
      <div className="inSquareSelect">
        <Select
          options={[
            { value: "1", label: "Nela tem 1 Porta" },
            { value: "2", label: "Nela tem 2 Portas" },
            { value: "3", label: "Nela tem 3 Portas" },
            { value: "4", label: "Nela tem 4 Portas" },
            { value: "5", label: "Nela tem 5 Portas" },
            { value: "6", label: "Nela tem 6 Portas" },
            { value: "7", label: "Nela tem 7 Portas" },
            { value: "8", label: "Nela tem 8 Portas" },
          ]}
          hooks={{
            register,
            errors,
            setValue,
          }}
          id={pergunta.id + "jan"}
          vals={pergunta.validations}
        />
        <Select
          options={[
            { value: "1", label: "Nela tem 1 Janela" },
            { value: "2", label: "Nela tem 2 Janelas" },
            { value: "3", label: "Nela tem 3 Janelas" },
            { value: "4", label: "Nela tem 4 Janelas" },
            { value: "5", label: "Nela tem 5 Janelas" },
            { value: "6", label: "Nela tem 6 Janelas" },
            { value: "7", label: "Nela tem 7 Janelas" },
            { value: "8", label: "Nela tem 8 Janelas" },
          ]}
          hooks={{
            register,
            errors,
            setValue,
          }}
          id={pergunta.id + "por"}
          vals={pergunta.validations}
        />
        <input {...register(pergunta.id, pergunta.validations)} type="hidden" />
      </div>
      {errors[pergunta.id] && (
        <p className="error">
          A área de portas e janelas não pode ser maior que 50% da área da
          parede.
        </p>
      )}
    </>
  );
};

export default inSquareSelect;
