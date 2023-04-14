import React from "react";

const Button = (props) => {
    return (
        <button
            onClick={props.DOMevent}
            className="button"
            type={props.type}
        >
            {props.text}
        </button>
    );
};

export default Button;