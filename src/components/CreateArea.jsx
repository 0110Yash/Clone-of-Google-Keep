import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function handleTitle(event) {
    setTitle(event.target.value);
  }
  function handleText(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleTitle}
          value={title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleText}
          value={text}
        />
        <button
          onClick={(event) => {
            const saveObj = {
              title: title,
              text: text
            };
            setTitle("");
            setText("");
            props.handleClick(saveObj);
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
