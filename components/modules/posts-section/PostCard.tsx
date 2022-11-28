import React, { useState } from 'react';
import Image from 'next/image';
import { TextEllipsis } from '@components/text-state';

export interface IPostCard {
  post: any;
}

export default function PostCard(props: IPostCard) {
  const { post } = props;
  const [errorImages, setErrorImages] = useState<any[]>([]);

  return errorImages?.includes(post.id) ? null : (
    <div className="post flex">
      <div className="post-cover w-2/5 relative h-32">
        <Image
          src={post.imageUrl}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          onError={() =>
            setErrorImages((prevState: any) => {
              return [...prevState, post.id];
            })
          }
        />
      </div>
      <div className="post-info w-3/5 pl-4">
        <h4 className="text-xl font-bold post-title">{post.title}</h4>
        <p className="post-desc">
          <TextEllipsis lines={3}>{post.description}</TextEllipsis>
        </p>
      </div>
    </div>
  );
}
