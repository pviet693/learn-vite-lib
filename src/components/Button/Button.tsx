import styles from "./Button.module.sass";

import React from "react";

type ButtonProps = {
    children: string
}

const Button = (props: ButtonProps) => {
    return <button className={styles.button}>{props.children}</button>;
};

export default Button;
