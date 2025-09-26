import React from 'react';
import './App.css';
import { TipCalculator } from './components/tip-calculator';

function App() {
  return (
    <main className="flex min-h-full w-full items-center justify-center">
      <section className="max-w-[920px]">
        <TipCalculator.Root
          allowedPercents={[5, 10, 15, 20, 30, 50]}
          bill={0}
          selectedTipPercent={15}
          numberOfPeople={0}
        >
          <TipCalculator.Content>
            <TipCalculator.Cols>
              <TipCalculator.BillInput />

              <TipCalculator.TipSelector />

              <TipCalculator.NumberOfPeopleInput />
            </TipCalculator.Cols>
          </TipCalculator.Content>
        </TipCalculator.Root>
      </section>
    </main>
  );
}

export default App;
