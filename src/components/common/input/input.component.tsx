import React, { ChangeEvent, FC, memo, useMemo } from 'react';
import clsx from 'clsx';

type InputProps = {
  label: string;
  value?: string;
  placeholder: string;
  onValueChange: (value: string) => void;
  error?: string;
};

const Input: FC<InputProps> = ({
  error,
  onValueChange,
  value,
  label,
  placeholder,
}) => {
  const id = useMemo(() => Math.random().toString(), []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onValueChange(e.target.value);
  };

  const labelClassName = useMemo(() => clsx('text-preset-5 text-gray-500'), []);
  const errorLabelClassName = useMemo(
    () => clsx('text-preset-5 text-orange-400'),
    [],
  );

  const inputClassName = useMemo(
    () =>
      clsx(
        'pl-12 min-w-[379px] rounded-md bg-gray-50 p-2 text-right text-preset-3' +
        ' text-green-900' +
          ' focus:border-2' +
          ' focus:border-green-400' +
          ' outline-none focus-visible:border-green-400',
        !!error && 'border-2 border-orange-400',
      ),
    [error],
  );

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-between">
        <label className={labelClassName} htmlFor={id}>
          {label}
        </label>

        {error && (
          <label className={errorLabelClassName} htmlFor={id}>
            {label}
          </label>
        )}
      </div>

      <div className="relative">
        <img
          className="absolute left-4 top-[18px]"
          src="/user-icon.svg"
          alt="user-icon"
        />
        <input
          className={inputClassName}
          id={id}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default memo(Input);
