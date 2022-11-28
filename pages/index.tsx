import { withPrivate } from '@HOCs/index';
import Home from 'containers/home';
import { getPosts } from '@services/posts';

const HomeRenderer = withPrivate(Home);

export default function HomePage(props: any) {
  return <HomeRenderer {...props} />;
}

export async function getStaticProps() {
  const resp = await getPosts({
    _page: 1,
  });

  const { data: posts } = resp || {};

  return {
    props: { posts },
  };
}
