import React, { memo, useCallback } from 'react';
import { useTipCalculator } from './tip-calculator.context';
import Button from '../common/button/button.component';

const TipCalculatorSelector = () => {
  const { state, actions } = useTipCalculator();
  const { selectedTipPercent, allowedPercents } = state;
  const { setSelectedTipPercent } = actions;

  const handleSetSelectedTipPercent = useCallback(
    (percent: number) => {
      setSelectedTipPercent(percent);
    },
    [setSelectedTipPercent],
  );

  return (
    <div className="flex flex-col gap-2">
      <h5 className="text-preset-5 text-gray-500">Select Tip %</h5>

      <div className="grid grid-cols-2 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-2">
        {allowedPercents.map((percent) => (
          <Button
            key={percent}
            selected={percent === selectedTipPercent}
            onClick={() => handleSetSelectedTipPercent(percent)}
          >
            {percent}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default memo(TipCalculatorSelector);
