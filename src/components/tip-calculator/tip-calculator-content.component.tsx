import React, { FC, memo, PropsWithChildren } from 'react';

const TipCalculatorContent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col-reverse gap-10 md:flex-row md:gap-12">
      {children}
    </div>
  );
};

export default memo(TipCalculatorContent);
