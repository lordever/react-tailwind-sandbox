export type TipCard = {
  amount: number;
  total: number;
  resetDisabled?: boolean;
  onReset: () => void;
};