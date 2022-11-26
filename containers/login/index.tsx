import * as React from 'react';
import SignIn from './components/SignIn';
import { withPublic } from '@HOCs/index';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { login } from 'reducers/auth';

import { ILoginBody } from 'interfaces';
import { useRouter } from 'next/router';

import { useDispatch } from 'react-redux';

export interface ILoginProps {}

const validationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const Login = (props: ILoginProps) => {
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

  const router = useRouter();

  const dispatch: any = useDispatch();

  const onLoginSuccess = () => {
    router.push('/');
  };

  const onSignIn = async (data: ILoginBody) => {
    await dispatch(login(data, onLoginSuccess));
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
};

export default withPublic(Login);
