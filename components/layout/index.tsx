import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Page } from '@components/modules';

export interface ILayoutProps {
  children: React.ReactElement;
}

const Layout = (props: ILayoutProps) => {
  const { children } = props;

  const headerRef = useRef<HTMLInputElement | null>(null);
  const footerRef = useRef<HTMLInputElement | null>(null);
  const mainRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    handleSetChildrenMinHeight();
  }, []);

  const handleSetChildrenMinHeight = () => {
    const footerHeight = footerRef?.current?.clientHeight;

    // Cal main minHeight
    mainRef.current!.style!.minHeight = `calc(100%  - ${footerHeight}px`;
  };

  return (
    <div className="w-full h-screen relative">
      <Header ref={headerRef} />
      <main ref={mainRef}>
        <Page>{children}</Page>
      </main>
      <Footer ref={footerRef} />
    </div>
  );
};

export default Layout;
