import React from "react";
import classes from "./card.module.css";

interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
  percentChange: number; 
}

const Card: React.FC<CardProps> = (props) => {
  const cardStyle =
    props.percentChange >= 0 ? classes.card_pos : classes.card_neg;

  return (
    <div className={`${classes.card} ${cardStyle}`} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Card;
