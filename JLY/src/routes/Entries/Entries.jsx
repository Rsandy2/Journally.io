import {
  CalculatorIcon,
  HashtagIcon,
  PhotoIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
// import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import "./Entries.css";

const Entries = () => {
  const userData = [
    {
      highlight: "Entries Count",
      icon: (
        <div className="entry-logo-container" style={{ background: "#44355B" }}>
          <CalculatorIcon className="logo-default entry-logo" />
        </div>
      ),
      value: "5",
    },
    {
      highlight: "Word Count",
      icon: (
        <div className="entry-logo-container" style={{ background: "#AD343E" }}>
          <HashtagIcon className="logo-default entry-logo" />
        </div>
      ),
      value: "650k",
    },
    {
      highlight: "Image Count",
      icon: (
        <div className="entry-logo-container" style={{ background: "#62BBC1" }}>
          <PhotoIcon className="logo-default entry-logo" />
        </div>
      ),
      value: "24",
    },
    {
      highlight: "Daily Entries",
      icon: (
        <div className="entry-logo-container" style={{ background: "#30332E" }}>
          <InformationCircleIcon className="logo-default entry-logo" />
        </div>
      ),
      value: "24",
    },
  ];
  return (
    <Fragment>
      <main className="entries-page-container">
        <div className="grid-container">
          {userData.map((data) => (
            <EntriesCard key={data.highlight}>
              {data.icon}
              <h3 className="entry-higlight text-xl">{data.highlight}</h3>
              <p className="entry-value">{data.value}</p>
            </EntriesCard>
          ))}
        </div>
      </main>
    </Fragment>
  );
};

const EntriesCard = (props) => {
  const { children } = props;
  return (
    <>
      <main className="entry-card">{children}</main>
    </>
  );
};

export default Entries;
