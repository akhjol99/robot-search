import "./style.css";
import { Card } from "../card";
export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.data.map((el) => (
        <Card key={el.id} robot={el} />
      ))}
    </div>
  );
};
