import { useEffect, useState } from "react";
import axios from "axios";
import { Post } from "../models/post";
import Navbar from "./Navbar";
import PostsDashboard from "../features/posts/dashboard/PostsDashboard";
import { v4 as uuid } from "uuid";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Post[]>("http://localhost:5000/api/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);

  function handleSelectPost(id: string) {
    setSelectedPost(posts.find((x) => x.id === id));
  }

  function handleCancelSelectPost() {
    setSelectedPost(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectPost(id) : handleCancelSelectPost();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditPost(post: Post) {
    post.id
      ? setPosts([...posts.filter((p) => p.id !== post.id), post])
      : setPosts([...posts, { ...post, id: uuid() }]);
    setEditMode(false);
    setSelectedPost(post);
  }

  function handleDeletePost(id: string) {
    setPosts([...posts.filter((p) => p.id !== id)]);
  }

  return (
    <>
      <Navbar openForm={handleFormOpen} />
      <PostsDashboard
        posts={posts}
        selectedPost={selectedPost}
        selectPost={handleSelectPost}
        cancelSelectPost={handleCancelSelectPost}
        editMode={editMode}
        openForm={handleFormOpen}
        closeForm={handleFormClose}
        createOrEdit={handleCreateOrEditPost}
        deletePost={handleDeletePost}
      />
    </>
  );
}

export default App;
