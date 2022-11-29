import * as React from 'react';
import { PostsSection } from '@components/modules';

export interface IHomeProps {
  posts: any;
}

export default function Home(props: IHomeProps) {
  const { posts } = props;

  return (
    <section className="section-home">
      <div className="container mx-auto">
        <div className="top-posts w-2/3 mx-auto">
          <PostsSection
            title="Top posts"
            posts={posts}
          />
        </div>
      </div>
    </section>
  );
}
