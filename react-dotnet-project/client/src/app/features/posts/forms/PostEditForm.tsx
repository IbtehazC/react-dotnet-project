import { ChangeEvent, FormEvent, useState } from "react";
import { Post } from "../../../app/models/post";

interface Props {
  post: Post | undefined;
  closeForm: () => void;
  createOrEdit: (post: Post) => void;
  submitting: boolean;
}

export default function PostEditForm({
  post: selectedPost,
  closeForm,
  createOrEdit,
  submitting
}: Props) {
  const initialState = selectedPost ?? {
    id: "",
    title: "",
    details: "",
    like: 0,
    category: "Games",
    createdAt: "2021-12-03T12:48:00.6458234",
  };

  const [post, setPost] = useState(initialState);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    createOrEdit(post);
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  }

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className=" bg-neutral-900 border border-zinc-700 rounded-lg m-4 p-8"
    >
      <label htmlFor="title" className="text-white">
        Title:{" "}
      </label>{" "}
      <br />
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={post.title}
        onChange={handleInputChange}
        className="w-full"
      />
      <br />
      <label htmlFor="description" className="text-white">
        Description:{" "}
      </label>
      <br />
      <textarea
        name="details"
        cols={30}
        rows={10}
        placeholder="Description"
        className="w-full"
        value={post.details}
        onChange={handleInputChange}
      />
      <br />
      <button
        type="submit"
        className=" px-5 py-2 rounded-sm bg-blue-600 text-white"
      >
        Edit
      </button>
      <button
        className=" ml-2 px-5 py-2 rounded-sm bg-red-600 text-white"
        onClick={closeForm}
      >
        Cancel
      </button>
    </form>
  );
}
