import * as React from 'react';

export interface IPageProps {
  children: any;
}

export const Page = (props: IPageProps) => {
  const { children } = props;

  return <div className="pb-10 pt-24">{children}</div>;
};
