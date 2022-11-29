import { useRouter } from 'next/router';
import * as React from 'react';
import Image from 'next/image';
import { ImUser } from 'react-icons/im';

export interface IPostProps {
  post: any;
}

export default function Post(props: IPostProps) {
  const { post } = props;
  const router = useRouter();

  if (router.isFallback) return <div>Loading...</div>;

  return (
    <section className="post-detail-section">
      <div className="container mx-auto">
        <div className="w-2/3 mx-auto">
          <div className="post-cover h-96 relative">
            <Image
              src={post.imageUrl}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="post">
            <h4 className="text-3xl font-bold pt-4 text-center post-title">
              {post.title}
            </h4>
            <div className="flex items-start justify-center pt-4 post-author">
              <ImUser size={30} />
              <p className="auhor-name p-2">{post.author}</p>
            </div>
            <p className="text-xl pt-12 post-desc">{post.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
