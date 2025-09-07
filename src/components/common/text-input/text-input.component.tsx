import React, { FC, useCallback, useId, useMemo, useState } from 'react';
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
  inputValidator?: (value: string) => boolean;
  errorMessage?: string;
}

const TextInput: FC<TextInputProps> = (props) => {
  const {
    value,
    label,
    onValueChange,
    className,
    placeholder,
    inputValidator,
    errorMessage = 'Invalid value',
    id,
    onBlur,
    onFocus,
    ...rest
  } = props;

  const generatedId = useId();
  const inputId = id ?? `text-input-${generatedId}`;

  const [touched, setTouched] = useState(false);
  const [hasError, setHasError] = useState(false);

  const isEmpty = !String(value ?? '').trim();
  const showError = touched && !isEmpty && hasError;

  const classNames = clsx(
    'rounded-md pl-[24px] h-[56px] focus:outline-none',
    showError
      ? 'border border-red text-red bg-red-100 placeholder:text-red'
      : 'border border-gray focus:border-blue-800 placeholder:text-gray',
    className,
  );

  const runValidation = useCallback(
    (v: string) => {
      if (!inputValidator) return false;
      return !inputValidator(v);
    },
    [inputValidator],
  );

  const handleBlur = useCallback<React.FocusEventHandler<HTMLInputElement>>(
    (e) => {
      setTouched(true);
      setHasError(runValidation(e.target.value));
      onBlur?.(e);
    },
    [onBlur, runValidation],
  );

  const handleFocus = useCallback<React.FocusEventHandler<HTMLInputElement>>(
    (e) => {
      onFocus?.(e);
    },
    [onFocus],
  );

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      const v = e.target.value;
      onValueChange(v);

      if (touched) {
        setHasError(runValidation(v));
      }
    },
    [onValueChange, runValidation, touched],
  );

  const errorId = useMemo(() => (showError ? `${inputId}-error` : undefined), [showError, inputId]);

  return (
    <div className="flex flex-col gap-100">
      <div className="flex justify-between">
        <label className="text-preset-3" htmlFor={inputId}>
          {label}
        </label>
        {showError && (
          <label className="text-preset-3 text-red" id={errorId} htmlFor={inputId}>
            {errorMessage}
          </label>
        )}
      </div>

      <input
        id={inputId}
        value={value}
        placeholder={placeholder}
        className={classNames}
        aria-invalid={showError || undefined}
        aria-describedby={errorId}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
