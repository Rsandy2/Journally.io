import {
  ArrowsPointingOutIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { useEntries } from "../../../hooks/useEntries";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  handleToggle,
  handleUpdate,
  handleWordCount,
} from "../../../utils/handlers";
import "./TextBox.css";
const TextBox = () => {
  const [wordCount, setWordCount] = useState(0);
  const [currentSelection, setCurrentSelection] = useState("");
  const currentSelectionGrab = (e) =>
    setCurrentSelection(
      e.target.value.substring(e.target.selectionStart, e.target.selectionEnd)
    );

  const [infoActive, setInfoActive] = useState(false);

  const { data: loadedEntries, ...entriesUtil } = useEntries();

  const navigate = useNavigate();
  const { state, pathname } = useLocation();
  const { title = "", body = "" } = state || "";

  console.log(title);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: title,
      body: body,
    },
  });
  const onSubmit = async (data) => {
    if (pathname === "/") {
      await entriesUtil.fetchData(data, false);
    }

    if (pathname === "/edit") {
      const { _id } = state;
      data._id = _id;
      await entriesUtil.updateData(data);
    }
    navigate("/entries");
  };

  return (
    <Fragment>
      {/* <div className="Debug text-sm">
        <div className="">Debug: {textData}</div>
        <div className="">Debug Selection: {currentSelection}</div>
      </div> */}
      <div className="textaround">
        {/* <main className="textarea-container"> */}
        <form className="textarea-container" onSubmit={handleSubmit(onSubmit)}>
          <ArrowsPointingOutIcon className="expand-arrow-button" />
          <div className="textbox-header">
            <input
              type="text"
              className="textbox-input text-xl"
              placeholder="Untitled"
              maxLength={52}
              alt="title"
              // defaultValue={}
              {...register("title")}
            />
          </div>
          <textarea
            type="text"
            placeholder="Begin Typing to create Journal Entry..."
            className="text-area-overlay text-sm"
            alt="text-box"
            onSelect={currentSelectionGrab}
            {...register("body")}
          />
          <input className="submit-button" type="submit" />
        </form>
        {/* </main> */}

        <button onClick={() => navigate("/entries")}>Entries</button>
      </div>
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
