import { useState, useEffect } from "react";
import "./Select.scss";
import { RegisterOptions } from "react-hook-form";

interface SelectProps {
  label: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  hooks: {
    register: any;
    errors: any;
    setValue: any;
  };
  id: string;
  vals: RegisterOptions;
}

const Select = ({
  label,
  options,
  hooks: { register, errors, setValue: set },
  id,
  vals,
}: SelectProps) => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    set(id, value);
  }, []);

  const handleChange = (event: any) => {
    const newValue = event.target.value;
    setValue(newValue);
    set(id, newValue);
  };

  return (
    <div className="native-input">
      {label && <label>{label}</label>}
      <div id="internal-input">
        <select value={value} onChange={handleChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <input {...register(id, vals)} type="hidden" />
      </div>
    </div>
  );
};

Select.defaultProps = {
  label: "",
  options: [],
  onChange: () => {},
};

export default Select;
