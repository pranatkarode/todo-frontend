import { useState } from "react";

export default function TagInput({ tags, setTags }) {
  const removeTag = (index) => {
    // console.log("triggered");
    setTags((prev) => {
      return prev.filter((_, i) => i !== index);
    });
  };

  const addTag = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newTag = e.target.value;
      if (e.target.value.trim() !== "")
        if (!tags.includes(newTag)) {
          setTags((prev) => [...prev, newTag]);
        }
      e.target.value = "";
    }
  };
  console.log(tags);
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 border border-slate-500 rounded-lg p-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-slate-500 text-white text-sm px-3 py-1 rounded-full"
          >
            {tag}
            <button
              type="button"
              onClick={() => {
                removeTag(index);
              }}
              className=""
            >
              x
            </button>
          </div>
        ))}
        <div className="grow">
          <input
            type="text"
            placeholder="Type and press enter"
            onKeyDown={addTag}
            className="w-full focus:ring-0 border-none outline-none text-sm"
          />
        </div>
      </div>
    </div>
  );
}
