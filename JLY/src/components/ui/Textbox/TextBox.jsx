import { useContext, useEffect } from "react";
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
import { toast, Toaster } from "react-hot-toast";
import { UserContext } from "../../../utils/context";
const TextBox = () => {
  const [wordCount, setWordCount] = useState(0);

  const [currentSelection, setCurrentSelection] = useState("");
  const currentSelectionGrab = (e) =>
    setCurrentSelection(
      e.target.value.substring(e.target.selectionStart, e.target.selectionEnd)
    );

  const [infoActive, setInfoActive] = useState(false);

  const { data: loadedEntries, ...entriesUtil } = useEntries();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { state, pathname } = useLocation();
  const { title = "", body = "" } = state || "";

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
  useEffect(() => {
    const zero = watch("body")?.length;
    const count = watch("body")?.trim().split(" ").length;
    zero === 0 ? setWordCount(zero) : setWordCount(count);
  }, []);

  const onSubmit = async (data) => {
    if (user.user) {
      if (pathname === "/") {
        await entriesUtil.fetchData(data, false);
      }

      if (pathname === "/edit") {
        const { _id } = state;
        data._id = _id;
        await entriesUtil.updateData(data);
      }
      navigate("/entries");
    } else {
      toast("Please sign in to use feature!", {
        icon: "👏🏾",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
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
          <input className="submit-button" type="submit" value={"Save"} />{" "}
        </form>
        {/* </main> */}
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
      <Toaster />
    </Fragment>
  );
};

export default TextBox;
