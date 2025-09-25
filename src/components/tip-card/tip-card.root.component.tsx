import React, { FC, memo, PropsWithChildren } from 'react';
import { TipCardContext } from './tip-card.context';
import clsx from 'clsx';
import { TipCard } from './tip-card.types';

type RootProps = PropsWithChildren<TipCard>;

const Root: FC<RootProps> = ({ amount, total, onReset, resetDisabled, children }) => {
  return (
    <TipCardContext.Provider value={{ amount, total, onReset, resetDisabled }}>
      <section
        className={clsx(
          'rounded-md bg-green-900 p-[38px] text-white',
          'flex flex-col gap-6',
        )}
        aria-label="Tip summary card"
      >
        {children}
      </section>
    </TipCardContext.Provider>
  );
};

export default memo(Root);
