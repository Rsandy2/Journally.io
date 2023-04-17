import { Fragment } from "react";
import { userData, recentData, savedEntries } from "../../utils/dummyData";
import "./Entries.css";

const Entries = () => {
  return (
    <Fragment>
      <main className="entries-page-container">
        <div className="entry-info-container">
          {userData.map((data) => (
            <EntriesInfoCard key={data.highlight}>
              {data.icon}
              <h3 className="entry-higlight text-xl">{data.highlight}</h3>
              <p className="entry-value">{data.value}</p>
            </EntriesInfoCard>
          ))}
        </div>

        <div className="recent-container">
          {recentData.map((data) => (
            <RecentCard>
              <div className="image-recent-container">
                <img className="image-recent-image" src={data.image} />
              </div>
              <div className="recent-text-box">
                <h3 className="text-xl">{data.title}</h3>
                <p className="text-xs recent-date">{data.lastAccessed}</p>
              </div>
            </RecentCard>
          ))}
        </div>
        <div className="entries-container">
          {savedEntries.map((data) => (
            <EntryCard>
              <div className="start">
                <div className="image-entry-container">
                  <img className="image-entry-image" src={data.image} />
                </div>
                <div className="entry-text-box titlecreate">
                  <h3 className="text-xl">{data.title}</h3>
                  <p className="text-xs created-by">
                    Created by <span>{data.createdBy}</span>
                  </p>
                </div>
              </div>

              <div className="entry-text-box end-box">
                <p className="text-xs last-modified">Last Modified</p>

                <span className="text-xs">{data.lastmodified}</span>
              </div>
            </EntryCard>
          ))}
        </div>
      </main>
    </Fragment>
  );
};

const EntriesInfoCard = (props) => {
  const { children } = props;
  return (
    <>
      <main className="entry-info-card">{children}</main>
    </>
  );
};

const EntryCard = (props) => {
  const { children } = props;
  return (
    <>
      <main className="entry-card">{children}</main>
    </>
  );
};

const RecentCard = (props) => {
  const { children } = props;
  return (
    <>
      <main className="recent-card">{children}</main>
    </>
  );
};

export default Entries;
