import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile } from 'reducers/auth';

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const user = useSelector((state: any) => state.authReducer.user);

  return <div>This is homepage</div>;
}
