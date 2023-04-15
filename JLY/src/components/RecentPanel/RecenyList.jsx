import { Fragment } from "react";
import "./RecencyList.css";

const RecencyList = (props) => {
  return (
    <Fragment>
      <main className="recency-overlay-container">
        <div className="recency-section-container">
          <a className="text-sm ellipsis" href="">
            The startup culture of Journally.io
          </a>
        </div>
        <div className="recency-section-container">
          <a className="text-sm" href="">
            A Dog Eat Dog World
          </a>
        </div>
        <div className="recency-section-container">
          <a className="text-sm" href="">
            Create New Entry
          </a>
        </div>
      </main>
      {/* sad */}
    </Fragment>
  );
};

export default RecencyList;
