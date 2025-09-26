import React, {
  FC,
  memo,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { TipCardContext } from './tip-card.context';
import clsx from 'clsx';
import { useTipCalculator } from '../tip-calculator/tip-calculator.context';

const percentOf = (p: number, n: number) => (n * p) / 100;

const Root: FC<PropsWithChildren> = ({ children }) => {
  const { state, actions } = useTipCalculator();
  const { bill, selectedTipPercent, numberOfPeople } = state;
  const { resetAll } = actions;

  const [amount, setAmount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [resetDisabled, setResetDisabled] = useState<boolean>(true);

  const handleReset = useCallback(() => {
    setAmount(0);
    setTotal(0);
    resetAll();
  }, [resetAll]);

  useEffect(() => {
    if (numberOfPeople && selectedTipPercent && bill && numberOfPeople > 0) {
      const tipAmountByPerson =
        percentOf(selectedTipPercent, bill) / numberOfPeople;
      setAmount(tipAmountByPerson);
      setTotal(tipAmountByPerson + bill);
      setResetDisabled(false);
    } else {
      setResetDisabled(true);
    }
  }, [bill, numberOfPeople, selectedTipPercent]);

  return (
    <TipCardContext.Provider
      value={{ amount, total, onReset: handleReset, resetDisabled }}
    >
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
