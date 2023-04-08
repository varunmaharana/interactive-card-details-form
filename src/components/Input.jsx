import React from "react";
import TextInput from "./TextInput";
import InputLabel from "./InputLabel";
import InvalidInputLabel from "./InvalidInputLabel";

const Input = (props) => {
    return (
        <div className={props.className ? props.className + "Div" : null}>
            <InputLabel for={props.name} content={props.content} />
            <TextInput className={props.className || null} name={props.name} placeholder={props.placeholder} />
            <InvalidInputLabel msg={props.msg} />
        </div>
    );
}

export default Input;