import React from "react";
import "./SizingButtons.css";

const SizingButtons = ({ setSize, user }) => {
  return (
    <>
      {user && (
        <div className="sizingButtonsContainer">
          <button className="sizingButton" onClick={() => setSize("256x256")}>
            Petit
          </button>
          <button className="sizingButton" onClick={() => setSize("512x512")}>
            Mitjà
          </button>
          <button className="sizingButton" onClick={() => setSize("1024x1024")}>
            Gran
          </button>
        </div>
      )}
    </>
  );
};

export default SizingButtons;
