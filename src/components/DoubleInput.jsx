import React from "react";
import TextInput from "./TextInput";
import InputLabel from "./InputLabel";
import InvalidInputLabel from "./InvalidInputLabel";

const Input = (props) => {
    return (
        <div className="doubleTextInputDiv">
            <InputLabel for={props.name} content={props.content} />
            <TextInput DOMevent={props.DOMevent} id={props.id1} className={props.className} name={props.name + "-M"} placeholder={props.placeholder1}  value={props.valueM} />
            <TextInput DOMevent={props.DOMevent} id={props.id2} className={props.className} name={props.name + "-Y"} placeholder={props.placeholder2} value={props.valueY} />
            <InvalidInputLabel msg={props.msg} />
        </div>
    );
}

export default Input;