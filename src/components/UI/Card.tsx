import React from "react";
import classes from "./card.module.css";
interface cardProps {
  children: React.ReactNode;
  onClick: () => void;
}
const Card: React.FC<cardProps> = (props) => {
  return (
    <div className={classes.card} onClick={props.onClick} >
      {props.children}
    </div>
  );
};

export default Card;
