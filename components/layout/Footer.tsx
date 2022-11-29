import * as React from 'react';

export interface IFooterProps {}

// eslint-disable-next-line react/display-name
const Footer = React.forwardRef((props: IFooterProps, ref: any) => {
  return (
    <footer
      className="bg-gray-200"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="footer-wrapper py-8">
          <p className="text-center max-w-2xl mx-auto">
            DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for
            software developers. With you every step of your journey.
          </p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
