import * as React from 'react';
import SignIn from './components/SignIn';
import { withPublic } from '@HOCs/index';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { login } from 'services';

import { ILoginBody } from 'interfaces';
import { useRouter } from 'next/router';

import { useDispatch } from 'react-redux';
import { setIsLoggedIn } from 'reducers/auth';

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

  const dispatch = useDispatch();

  const onLoginSuccess = () => {
    dispatch(setIsLoggedIn(true));
    router.push('/');
  };

  const onSignIn = async (data: ILoginBody) => {
    const resp = await login(data);
    const { isSuccess } = resp || {};

    isSuccess && onLoginSuccess();
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
