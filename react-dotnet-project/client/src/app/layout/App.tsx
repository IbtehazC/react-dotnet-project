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
import { listPost } from "../state/actions";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state: State) => state.post);

  useEffect(() => {
    dispatch(listPost());
    agent.Posts.list().then((response) => {
      let posts: Post[] = [];
      response.forEach((post) => {
        post.createdAt = post.createdAt.split("T")[0];
        posts.push(post);
      });
      setPosts(posts);
      setLoading(false);
    });
  }, [dispatch]);

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
    setSubmitting(true);
    if (post.id) {
      agent.Posts.update(post).then(() => {
        setPosts([...posts.filter((p) => p.id !== post.id), post]);
        setSelectedPost(post);
        setEditMode(false);
        setSubmitting(false);
      });
    } else {
      post.id = uuid();
      agent.Posts.create(post).then(() => {
        setPosts([...posts, post]);
        setSelectedPost(post);
        setEditMode(false);
        setSubmitting(false);
      });
    }
  }

  function handleDeletePost(id: string) {
    setSubmitting(true);
    agent.Posts.delete(id).then(() => {
      setPosts([...posts.filter((p) => p.id !== id)]);
      setSubmitting(false);
    });
  }

  if (loading) return <LoadingComponent content="Loading App..." />;

  return (
    <>
      <Navbar openForm={handleFormOpen} />
      <h1 className="pt-12 text-white">{state.length}</h1>
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
