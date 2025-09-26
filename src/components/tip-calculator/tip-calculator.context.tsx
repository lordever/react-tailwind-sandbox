import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import {
  TipCalculatorState,
  TipCalculatorActions,
  TipCalculatorContextValue,
} from './tip-calculator.types';

const TipStateContext = createContext<TipCalculatorState | undefined>(
  undefined,
);
const TipActionsContext = createContext<TipCalculatorActions | undefined>(
  undefined,
);

export function TipCalculatorProvider(props: PropsWithChildren<TipCalculatorState>) {
  const [bill, setBill] = useState(props.bill ?? 0);
  const [selectedTipPercent, _setSelectedTipPercent] = useState(
    props.selectedTipPercent ?? 15,
  );
  const [numberOfPeople, setNumberOfPeople] = useState(props.numberOfPeople ?? 1);

  const setSelectedTipPercent = useCallback(
    (value: number) => {
      if (props.allowedPercents && !props.allowedPercents.includes(value)) return;
      _setSelectedTipPercent(value);
    },
    [props.allowedPercents],
  );

  const safeSetBill = useCallback((value: number) => {
    setBill(Number.isFinite(value) ? Math.max(0, value) : 0);
  }, []);

  const safeSetPeople = useCallback((value: number) => {
    const v = Math.floor(value);
    setNumberOfPeople(v > 0 ? v : 1);
  }, []);

  const reset = useCallback(() => {
    setBill(bill ?? 0);
    _setSelectedTipPercent(selectedTipPercent ?? 15);
    setNumberOfPeople(numberOfPeople ?? 1);
  }, [bill, selectedTipPercent, numberOfPeople]);

  const state = useMemo<TipCalculatorState>(
    () => ({
      bill,
      selectedTipPercent,
      numberOfPeople,
      allowedPercents: props.allowedPercents,
    }),
    [bill, selectedTipPercent, numberOfPeople, props.allowedPercents],
  );

  const actions = useMemo<TipCalculatorActions>(
    () => ({
      setBill: safeSetBill,
      setSelectedTipPercent,
      setNumberOfPeople: safeSetPeople,
      reset,
    }),
    [safeSetBill, setSelectedTipPercent, safeSetPeople, reset],
  );

  return (
    <TipStateContext.Provider value={state}>
      <TipActionsContext.Provider value={actions}>
        {props.children}
      </TipActionsContext.Provider>
    </TipStateContext.Provider>
  );
}

export function useTipState() {
  const ctx = useContext(TipStateContext);
  if (!ctx)
    throw new Error('useTipState must be used within <TipCalculatorProvider/>');
  return ctx;
}

export function useTipActions() {
  const ctx = useContext(TipActionsContext);
  if (!ctx)
    throw new Error(
      'useTipActions must be used within <TipCalculatorProvider/>',
    );
  return ctx;
}

export function useTipCalculator(): TipCalculatorContextValue {
  return { state: useTipState(), actions: useTipActions() };
}
