import React from "react";

const InputLabel = (props) => {
    return (
        <div className="labelDiv">
            <label className="inputLabel" htmlFor={props.for}>{props.content}</label>
        </div>
    );
}

export default InputLabel;