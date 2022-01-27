import React, { useState } from "react";

export const AddTodo = (props) => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const submit = (e) => {
    if (!title || !desc) {
      alert("Title or Description cannot be empty");
    } else {
      props.addTodo(title, desc);

      settitle("");
      setdesc("");
    }
    e.preventDefault();
  };

  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            To-do Title
          </label>
          <input
            type="text"
            className="form-control"
            id="Title"
            aria-describedby="emailHelp"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={desc}
            className="form-control"
            id="desc"
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-success btn-sm">
          Add To-do
        </button>
      </form>
    </div>
  );
};
