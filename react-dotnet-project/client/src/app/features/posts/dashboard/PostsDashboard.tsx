import React from "react";
import { Post } from "../../../models/post";
import PostDetails from "../details/PostDetails";
import PostEditForm from "../forms/PostEditForm";
import PostList from "./PostList";

interface Props {
  posts: Post[];
  selectedPost: Post | undefined;
  selectPost: (id: string) => void;
  cancelSelectPost: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (post: Post) => void;
  deletePost: (id: string) => void;
}

export default function PostsDashboard({
  posts,
  selectedPost,
  selectPost,
  cancelSelectPost,
  editMode,
  openForm,
  closeForm,
  createOrEdit,
  deletePost
}: Props) {
  return (
    <div className="grid grid-cols-4 pt-12 bg-black">
      <ul className=" col-start-1 col-span-2 text-white text-lg">
        <PostList posts={posts} selectPost={selectPost} />
      </ul>
      <div className="col-start-3 col-span-2">
        {selectedPost && !editMode && (
          <PostDetails
            post={selectedPost}
            cancelSelectPost={cancelSelectPost}
            openForm={openForm}
            deletePost={deletePost}
          />
        )}
        {editMode && (
          <PostEditForm
            closeForm={closeForm}
            post={selectedPost}
            createOrEdit={createOrEdit}
          />
        )}
      </div>
    </div>
  );
}
