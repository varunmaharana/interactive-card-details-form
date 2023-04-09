import React from "react";
import TextInput from "./TextInput";
import InputLabel from "./InputLabel";
import InvalidInputLabel from "./InvalidInputLabel";

const Input = (props) => {
    return (
        <div className="doubleTextInputDiv">
            <InputLabel for={props.name} content={props.content} />
            <TextInput className={props.className} name={props.name} placeholder={props.placeholder1} />
            <TextInput className={props.className} name={props.name} placeholder={props.placeholder2} />
            <InvalidInputLabel msg={props.msg} />
        </div>
    );
}

export default Input;