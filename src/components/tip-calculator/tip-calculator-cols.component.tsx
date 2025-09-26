import React, { FC, PropsWithChildren, memo } from 'react';

const TipCalculatorCols: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="flex flex-col gap-10">
      {children}
    </div>
  );
};

export default memo(TipCalculatorCols);