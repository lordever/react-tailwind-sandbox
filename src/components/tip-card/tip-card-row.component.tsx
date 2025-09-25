import React, { FC, memo, PropsWithChildren } from 'react';

const Row: FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex flex-col gap-6">{children}</div>;
};

export default memo(Row);
