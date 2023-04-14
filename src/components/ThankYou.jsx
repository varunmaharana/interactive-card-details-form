import React from "react";
import Button from "./Button";
import iconComplete from "../assets/images/icon-complete.svg";

const ThankYou = (props) => {
    return (
        <div className="thankYou-container">
            <img className="iconComplete" src={iconComplete} alt="" />
            <h1>THANK YOU!</h1>
            <p>We've added your card details</p>
            <Button
                text="Continue"
                DOMevent={props.ButtonDOMevent}
            />
        </div>
    );
}


export default ThankYou;