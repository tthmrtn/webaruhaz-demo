import React from "react";

const NavButton = (props) => {
    return (
        <>
            <button className={"base-button "+props.clssnm} onClick={props.onClick}>{props.children}</button>
        </>
    )
}

export default NavButton;