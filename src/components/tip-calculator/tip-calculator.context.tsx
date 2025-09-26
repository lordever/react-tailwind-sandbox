import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  TipCalculatorState,
  TipCalculatorActions,
  TipCalculatorContextValue,
} from './tip-calculator.types';

const TipStateContext = createContext<TipCalculatorState | undefined>(undefined);
const TipActionsContext = createContext<TipCalculatorActions | undefined>(undefined);

export function TipCalculatorProvider(
  props: PropsWithChildren<TipCalculatorState>,
) {
  const [bill, setBillState] = useState<number | undefined>(props.bill);
  const [selectedTipPercent, _setSelectedTipPercent] = useState<number | undefined>(
    props.selectedTipPercent,
  );
  const [numberOfPeople, setNumberOfPeopleState] = useState<number | undefined>(
    props.numberOfPeople,
  );

  const initialRef = useRef<Pick<TipCalculatorState, 'bill' | 'selectedTipPercent' | 'numberOfPeople'>>({
    bill: props.bill,
    selectedTipPercent: props.selectedTipPercent,
    numberOfPeople: props.numberOfPeople,
  });


  useEffect(() => {
    if (
      selectedTipPercent !== undefined &&
      !props.allowedPercents.includes(selectedTipPercent)
    ) {
      _setSelectedTipPercent(undefined);
    }
  }, [props.allowedPercents, selectedTipPercent]);

  const setBill = useCallback((value: number | undefined) => {
    if (value === undefined) {
      setBillState(undefined);
      return;
    }
    setBillState(Number.isFinite(value) ? Math.max(0, value) : undefined);
  }, []);

  const setSelectedTipPercent = useCallback(
    (value: number | undefined) => {
      if (value === undefined) {
        _setSelectedTipPercent(undefined);
        return;
      }
      if (!props.allowedPercents.includes(value)) {
        return;
      }
      _setSelectedTipPercent(value);
    },
    [props.allowedPercents],
  );

  const setNumberOfPeople = useCallback((value: number | undefined) => {
    if (value === undefined) {
      setNumberOfPeopleState(undefined);
      return;
    }
    const v = Math.floor(value);
    setNumberOfPeopleState(v > 0 ? v : 1);
  }, []);

  const resetAll = useCallback(() => {
    setBillState(initialRef.current.bill);
    _setSelectedTipPercent(initialRef.current.selectedTipPercent);
    setNumberOfPeopleState(initialRef.current.numberOfPeople);
  }, []);


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
      setBill,
      setSelectedTipPercent,
      setNumberOfPeople,
      resetAll,
    }),
    [setBill, setSelectedTipPercent, setNumberOfPeople, resetAll],
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
  if (!ctx) throw new Error('useTipState must be used within <TipCalculatorProvider/>');
  return ctx;
}

export function useTipActions() {
  const ctx = useContext(TipActionsContext);
  if (!ctx) throw new Error('useTipActions must be used within <TipCalculatorProvider/>');
  return ctx;
}

export function useTipCalculator(): TipCalculatorContextValue {
  return { state: useTipState(), actions: useTipActions() };
}
