import { Fragment } from "react";
import "./ImageSelector.css";
import { PlusIcon } from "@heroicons/react/24/outline";

const ImageSelector = (props) => {
  return (
    <Fragment>
      <main className="image-overlay-container">
        <div className="image-section-container">
          <img
            className="image-section-image"
            src="https://images2.alphacoders.com/130/1301855.jpg"
          />
        </div>
        <div className="image-section-container">
          <img
            className="image-section-image"
            src="https://images3.alphacoders.com/130/1305915.jpeg"
          />
        </div>
        <div className="image-section-container">
          <PlusIcon className="plus-icon" />
        </div>
      </main>
    </Fragment>
  );
};

export default ImageSelector;
