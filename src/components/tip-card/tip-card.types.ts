export type TipCard = {
  amount: string;
  total: string;
  resetDisabled?: boolean;
  onReset: () => void;
};