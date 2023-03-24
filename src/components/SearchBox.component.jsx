"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBox = () => {
  const router = useRouter();
  const [inputText, setInputText] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!inputText) return;
    router.push(`/search/${inputText}`);

    setInputText("");
  };

  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <form
      className="max-w-6xl mx-auto flex items-center p-4"
      onSubmit={onSubmitHandler}
    >
      <input
        type="text"
        placeholder="Search for movies..."
        value={inputText}
        onChange={onChangeHandler}
        className="w-full py-4 rounded-sm text-xl bg-transparent placeholder-gray-500 outline-none"
      />
      <button
        disabled={!inputText}
        className="text-amber-600 disabled:text-gray-400 py-4 ml-3 text-xl"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
