import React from "react"
import classes from './Button.module.scss'

type PropsType = {
    href: string
    text: string
}

export const Button: React.FC<PropsType> = (props) => {
    return (
      <a href={props.href} className={classes.btn}>{props.text}</a>
    )
}