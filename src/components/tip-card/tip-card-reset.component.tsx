import React, { memo } from 'react';
import { useTipCard } from './tip-card.context';
import Button from '../common/button/button.component';

const Reset = () => {
  const { onReset, resetDisabled } = useTipCard();

  return (
    <Button variant="secondary" onClick={onReset} disabled={resetDisabled}>
      Reset
    </Button>
  );
};

export default memo(Reset);
