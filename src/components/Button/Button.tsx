import Icon, { IconTypes } from "../Icon/Icon";
import styles from "./Button.module.sass";

import React, { MouseEventHandler } from "react";

type ButtonProps = {
    children: string;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    icon?: IconTypes;
    iconWidth?: number;
    iconHeight?: number;
    iconPosition?: "right";
    type?: "link";
    autoFocus?: boolean;
};

const Button = (props: ButtonProps) => {
    return (
        <button
            onClick={props.onClick}
            className={`${styles.button} ${props.className}`}
        >
            {props.icon ? (
                <span className={styles.button__icon}>
                    <Icon
                        type={props.icon}
                        width={props.iconWidth || 14}
                        height={props.iconHeight || 14}
                        fill="currentColor"
                    />
                </span>
            ) : null}
            <span className={styles.button__content}>{props.children}</span>
        </button>
    );
};

export default Button;
