import * as React from 'react';
import SignIn from './components/SignIn';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export interface ILoginProps {}

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required(),
  password: yup.string().required(),
});

export default function Login(props: ILoginProps) {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const onSignIn = (data: object) => {
    console.log(data);
  };

  return (
    <section className="section-login flex-center min-h-screen">
      <SignIn
        control={control}
        errors={errors}
        onSubmit={handleSubmit(onSignIn)}
      />
    </section>
  );
}
