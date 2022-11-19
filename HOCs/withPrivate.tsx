import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthStorageService } from '@services/authStorageService';

const authStorageService = new AuthStorageService();

export default function withPrivate(WrappedComponent: any) {
  const WithPrivate = (props: any) => {
    const isLoggedIn = !!authStorageService.token;
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
      authCheck();

      router.events.on('routeChangeStart', () => setAuthorized(false));
      router.events.on('routeChangeComplete', authCheck);

      return () => {
        router.events.off('routeChangeStart', () => setAuthorized(false));
        router.events.off('routeChangeComplete', authCheck);
      };
    }, []);

    const authCheck = () => {
      if (isLoggedIn) setAuthorized(true);
      else {
        setAuthorized(false);
        router.push('/login');
      }
    };

    return authorized ? <WrappedComponent {...props} /> : null;
  };

  return WithPrivate;
}
