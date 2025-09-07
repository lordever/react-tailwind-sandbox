import React, { FC, PropsWithChildren } from 'react';

const Card: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="max-w-[904px] rounded-3xl md:px-6 md:py-8 bg-white">
      {children}
    </div>
  );
};

export default Card;