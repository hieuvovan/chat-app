import * as React from 'react';
import { ControllerTextField } from '@components/text-field';

export interface ISignInProps {
  control: any;
  errors: any;
  onSubmit: () => {};
}

export default function SignIn(props: ISignInProps) {
  const { control, errors, onSubmit } = props;
  return (
    <div className="section-wrapper w-1/4">
      <div className="section-header">
        <p className="section-title pb-4 text-center">
          Sign in to your account
        </p>
      </div>
      <div className="section-body bg-white p-8 border rounded shadow-slate-100">
        <form>
          <div className="grid grid-rows-2 gap-4">
            <ControllerTextField
              label="Email"
              name="email"
              control={control}
              helperText={errors.email?.message}
              error={!!errors.email}
              placeholder="Email"
            />
            <ControllerTextField
              label="Password"
              name="password"
              type="password"
              control={control}
              helperText={errors.password?.message}
              error={!!errors.password}
              placeholder="Password"
            />
          </div>
        </form>
        <button
          className="btn-primary w-full mt-4"
          onClick={onSubmit}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
