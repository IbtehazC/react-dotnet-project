import React from "react";
import { useEffect, useState } from "react";
import { Post } from "../models/post";
import Navbar from "./Navbar";
import PostsDashboard from "../../features/posts/dashboard/PostsDashboard";
import { v4 as uuid } from "uuid";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../state/reducers";
import { listPost, setSelectedPost, cancelSelectedPost } from "../state/actions";

function App() {
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const dispatch = useDispatch();
  const posts = useSelector((state: State) => state.post);
  const selectedPost = useSelector((state: State) => state.selectedPost);

  useEffect(() => {
    if (posts.length === 0) dispatch(listPost());
    // let posts: Post[] = [];
    // posts.forEach((post) => {
    //   post.createdAt = post.createdAt.split("T")[0];
    //   posts.push(post);
    // });
    setLoading(false);
  }, [dispatch]);

  function handleSelectPost(id: string) {
    const post = posts.find((x) => x.id === id)
    if (post === undefined) return 
    dispatch(setSelectedPost(post))
  }

  function handleCancelSelectPost() {
    dispatch(cancelSelectedPost())
    console.log(selectedPost);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectPost(id) : handleCancelSelectPost();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditPost(post: Post) {
    setSubmitting(true);
    if (post.id) {
      agent.Posts.update(post).then(() => {
        // setPosts([...posts.filter((p) => p.id !== post.id), post]);
        setSelectedPost(post);
        setEditMode(false);
        setSubmitting(false);
      });
    } else {
      post.id = uuid();
      agent.Posts.create(post).then(() => {
        // setPosts([...posts, post]);
        setSelectedPost(post);
        setEditMode(false);
        setSubmitting(false);
      });
    }
  }

  function handleDeletePost(id: string) {
    setSubmitting(true);
    agent.Posts.delete(id).then(() => {
      // setPosts([...posts.filter((p) => p.id !== id)]);
      setSubmitting(false);
    });
  }

  if (loading) return <LoadingComponent content="Loading App..." />;

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
        submitting={submitting}
      />
    </>
  );
}

export default App;
