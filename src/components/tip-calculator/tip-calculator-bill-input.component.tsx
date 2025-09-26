import React, { memo } from 'react';
import { Input } from '../common/input/input.component';
import { useTipCalculator } from './tip-calculator.context';

const TipCalculatorBillInput = () => {
  const { state, actions } = useTipCalculator();
  const { bill } = state;
  const { setBill } = actions;

  return (
    <Input
      kind="number"
      label="Bill"
      placeholder="0"
      value={bill}
      onValueChange={setBill}
    />
  );
};

export default memo(TipCalculatorBillInput);
