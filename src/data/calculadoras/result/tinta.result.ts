export interface Result {
  id: string;
  titulo: string;
  fieldType: "standard";
  resultType: "tinta";
  fields: {
    id: string;
    titulo: string;
    format: string;
  }[];
  results: {
    id: string;
    titulo: string;
    format: string;
  }[];
}

export const resultTinta: Result = {
  id: "resultTinta",
  titulo: "Resultado da Latas de Tinta",
  fieldType: "standard",
  resultType: "tinta",
  fields: [
    {
      id: "areaParedes",
      titulo: "Área total das paredes",
      format: "square",
    },
    {
      id: "areaJanelasPortas",
      titulo: "Área total das janelas e portas",
      format: "square",
    },
    {
      id: "areaTotal",
      titulo: "Área total útil",
      format: "square",
    },
  ],
  results: [
    {
      id: "litros",
      titulo: "Litros de tinta",
      format: "liter",
    },
    {
      id: "latas-de-18",
      titulo: "Latas de 18 litros",
      format: "ink-bkt",
    },
    {
      id: "latas-de-3-6",
      titulo: "Latas de 3,6 litros",
      format: "ink-bkt",
    },
    {
      id: "latas-de-2-5",
      titulo: "Latas de 2,5 litros",
      format: "ink-bkt",
    },
    {
      id: "latas-de-0-5",
      titulo: "Latas de 0,5 litros",
      format: "ink-bkt",
    },
    {
      id: "latas-de-0-5-rest",
      titulo: "Valor Restante",
      format: "ml",
    },
  ],
};
