import React from "react";
import "./style.css";

export const Search = (props) => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder="Робот хайлт..."
      onChange={props.onSearch}
    />
  );
};
