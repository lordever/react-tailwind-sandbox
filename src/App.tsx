import React, { useCallback, useState } from 'react';
import './App.css';
import Button from './components/common/button/button.component';
import Input from './components/common/input/input.component';
import { TipCard } from './components/tip-card';

function App() {
  const [value, setValue] = useState<string>();

  const handleValueChange = useCallback(
    (v: string) => {
      setValue(v);
    },
    [setValue],
  );

  return (
    <div className="m-2 flex flex-col gap-5">
      <div className="flex flex-row gap-2">
        <Button onClick={() => {}}>15%</Button>
      </div>

      <div className="flex flex-row gap-2">
        <Input
          label="Number of People"
          value={value}
          onValueChange={handleValueChange}
          placeholder="0"
          error="Can't be zero"
        />
      </div>

      <div className="flex flex-row gap-2">
        <section className="max-w-[413px]">
          <TipCard.Root amount="12.50" total="87.40" onReset={() => {}}>
            <TipCard.Row>
              <TipCard.Value
                kind="amount"
                label="Tip Amount"
                subLabel="/ person"
              />
              <TipCard.Value kind="total" label="Total" subLabel="/ person" />
            </TipCard.Row>

            <TipCard.Actions>
              <TipCard.Reset />
            </TipCard.Actions>
          </TipCard.Root>
        </section>

        <section className="max-w-[413px]">
          <TipCard.Root
            amount="12.50"
            total="87.40"
            resetDisabled
            onReset={() => {}}
          >
            <TipCard.Row>
              <TipCard.Value
                kind="amount"
                label="Tip Amount"
                subLabel="/ person"
              />
              <TipCard.Value kind="total" label="Total" subLabel="/ person" />
            </TipCard.Row>

            <TipCard.Actions>
              <TipCard.Reset />
            </TipCard.Actions>
          </TipCard.Root>
        </section>
      </div>
    </div>
  );
}

export default App;
