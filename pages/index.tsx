import withPrivate from '@HOCs/withPrivate';
import * as React from 'react';

export interface IAppProps {}

function Home(props: IAppProps) {
  return <div>This is home page</div>;
}

export default withPrivate(Home);
