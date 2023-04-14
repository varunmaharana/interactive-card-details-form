import React from "react";
import cardFrontSource from "../assets/images/bg-card-front.png";
import cardBackSource from "../assets/images/bg-card-back.png";
import cardLogo from "../assets/images/card-logo.svg";
import _ from "lodash";

const CardFront = (props) =>  {
    const uppercaseName = _.toUpper(props.cardholderName);

    return (
        <div className={props.className}>
            <img className="cardFront cardShadow" src={cardFrontSource} alt={cardFrontSource} />
            <img className="cardFrontLogo" src={cardLogo} alt={cardLogo} />
            <h2 className="cardNumber">{props.cardNumber || "0000 0000 0000 0000"}</h2>
            <p className="cardholderName">{uppercaseName || "JANE APPLESEED"}</p>
            <p className="expDate"><span>{props.expMonth === "" ? "00" : props.expMonth}/{props.expYear !== "" ? props.expYear : "00"}</span></p>
        </div>
    )
}

const CardBack = (props) =>  {
    return (
        <div className={props.className}>
            <img className="cardBack cardShadow" src={cardBackSource} alt={cardBackSource} />
            <p className="cvcNumber">{props.cvcNumber || "000"}</p>

        </div>
    )
}

export { CardFront, CardBack };