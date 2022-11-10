import * as React from 'react';
import Link from 'next/link';

export interface ILinkProps {
  href: string;
  children: any;
}

export default function NextLink(props: any) {
  const { href, children, ...restProps } = props;

  return (
    <Link href={href}>
      <a {...restProps}>{children}</a>
    </Link>
  );
}
