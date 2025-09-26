import React, { ChangeEvent, useId } from 'react';
import clsx from 'clsx';

type CommonProps = {
  label: string;
  placeholder: string;
  error?: string;
};

type StringInputProps = CommonProps & {
  kind?: 'string';
  value?: string;
  onValueChange: (value: string | undefined) => void;
};

type NumberInputProps = CommonProps & {
  kind: 'number';
  value?: number;
  onValueChange: (value: number | undefined) => void;
  allowNegative?: boolean;
};

export type InputProps = StringInputProps | NumberInputProps;

export function Input(props: InputProps) {
  const id = useId();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;

    if (props.kind === 'number') {
      const trimmed = raw.trim();

      if (trimmed === '') {
        props.onValueChange(undefined);
        return;
      }

      const n = Number(trimmed.replace(',', '.'));

      if (!Number.isFinite(n)) {
        return;
      }
      if (!props.allowNegative && n < 0) return;

      props.onValueChange(n);
    } else {
      const next = raw === '' ? undefined : raw;
      props.onValueChange(next);
    }
  };

  const labelClassName = clsx('text-preset-5 text-gray-500');
  const errorLabelClassName = clsx('text-preset-5 text-orange-400');
  const inputClassName = clsx(
    'min-w-[379px] rounded-md bg-gray-50 p-2 pl-12 text-right text-preset-3 text-green-900',
    'outline-none focus:border-2 focus:border-green-400 focus-visible:border-green-400',
    !!props.error && 'border-2 border-orange-400',
  );

  const stringValue =
    props.kind === 'number'
      ? (props.value === undefined ? '' : String(props.value))
      : (props.value ?? '');

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-between">
        <label className={labelClassName} htmlFor={id}>
          {props.label}
        </label>

        {props.error && (
          <label className={errorLabelClassName} htmlFor={id}>
            {props.error}
          </label>
        )}
      </div>

      <div className="relative">
        <img className="absolute left-4 top-[18px]" src="/user-icon.svg" alt="" />
        <input
          id={id}
          className={inputClassName}
          type="text"
          inputMode={props.kind === 'number' ? 'decimal' : 'text'}
          placeholder={props.placeholder}
          value={stringValue}
          onChange={handleInputChange}
          aria-invalid={!!props.error}
        />
      </div>
    </div>
  );
}
