import React, { useState } from 'react';
import Image from 'next/image';
import { TextEllipsis } from '@components/text-state';
import { ImUser } from 'react-icons/im';
import Link from 'next/link';

export interface IPostCard {
  post: any;
}

export default function PostCard(props: IPostCard) {
  const { post } = props;
  const [errorImages, setErrorImages] = useState<any[]>([]);

  return errorImages?.includes(post.id) ? null : (
    <div className="post flex items-center">
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
        <div className="author flex items-center">
          <ImUser />
          <p className="auhor-name p-2">{post.author}</p>
        </div>
        <div className="post-desc text-gray-500">
          <TextEllipsis lines={3}>{post.description}</TextEllipsis>
        </div>
      </div>
    </div>
  );
}
