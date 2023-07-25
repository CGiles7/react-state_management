import React, { useState } from "react";

function PostCreate({ onCreatePost }) {
  const [type, setType] = useState("Text");
  const [content, setContent] = useState("");

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreatePost({ type, content });
    setType("Text");
    setContent("");
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create</legend>
        <div>
          <label htmlFor="type">Type: </label>
          <select
            id="type"
            name="type"
            value={type}
            onChange={handleTypeChange}
            required={true}
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          {type === "Text" ? (
            <textarea
              id="content"
              name="content"
              value={content}
              onChange={handleContentChange}
              required={true}
              rows={3}
            />
          ) : (
            <input
              id="content"
              name="content"
              type="url"
              value={content}
              onChange={handleContentChange}
              required={true}
            />
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default PostCreate;
