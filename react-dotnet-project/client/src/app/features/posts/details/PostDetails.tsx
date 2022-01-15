import React from "react";
import { Post } from "../../../app/models/post";

interface Props {
  post: Post;
  cancelSelectPost: () => void;
  openForm: (id: string) => void;
  deletePost: (id: string) => void;
  submitting: boolean;
}

export default function PostDetails({
  post,
  cancelSelectPost,
  openForm,
  deletePost,
}: Props) {
  return (
    <div className="bg-neutral-900 border border-zinc-700 rounded-lg m-4 p-8">
      <h2 className="text-xl text-white">{post.title}</h2>
      <p className="text-sm text-gray-300">{post.details}</p>
      <p className="inline-block border rounded-sm text-white">
        {post.category}
      </p>
      <p className="inline-block text-white">
        Likes: <span className="text-blue-600">{post.like}</span>
      </p>
      <p className="text-xs text-gray-600">{post.createdAt}</p>
      <button
        className="text-blue-600 px-8 py-2"
        onClick={() => openForm(post.id)}
      >
        Edit
      </button>
      <button
        className="text-red-600 px-8 py-2"
        onClick={() => deletePost(post.id)}
      >
        Delete
      </button>
      <button className="text-red-600 px-8 py-2" onClick={cancelSelectPost}>
        Cancel
      </button>
    </div>
  );
}
