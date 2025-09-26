import React, { FC, memo, PropsWithChildren } from 'react';
import clsx from 'clsx';

interface ButtonProps extends PropsWithChildren {
  variant?: 'primary' | 'secondary';
  onClick: () => void;
  disabled?: boolean;
  selected?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled,
  selected,
}) => {
  const baseClass = clsx(
    'w-full rounded-md px-4 py-2 text-preset-3 transition-colors duration-200',
    {
      // disabled
      'cursor-not-allowed bg-green-750 text-green-800 opacity-60': disabled,

      // selected
      'bg-green-200 text-green-900': !disabled && selected,

      // primary variant
      'bg-green-900 text-white hover:bg-green-400 hover:text-green-900 active:bg-green-200 active:text-green-900':
        !disabled && !selected && variant === 'primary',

      // secondary variant
      'bg-green-400 text-green-900 hover:bg-green-200 hover:text-green-900 active:bg-green-200 active:text-green-900':
        !disabled && !selected && variant === 'secondary',
    },
  );

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={baseClass}
    >
      {children}
    </button>
  );
};

export default memo(Button);
