export type TipCalculatorState = {
  bill?: number;
  selectedTipPercent?: number;
  numberOfPeople?: number;
  allowedPercents: number[];
};

export type TipCalculatorActions = {
  setBill: (value: number | undefined) => void;
  setSelectedTipPercent: (value: number | undefined) => void;
  setNumberOfPeople: (value: number | undefined) => void;
  resetAll: () => void;
};

export type TipCalculatorContextValue = {
  state: TipCalculatorState;
  actions: TipCalculatorActions;
};
