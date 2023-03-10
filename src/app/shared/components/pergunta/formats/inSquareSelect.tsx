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
        mÂ²
      </p>
      <div className="inSquareSelect">
        <Select
          options={[
            { value: "1", label: "Nela tem 1 Porta ðª" },
            { value: "2", label: "Nela tem 2 Portas ðª" },
            { value: "3", label: "Nela tem 3 Portas ðª" },
            { value: "4", label: "Nela tem 4 Portas ðª" },
            { value: "5", label: "Nela tem 5 Portas ðª" },
            { value: "6", label: "Nela tem 6 Portas ðª" },
            { value: "7", label: "Nela tem 7 Portas ðª" },
            { value: "8", label: "Nela tem 8 Portas ðª" },
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
            { value: "1", label: "Nela tem 1 Janela ðª" },
            { value: "2", label: "Nela tem 2 Janelas ðª" },
            { value: "3", label: "Nela tem 3 Janelas ðª" },
            { value: "4", label: "Nela tem 4 Janelas ðª" },
            { value: "5", label: "Nela tem 5 Janelas ðª" },
            { value: "6", label: "Nela tem 6 Janelas ðª" },
            { value: "7", label: "Nela tem 7 Janelas ðª" },
            { value: "8", label: "Nela tem 8 Janelas ðª" },
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
          A Ã¡rea de portas e janelas nÃ£o pode ser maior que 50% da Ã¡rea da
          parede.
        </p>
      )}
    </>
  );
};

export default inSquareSelect;
