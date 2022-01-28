import React from "react";

interface Props {
  openForm: () => void;
}

function Navbar({ openForm }: Props) {
  return (
    <nav className="w-screen h-12 bg-neutral-900 text-white flex justify-between items-center fixed border-b border-zinc-700">
      <div className=" uppercase pl-4">LOGO</div>
      <ul className="pr-8 flex gap-4 items-center">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          <button
            onClick={openForm}
            className=" px-5 py-2 rounded-sm bg-blue-600"
          >
            Create Post
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
