export interface Calc {
  id: string;
  titulo: string;
  type: "sum" | "sub" | "div" | "div-rest";
  items: (string | number | [string, string])[];
}

export const calcsTinta: Calc[] = [
  {
    id: "areaParedes",
    titulo: "Área das paredes",
    type: "sum",
    items: ["parede01", "parede02", "parede03", "parede04"],
  },
  {
    id: "areaJanelasPortas",
    titulo: "Área das janelas e portas",
    type: "sum",
    items: ["select01", "select02", "select03", "select04"],
  },
  {
    id: "areaTotal",
    titulo: "Área total",
    type: "sub",
    items: ["areaParedes", "areaJanelasPortas"],
  },
  {
    id: "litros",
    titulo: "Litros de tinta",
    type: "div",
    items: ["areaTotal", 5],
  },
  {
    id: "latas-de-18",
    titulo: "Latas de 18 litros",
    type: "div-rest",
    items: ["litros", 18],
  },
  {
    id: "latas-de-3-6",
    titulo: "Latas de 3,6 litros",
    type: "div-rest",
    items: [["latas-de-18", "rest"], 3.6],
  },
  {
    id: "latas-de-2-5",
    titulo: "Latas de 2,5 litros",
    type: "div-rest",
    items: [["latas-de-3-6", "rest"], 2.5],
  },
  {
    id: "latas-de-0-5",
    titulo: "Latas de 0,5 litros",
    type: "div-rest",
    items: [["latas-de-2-5", "rest"], 0.5],
  },
];
