import React, { FC, memo, PropsWithChildren } from 'react';


const Price: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-row text-preset-1 text-green-400">
      <span>$</span>
      <span>{children}</span>
    </div>
  );
};

export default memo(Price);
