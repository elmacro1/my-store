interface OrderBy {
  label: string;
  value: string;
}

export const orderBy: OrderBy[] = [
  {
    label: "Más recientes",
    value: "recientes",
  },
  {
    label: "Precio: Menor a mayor",
    value: "menor",
  },
  {
    label: "Precio: Mayor a menor",
    value: "mayor",
  },
];
