import withPrivate from '@HOCs/withPrivate';
import * as React from 'react';

export interface IAppProps {}

function Home(props: IAppProps) {
  return (
    <div>
      <p>This is home page</p>
    </div>
  );
}

export default withPrivate(Home);
