import React from "react";
import "./InputBox.css";

export const InputBox = ({ label, setAttribute }) => {
  return (
    <div className="inputBoxContainer">
      <label className="label">{label}</label>
      <textarea
        className="input"
        onChange={(e) => setAttribute(e.target.value)}
        placeholder="Descriu detalladament la imatge desitjada"
      />
    </div>
  );
};
