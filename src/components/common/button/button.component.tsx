import React, { FC, memo, PropsWithChildren } from 'react';
import clsx from 'clsx';

interface ButtonProps extends PropsWithChildren {
  variant?: 'primary' | 'secondary';
  onClick: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
                                   children,
                                   onClick,
                                   variant = 'primary',
                                   disabled,
                                 }) => {
  const baseClass = clsx(
    'w-full rounded-md px-8 py-4 text-preset-3 transition-colors duration-200',
    disabled
      ? 'cursor-not-allowed bg-green-750 text-green-800 opacity-60'
      : variant === 'primary'
        ? [
          // primary variant
          'bg-green-900 text-white',
          'hover:bg-green-400 hover:text-green-900',
          'active:bg-green-200 active:text-green-900',
        ]
        : [
          // secondary variant
          'bg-green-400 text-green-900',
          'hover:bg-green-200 hover:text-green-900',
          'active:bg-green-200 active:text-green-900',
        ],
  );

  return (
    <button type="button" onClick={onClick} disabled={disabled} className={baseClass}>
      {children}
    </button>
  );
};

export default memo(Button);
