import React from "react";

const TextInput = (props) => {
    return (
        <input className={props.className || "textInput"} type="text" name={props.name} placeholder={props.placeholder} />
    );
}

export default TextInput;