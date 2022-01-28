import React from "react";
import { Post } from "../../../app/models/post";

interface Props {
  posts: Post[];
  selectPost: (id: string) => void;
}

export default function PostList({ posts, selectPost }: Props) {
  return (
    <>
      {posts.map((post) => (
        <li key={post.id}>
          <div
            className="bg-neutral-900 m-4 p-8 rounded-xl border border-zinc-700 hover:cursor-pointer"
            onClick={() => selectPost(post.id)}
          >
            <h2 className="text-xl tex">{post.title}</h2>
            <div className="flex justify-between text-xs text-gray-600">
              <p className="border rounded-sm">{post.category}</p>
              <p>
                Likes: <span className=" text-blue-600">{post.like}</span>
              </p>
            </div>
            <p className="text-xs text-gray-600">{post.createdAt}</p>
          </div>
        </li>
      ))}
    </>
  );
}
