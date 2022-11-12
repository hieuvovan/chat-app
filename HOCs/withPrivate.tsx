import * as React from 'react';
import { useRouter } from 'next/router';
import { AuthStorageService } from '@services/authStorageService';

const authStorageService = new AuthStorageService();

export default function withPrivate(WrappedComponent: any) {
  const WithPrivate = (props: any) => {
    const isLoggedIn = !!authStorageService.token;
    const router = useRouter();

    React.useEffect(() => {
      if (!isLoggedIn) router.push('/login');
    }, []);

    if (!isLoggedIn) return null;

    return <WrappedComponent {...props} />;
  };

  return WithPrivate;
}
