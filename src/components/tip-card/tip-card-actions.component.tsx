import React, { FC, memo, PropsWithChildren } from 'react';
import clsx from 'clsx';

const Actions: FC<PropsWithChildren> = ({ children }) => {
  return <div className={clsx('flex w-full items-center')}>{children}</div>;
};

export default memo(Actions);
