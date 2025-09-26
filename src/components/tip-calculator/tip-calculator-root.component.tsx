import React, { FC, memo, PropsWithChildren } from 'react';
import { TipCalculatorProvider } from './tip-calculator.context';
import { TipCalculatorState } from './tip-calculator.types';

const TipCalculatorRoot: FC<PropsWithChildren<TipCalculatorState>> = (
  props,
) => {
  return (
    <TipCalculatorProvider {...props}>
      <section className="rounded-2xl bg-white px-10 py-8 shadow-lg">
        {props.children}
      </section>
    </TipCalculatorProvider>
  );
};

export default memo(TipCalculatorRoot);
