"use client";

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  const onClickHandler = () => {
    reset();
  };

  return (
    <div className="text-center mt-10 hover:text-amber-600">
      <h2 className="text-xl">Something went wrong</h2>
      <button onClick={onClickHandler}>Try again</button>
    </div>
  );
};

export default Error;
