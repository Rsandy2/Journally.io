import { createRef, Fragment, useRef, useState } from "react";
import {
  handleToggle,
  handleUpdate,
  handleWordCount,
} from "../../../utils/handlers";
import {
  ArrowsPointingOutIcon,
  Bars3BottomLeftIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import "./TextBox.css";
const TextBox = () => {
  const [textData, setTextData] = useState("");
  const [title, setTitle] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [currentSelection, setCurrentSelection] = useState("");
  const currentSelectionGrab = (e) =>
    setCurrentSelection(
      e.target.value.substring(e.target.selectionStart, e.target.selectionEnd)
    );

  const [infoActive, setInfoActive] = useState(false);

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
            alt="title"
            onChange={(e) => {
              handleUpdate(e, setTitle);
            }}
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
          alt="text-box"
          onChange={(e) => {
            handleUpdate(e, setTextData);
            handleWordCount(e, setWordCount);
          }}
          onSelect={currentSelectionGrab}
          required
        />
        <button
          className="submit-button"
          onClick={() => {
            // console.log;
          }}
        >
          Save
        </button>
      </main>
      <button
        className="info-highlight"
        onClick={() => handleToggle(setInfoActive, infoActive)}
      >
        <InformationCircleIcon
          className={`logo-default ${
            !infoActive ? "info-inactive" : "info-circle"
          }`}
        />
        <div>
          {infoActive && (
            <p className="info-text">
              Word Count: <span>{wordCount}</span>
            </p>
          )}
        </div>
      </button>
    </Fragment>
  );
};

export default TextBox;
