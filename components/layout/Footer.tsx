import * as React from 'react';

export interface IFooterProps {}

const Footer = React.forwardRef((props: IFooterProps, ref: any) => {
  return <div ref={ref}>This is Footer</div>;
});

export default Footer;
