import * as React from 'react';
import { Controller } from 'react-hook-form';
import clsx from 'clsx';

export interface IControllerTextFieldProps {
  label: string;
  name: string;
  id?: string;
  type?: string;
  control: any;
  helperText?: string;
  error?: boolean;
  placeholder?: string;
}

export const ControllerTextField = (props: IControllerTextFieldProps) => {
  const {
    label,
    type = 'text',
    control,
    name,
    helperText,
    error,
    ...restProps
  } = props || {};

  return (
    <div>
      <label
        className={clsx({
          'text-danger': !!error,
        })}
      >
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            className={clsx({
              'text-field': true,
              'border-danger': !!error,
            })}
            type={type}
            {...field}
            {...restProps}
          />
        )}
      />
      {helperText && <p className="text-sm pt-1 text-danger">{helperText}</p>}
    </div>
  );
};
