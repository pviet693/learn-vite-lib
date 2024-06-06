import React from "react";

import { PlusIcon } from "../../icons/plus";

export enum IconTypes {
    Plus = 1,
    Calendar,
    Chart,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Gear,
    Search,
    User,
    Wallet,
    XMark,
    Bin
}

export type IconProps = Readonly<{
    width?: number;
    height?: number;
    fill?: string;
    type?: IconTypes;
    className?: string;
}>;

const Icon = (props: IconProps) => {
    switch (props.type) {
        case IconTypes.Plus:
            return <PlusIcon {...props} />;
    }
};

export default Icon;
