interface FormatNormalizer {
  value: string;
  format: string;
}

const formats: { [key: string]: string } = {
  square: 'm²',
  liter: 'L',
  ml: 'ml'
};

const valueCalcs: { [key: string]: string } = {
  ml: '(value * 1000).toFixed(0)',
  liter: 'value.toFixed(2)'
};

const resultValueNormalizer = (result: FormatNormalizer): string => {
  const { format, value } = result;
  if (!valueCalcs[format]) return value;

  return eval(valueCalcs[format]);
};

export const resultFormatNormalizer = (result: FormatNormalizer): string => {
  const { format, value } = result;
  if (!formats[format]) return value;

  return `${resultValueNormalizer(result)} ${formats[format]}`;
};
