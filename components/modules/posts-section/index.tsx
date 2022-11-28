import * as React from 'react';
import PostCard from './PostCard';

export interface IPostsSectionProps {
  title: string;
  posts: any;
}

export const PostsSection = (props: IPostsSectionProps) => {
  const { title, posts } = props;

  return (
    <div className="posts">
      <div className="posts-header">
        <h3 className="text-2xl">{title}</h3>
      </div>
      <div className="posts-body">
        <ul className="grid grid-cols-1 gap-6 posts-list">
          {posts?.map((post: any) => (
            <li
              key={post.id}
              className="post-item"
            >
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
