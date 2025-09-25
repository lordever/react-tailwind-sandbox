import { createContext, useContext } from 'react';
import { TipCard } from './tip-card.types';

export const TipCardContext = createContext<TipCard | null>(null);

export const useTipCard = () => {
  const ctx = useContext(TipCardContext);
  if (!ctx) throw new Error('TipCard.* must be used within <TipCard.Root />');
  return ctx;
};
