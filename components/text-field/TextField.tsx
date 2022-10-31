import * as React from 'react';
import { Controller } from 'react-hook-form';

export interface ITextFieldProps {
  label?: string;
  id?: string;
  type?: string;
  helperText?: string;
}

export const TextField = (props: ITextFieldProps) => {
  const { label, type = 'text', helperText, ...restProps } = props || {};
  return (
    <div>
      <label>{label}</label>
      <input
        className="text-field"
        type={type}
        {...restProps}
      />
      {helperText && <p className="text-sm pt-1 text-danger">{helperText}</p>}
    </div>
  );
};
