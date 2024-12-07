import React from "react";
import Image from "next/image";
import { HiOutlineDotsVertical } from "react-icons/hi";

interface PostProps {
  post: {
    id: string;
    username: string;
    image: string;
    profileImg: string;
    caption: string;
  };
}

const Post = ({ post }: PostProps) => {
  return (
    <div className="bg-white my-7 border rounded-md">
      <div className="flex items-center p-5 border-b border-gray-100">
        <Image
          src={post.profileImg}
          alt={post.username}
          width={48}
          height={48}
          className="h-12 rounded-full object-cover border p-1 mr-3"
        />
        <p className="flex-1 font-bold">{post.username}</p>
        <HiOutlineDotsVertical className="h-5 cursor-pointer" />
      </div>
      <Image
        src={post.image}
        alt={post.caption}
        width={640}
        height={640}
        className="object-cover w-full"
      />

      <p className="p-5 truncate">
        <span className="font-bold mr-2">{post.username}</span>
        {post.caption}
      </p>
    </div>
  );
};

export default Post;
