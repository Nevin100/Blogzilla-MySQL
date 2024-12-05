import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");
  console.log(value);

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status :</b> Draft
          </span>
          <span>
            <b>Visibility :</b> Public
          </span>
          <input type="file" name="" id="file" style={{ display: "none" }} />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as Draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="Art" id="Art" />
            <label htmlFor="Art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Science" id="Science" />
            <label htmlFor="Science">Science</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Technology" id="Technology" />
            <label htmlFor="Technology">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Cinema" id="Cinema" />
            <label htmlFor="Cinema">Cinema</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Design" id="Design" />
            <label htmlFor="Design">Design</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Food" id="Food" />
            <label htmlFor="Food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
