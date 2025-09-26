export type TipCalculatorState = {
  bill: number;
  selectedTipPercent: number;
  numberOfPeople: number;
  allowedPercents: number[];
};

export type TipCalculatorActions = {
  setBill: (value: number) => void;
  setSelectedTipPercent: (value: number) => void;
  setNumberOfPeople: (value: number) => void;
};

export type TipCalculatorContextValue = {
  state: TipCalculatorState;
  actions: TipCalculatorActions;
};
