import React, { useState } from "react";
// Import the useDropzone hooks from react-dropzone
import { useDropzone } from "react-dropzone";
import "./Dropzone.css";

const Dropzone = ({ onDrop, accept }) => {
  // Initializing useDropzone hooks with options
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
  });
  const [imageSent, setImageSent] = useState([]);

  const handleFile = (e) => {
    console.log(e);
    setImageSent(e.target.files[0]);
  };

  /* 
    useDropzone hooks exposes two functions called getRootProps and getInputProps
    and also exposes isDragActive boolean
  */

  return (
    <div className="dropzone-div" {...getRootProps()}>
      <input
        {...getInputProps({
          onChange: handleFile,
        })}
      />
      <div className="text-center">
        {isDragActive ? (
          <p className="dropzone-content">Release to drop the files here</p>
        ) : (
          <p className="dropzone-content">
            Drag 'n' drop some files here, or click to select files
          </p>
        )}
      </div>
    </div>
  );
};

export default Dropzone;
