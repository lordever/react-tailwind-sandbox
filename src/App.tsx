import React from 'react';
import './App.css';
import { TipCalculator } from './components/tip-calculator';
import { TipCard } from './components/tip-card';

function App() {
  return (
    <main className="flex min-h-full w-full items-center justify-center">
      <TipCalculator.Root
        allowedPercents={[5, 10, 15, 20, 30, 50]}
        selectedTipPercent={15}
      >
        <TipCalculator.Content>
          <TipCalculator.Cols>
            <TipCalculator.BillInput />

            <TipCalculator.TipSelector />

            <TipCalculator.NumberOfPeopleInput />
          </TipCalculator.Cols>

          <TipCard.Root>
            <div className="flex h-full flex-col justify-between">
              <section>
                <TipCard.Row>
                  <TipCard.Value
                    label="Tip Amount"
                    subLabel="/ person"
                    kind="amount"
                  />
                </TipCard.Row>

                <TipCard.Row>
                  <TipCard.Value
                    label="Total"
                    subLabel="/ person"
                    kind="total"
                  />
                </TipCard.Row>
              </section>

              <TipCard.Actions>
                <TipCard.Reset />
              </TipCard.Actions>
            </div>
          </TipCard.Root>
        </TipCalculator.Content>
      </TipCalculator.Root>
    </main>
  );
}

export default App;
