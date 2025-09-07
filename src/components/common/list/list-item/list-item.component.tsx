import React, { FC, PropsWithChildren } from 'react';

const ListItem: FC<PropsWithChildren> = ({ children }) => {
  return (
    <li className="flex items-center gap-2">
      <img src="/checkmark.svg" alt="" className="h-[21px] w-[21px] shrink-0" />
      <span>{children}</span>
    </li>
  );
};

export default ListItem;
