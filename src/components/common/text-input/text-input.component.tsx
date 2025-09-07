import React, { FC, useCallback, useId, useMemo } from 'react';
import clsx from 'clsx';

type NativeInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'value' | 'defaultValue' | 'onChange'
>;

interface TextInputProps extends NativeInputProps {
  value: string;
  label: string;
  onValueChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  valid?: boolean;
  errorMessage?: string;
}

const EmailTextInput: FC<TextInputProps> = (props) => {
  const {
    value,
    label,
    onValueChange,
    className,
    placeholder,
    valid,
    errorMessage = 'Invalid value',
    id,
    onBlur,
    onFocus,
    ...rest
  } = props;

  const generatedId = useId();
  const inputId = id ?? `text-input-${generatedId}`;

  const classNames = clsx(
    'rounded-md pl-[24px] h-[56px] focus:outline-none',
    !valid
      ? 'border border-red text-red bg-red-100 placeholder:text-red'
      : 'border border-gray focus:border-blue-800 placeholder:text-gray',
    className,
  );

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      const v = e.target.value;
      onValueChange(v);
    },
    [onValueChange],
  );

  const errorId = useMemo(
    () => (!valid ? `${inputId}-error` : undefined),
    [valid, inputId],
  );

  return (
    <div className="flex flex-col gap-100">
      <div className="flex justify-between">
        <label className="text-preset-3" htmlFor={inputId}>
          {label}
        </label>
        {!valid && (
          <label
            className="text-preset-3 text-red"
            id={errorId}
            htmlFor={inputId}
          >
            {errorMessage}
          </label>
        )}
      </div>

      <input
        id={inputId}
        value={value}
        placeholder={placeholder}
        className={classNames}
        aria-invalid={!valid || undefined}
        aria-describedby={errorId}
        onChange={handleChange}
        type="email"
        {...rest}
      />
    </div>
  );
};

export default EmailTextInput;
