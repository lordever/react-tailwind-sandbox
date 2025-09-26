import React, { FC, memo } from 'react';
import { useTipCard } from './tip-card.context';
import Price from '../common/price.component';

type TipCardValueProps = {
  label: string;
  subLabel: string;
  kind: 'amount' | 'total';
};

const Value: FC<TipCardValueProps> = ({ kind, subLabel, label }) => {
  const { amount, total } = useTipCard();

  const price = kind === 'amount' ? amount : total;

  return (
    <div className="flex flex-row items-center justify-between gap-24">
      <div className="flex flex-col gap-1">
        <h5 className="text-preset-5 text-white">{label}</h5>
        <p className="text-preset-6 text-gray-400">{subLabel}</p>
      </div>

      <Price>{price}</Price>
    </div>
  );
};

export default memo(Value);
