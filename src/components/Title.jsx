import React from "react";

const Title = (props) => {
    return (
        <>
            <h1 className="title" onClick={props.onClick}>{props.children}</h1>
        </>
    )
}

export default Title;