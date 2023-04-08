import React from "react";
import Input from "./Input";
import DoubleInput from "./DoubleInput";
import Button from "./Button";

const Form = (props) => {
    return (
        <div className="container">
            <form id="inputForm" action="">
                <Input name="card-holder-name" content="CARDHOLDER NAME" placeholder="e.g. Jane Appleseed"/>
                <Input name="card-number" content="CARD NUMBER" placeholder="e.g. 1234 5678 9123 0000" msg="Wrong format, numbers only"/>

                <div className="formDiv">
                    <DoubleInput className="doubleTextInput" name="exp-date" content="EXP. DATE (MM/YY)" placeholder1="MM" placeholder2="YY" msg="Can't be blank" />
                
                    <Input className="smallInput" name="cvc" content="CVC" placeholder="e.g. 123" />

                </div>

                <Button text="Confirm" />
            </form>
        </div>
    );
}

export default Form;