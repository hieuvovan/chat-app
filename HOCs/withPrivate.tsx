import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthStorageService } from '@services/authStorageService';

const authStorageService = new AuthStorageService();

export const withPrivate = (WrappedComponent: any) => {
  const WithPrivate = (props: any) => {
    const isLoggedIn = !!authStorageService.token;
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
      authCheck();
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
};
