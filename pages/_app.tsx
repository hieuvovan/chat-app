import type { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@components/layout';

import { reduxWrapper } from 'store/store';
import { useSelector } from 'react-redux';

import '../styles/globals.css';
import { getProfile } from 'reducers/auth';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available

  const user = useSelector((state: any) => state.auth);

  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

MyApp.getInitialProps = reduxWrapper.getInitialAppProps(
  (store) =>
    async ({ Component, ctx }: any) => {
      const { accessToken = '' } = ctx?.req?.cookies || {};

      if (accessToken) {
        await store.dispatch(getProfile(accessToken));
      }

      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps({ ...ctx, store })
            : {}),
          store,
        },
      };
    }
);

export default reduxWrapper.withRedux(MyApp);
