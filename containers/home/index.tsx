import * as React from 'react';
import { useSelector } from 'react-redux';

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const isLoggedIn = useSelector((state: any) => state);

  console.log('isLoggedIn', isLoggedIn);

  return <div>This is home page</div>;
}
