import React from "react";
import "./style.css";
export const Card = (props) => {
  return (
    <div className="card">
      <img src={`https://robohash.org/${props.robot.id}?set=set2`} alt="" />
      <h2>{props.robot.name}</h2>
      <p>{props.robot.email}</p>
    </div>
  );
};
