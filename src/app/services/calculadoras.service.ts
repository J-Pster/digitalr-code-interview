import { Calc } from "src/data/calculadoras/calcs/tinta.calcs";

function calculateValues(calcs: Calc[], form: any): { [id: string]: number } {
  const values: { [id: string]: number } = {
    ...form,
  };

  const typeHandlers: { [type: string]: (items: any[], id: string) => number } =
    {
      sum: (items: any[]) =>
        items.reduce((acc: any, item: any) => {
          const value = typeof item === "string" ? values[item] : item;
          return acc + Number(value);
        }, 0),

      sub: (items: any[]) => {
        const [a, b] = items.map((item: any) =>
          typeof item === "string" ? values[item] : item
        );
        return Number(a) - Number(b);
      },

      div: (items: any[]) => {
        let result = typeof items[0] === "string" ? values[items[0]] : items[0];
        for (let i = 1; i < items.length; i++) {
          const divider = typeof items[i] === "string" ? values[i] : items[i];
          result /= divider;
        }
        return result;
      },

      "div-rest": (items: any[], id) => {
        const [dividendId, divisorId] = items;

        let dividend = 0;

        if (typeof dividendId === "object") {
          const [id, restId] = dividendId;
          dividend = values[`${id}-${restId}`];
        } else {
          dividend =
            typeof dividendId === "string" ? values[dividendId] : dividendId;
        }

        const divisor =
          typeof divisorId === "string" ? values[divisorId] : divisorId;

        const quotient = Math.floor(dividend / divisor);
        const remainder = dividend % divisor;
        values[`${id}-rest`] = remainder;
        return quotient;
      },
    };

  console.log(calcs);

  for (const calc of calcs) {
    const { id, type, items } = calc;
    const handler = typeHandlers[type];
    if (handler) {
      values[id] = handler(items, id);
    }
  }

  return values;
}

const calculadoraService = {
  calculateValues,
};

export default calculadoraService;
