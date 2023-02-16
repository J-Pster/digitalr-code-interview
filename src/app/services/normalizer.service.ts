interface FormatNormalizer {
  value: string;
  format: string;
}

const formats: { [key: string]: string } = {
  square: "m²",
  liter: "L",
};

export const resultFormatNormalizer = (result: FormatNormalizer): string => {
  const { format, value } = result;
  if (!formats[format]) return value;

  return `${value} ${formats[format]}`;
};
