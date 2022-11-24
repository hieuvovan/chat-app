import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthStorageService } from '@services/authStorageService';

const authStorageService = new AuthStorageService();

export const withPublic = (WrappedComponent: any) => {
  const WithPublic = (props: any) => {
    const isLoggedIn = !!authStorageService.token;
    const router = useRouter();
    const [authorized, setAuthorized] = useState(true);

    useEffect(() => {
      authCheck();
    }, []);

    const authCheck = () => {
      if (isLoggedIn) {
        router.push('/');
      } else {
        setAuthorized(false);
      }
    };

    console.log('test');

    return !authorized ? <WrappedComponent {...props} /> : null;
  };

  return WithPublic;
};
