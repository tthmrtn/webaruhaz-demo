import React from "react";

const NavBar = (props) => {
    return (
        <>
            <nav className="navigation-container">
                {props.children}
            </nav>
        </>
    )
}

export default NavBar