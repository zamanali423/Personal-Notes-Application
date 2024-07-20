import React, { useState } from "react";
import CreateNotes from "../components/CreateNotes";
import GetNotes from "../components/GetNotes";

const Home = () => {
  const [showCreateNotes, setshowCreateNotes] = useState(false);
  const [showGetNotes, setshowGetNotes] = useState(true);

  const handleCreateNotesClick = () => {
    setshowCreateNotes(true);
    setshowGetNotes(false);
  };
  // const handleGetNotesClick = () => {
  //   setshowGetNotes(true);
  //   setshowCreateNotes(false);
  // };

  return (
    <>
      <div className="my-5 container">
        {/* <button className="btn btn-primary" onClick={handleGetNotesClick}>
          Get Notes
        </button> */}
        <button
          className="btn btn-primary ms-3"
          onClick={handleCreateNotesClick}
        >
          Create Notes
        </button>
      </div>
      {showCreateNotes && (
        <CreateNotes
          setshowCreateNotes={setshowCreateNotes}
          setshowGetNotes={setshowGetNotes}
        />
      )}
      {showGetNotes && <GetNotes />}
    </>
  );
};

export default Home;
