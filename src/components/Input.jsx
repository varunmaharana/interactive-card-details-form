import React from "react";
import TextInput from "./TextInput";
import InputLabel from "./InputLabel";
import InvalidInputLabel from "./InvalidInputLabel";

const Input = (props) => {
    return (
        <div className={props.className ? props.className + "Div" : null}>
            <InputLabel for={props.name} content={props.content} />
            <TextInput
                DOMevent={props.DOMevent}
                className={props.className}
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
            />
            <InvalidInputLabel msg={props.msg} />
        </div>
    );
}

export default Input;