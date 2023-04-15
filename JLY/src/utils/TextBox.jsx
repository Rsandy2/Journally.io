import { Fragment, useState } from "react";
import {
  ArrowsPointingOutIcon,
  Bars3BottomLeftIcon,
} from "@heroicons/react/24/outline";
import "./TextBox.css";
const TextBox = () => {
  const [textData, setTextData] = useState("");
  const [title, setTitle] = useState("");
  const [currentSelection, setCurrentSelection] = useState("");
  const currentSelectionGrab = (e) =>
    setCurrentSelection(
      e.target.value.substring(e.target.selectionStart, e.target.selectionEnd)
    );

  const handleUpdate = (e) => {
    setTextData(e.target.value);
  };
  return (
    <Fragment>
      {/* <div className="Debug text-sm">
        <div className="">Debug: {textData}</div>
        <div className="">Debug Selection: {currentSelection}</div>
      </div> */}
      <main className="textarea-container">
        <ArrowsPointingOutIcon className="expand-arrow-button" />
        <div className="textbox-header">
          <input
            type="text"
            className="textbox-input text-xl"
            placeholder="Untitled"
            maxLength={52}
            value={title}
          />
          {/* <div className="tags-container">
            <div className="tags-div-c">
              <p className="text-sm"> Feelings</p>
            </div>
            <Bars3BottomLeftIcon className="textbox-tags" />
          </div> */}
        </div>
        <textarea
          type="text"
          placeholder="Begin Typing to create Journal Entry..."
          className="text-area-overlay text-sm"
          value={textData}
          onChange={(e) => {
            handleUpdate(e);
          }}
          onSelect={currentSelectionGrab}
          required
        />
        <button
          className="submit-button"
          onClick={() => {
            handleSubmit();
          }}
        >
          Save
        </button>
      </main>
    </Fragment>
  );
};

export default TextBox;
