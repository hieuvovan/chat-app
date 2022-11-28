import * as React from 'react';

export interface ITextEllipsisProps {
  lines: number;
  children: any;
}

export const TextEllipsis = (props: ITextEllipsisProps) => {
  const { lines = 1, children } = props;

  return <p className={`overflow-ellipsis line-clamp-${lines}`}>{children}</p>;
};
