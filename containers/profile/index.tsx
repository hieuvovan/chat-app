import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'reducers';

export interface IProfileProps {}

export default function Profile(props: IProfileProps) {
  const user = useSelector((state: RootState) => state.authReducer.user);

  return (
    <div>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}
