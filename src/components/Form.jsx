import React from "react";
import Input from "./Input";
import DoubleInput from "./DoubleInput";
import Button from "./Button";

const Form = (props) => {
    return (
        <div className="form-container">
            <form id="inputForm" action="">
                <Input
                    name="card-holder-name"
                    content="CARDHOLDER NAME"
                    placeholder="e.g. Jane Appleseed"
                    msg={false && "Wrong format, alphabets only"}
                />
                <Input
                    name="card-number"
                    content="CARD NUMBER"
                    placeholder="e.g. 1234 5678 9123 0000"
                    msg={false && "Wrong format, numbers only"}
                />

                <div className="formLowerDiv">
                    <DoubleInput
                        className="doubleTextInput"
                        name="exp-date" content="EXP. DATE (MM/YY)"
                        placeholder1="MM"
                        placeholder2="YY"
                        msg={false && "Can't be blank"}
                    />
                
                    <Input
                        className="smallInput"
                        name="cvc" 
                        content="CVC"
                        placeholder="e.g. 123"
                        msg={false && "Can't be blank"}
                    />

                </div>

                <Button text="Confirm" />
            </form>
        </div>
    );
}

export default Form;