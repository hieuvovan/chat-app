import { withPrivate } from '@HOCs/withPrivate';
import Post from 'containers/post-detail';
import { getPostById, getPosts } from '@services/posts';
import { isEmpty } from 'lodash';

const PostRenderer = withPrivate(Post);

export default function PostPage(props: any) {
  return <PostRenderer {...props} />;
}

export async function getStaticProps(context: any) {
  const postId = context.params?.id;

  if (!postId)
    return {
      notFound: true,
    };

  const post = await getPostById(postId);

  return {
    props: {
      post,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const resp = await getPosts({
    _page: 1,
  });

  const { data: posts = [] } = resp || {};

  return {
    paths: posts.map((post: any) => ({
      params: {
        id: post?.id,
      },
    })),
    fallback: true,
  };
}
