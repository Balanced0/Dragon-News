import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const RightSideBar = () => {
  return (
    <div>
      <h2 className="mb-4 font-bold">Login With</h2>
      <div className="flex flex-col gap-4">
        <button className="btn flex w-full items-center justify-center gap-2">
          <FaGoogle /> Login With Google
        </button>
        <button className="btn flex w-full items-center justify-center gap-2">
          <FaGithub /> Login With Github
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
