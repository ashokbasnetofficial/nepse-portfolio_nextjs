import React from 'react'
import classes from './card.module.css'
interface cardProps {
    children:React.ReactNode
}
const Card:React.FC<cardProps>= ({children}) => {
  return (
    <div className={classes.card}>{children}</div>
  )
}

export default Card;