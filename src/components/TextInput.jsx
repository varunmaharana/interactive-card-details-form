import React from "react";

const TextInput = (props) => {

    return (
        <input
            onChange={props.DOMevent}

            className={props.className + " textInput"}
            id={props.id}
            type="text"
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
        />
    );
}

export default TextInput;