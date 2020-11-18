import classes from "./Title.module.scss"
import React from "react";

export const Title: React.FC<{text: string}> = (props) => (
    <div className={classes.title}>
        <h2>{props.text}</h2>
    </div>
)