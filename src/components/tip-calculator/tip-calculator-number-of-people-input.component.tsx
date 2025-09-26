import React, { memo, useCallback, useState } from 'react';
import { useTipCalculator } from './tip-calculator.context';
import { Input } from '../common/input/input.component';

const TipCalculatorNumberOfPeopleInput = () => {
  const { state, actions } = useTipCalculator();
  const { numberOfPeople } = state;
  const { setNumberOfPeople } = actions;

  const [error, setError] = useState<string | undefined>();

  const handleSetNumberOfPeople = useCallback(
    (value: number) => {
      if (value <= 0) {
        setError("Can't be zero");
      } else {
        setError(undefined);
      }

      setNumberOfPeople(value);
    },
    [setError, setNumberOfPeople],
  );

  return (
    <Input
      kind="number"
      label="Number of People"
      placeholder="0"
      value={numberOfPeople}
      onValueChange={handleSetNumberOfPeople}
      error={error}
    />
  );
};

export default memo(TipCalculatorNumberOfPeopleInput);
