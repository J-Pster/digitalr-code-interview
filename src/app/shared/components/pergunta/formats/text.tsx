import { FormatProps } from "src/app/types/Formats.type";
import Input from "../../input/Input";

const text = ({ hooks: { errors, register }, pergunta }: FormatProps) => {
  return (
    <Input
      style={{
        input: { width: "100%" },
        inputBox: { width: "100%" },
        inputRoot: { width: "100%" },
      }}
      hooks={{ register, errors }}
      id={pergunta.id}
      vals={pergunta.validations}
    />
  );
};

export default text;
