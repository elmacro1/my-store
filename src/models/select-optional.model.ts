export interface SelectOptionalModel {
  title: string;
  options: OptionModel[];
}

export interface OptionModel {
  id: string;
  value: string;
  label: string;
}
