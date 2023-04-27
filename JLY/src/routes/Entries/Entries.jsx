import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useEntries } from "../../hooks/useEntries";
import { userData, recentData, savedEntries } from "../../utils/dummyData";
import "./Entries.css";

const Entries = () => {
  const { data: loadedEntries, ...entriesUtils } = useEntries();

  const loadAllEntries = useCallback(async () => {
    await entriesUtils.fetchData(null, true);
  }, [entriesUtils]);

  useEffect(() => {
    if (loadedEntries === null && !entriesUtils.loading) {
      loadAllEntries();
    }
  }, [entriesUtils.loading, loadedEntries, loadAllEntries]);

  return (
    <Fragment>
      <main className="entries-page-container">
        <div className="entry-info-container">
          {/* {loadedEntries ? (
            loadedEntries?.data.map((data) => (
              <EntriesInfoCard key={data._id}>l</EntriesInfoCard>
            ))
          ) : (
            <p>No Entries</p>
          )} */}

          {/* {entriesUtils.loading ?? <p>Cleared</p>} */}
        </div>

        {/* <div className="recent-container">
          {recentData.map((data) => (
            <RecentCard key={data.title}>
              <div className="image-recent-container">
                <img className="image-recent-image" src={data.image} />
              </div>
              <div className="recent-text-box">
                <h3 className="text-xl">{data.title}</h3>
                <p className="text-xs recent-date">{data.lastAccessed}</p>
              </div>
            </RecentCard>
          ))}
        </div> */}

        <h3 className="text-xl">Entries</h3>
        <div className="entries-container">
          {loadedEntries === null ? (
            <>Empty</>
          ) : (
            loadedEntries?.data.map((data) => (
              <div className="CEC">
                <EntryCard key={data._id} data={data}>
                  <div className="start">
                    <div className="image-entry-container">
                      <img
                        className="image-entry-image"
                        src={savedEntries[1].image}
                      />
                    </div>
                    <div className="entry-text-box titlecreate">
                      <h3 className="text-xl">{data.title}</h3>
                      <p className="text-xs created-by">
                        Created by <span>{data.author}</span>
                      </p>
                    </div>
                  </div>
                  <div className="entry-text-box end-box">
                    <p className="text-xs last-modified">Last Modified</p>
                    <span className="text-xs">{data.updatedAt}</span>
                  </div>
                </EntryCard>{" "}
                <XMarkIcon
                  className="logo-default delete-button"
                  onClick={async () =>
                    await entriesUtils.deleteData({ _id: data._id })
                  }
                />
              </div>
            ))
          )}
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
  const { data, children } = props;
  const navigate = useNavigate();
  const { _id, title, body } = data;
  return (
    <>
      <main
        className="entry-card"
        onClick={() =>
          navigate("/edit", {
            state: { _id: _id, title: title, body: body },
          })
        }
      >
        {children}
      </main>
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
