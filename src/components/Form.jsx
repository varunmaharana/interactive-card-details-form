import React, { useState } from "react";
import Input from "./Input";
import DoubleInput from "./DoubleInput";
import Button from "./Button";
import { checkCardName, checkCardNumber, checkCvcNumber, checkExpMonth, checkExpYear } from "./FormValidation";
import ThankYou from "./ThankYou";

const Form = (props) => {
    const [[cardholderName, cardNumber, expMonth, expYear, cvcNumber], [setCardholderName, setCardNumber, setExpMonth, setExpYear, setCvcNumber]] = props.detailsAndSetterFunctions;
    const [errorMsg, setErrorMsg] = useState({
        cardholderName : [false, false],
        cardNumber : [false, false],
        expMonth : [false, false],
        expYear : [false, false],
        cvcNumber : [false, false]
    });
    
    const handleChange = (event) => {
        const {name, value} = event.target;

        // console.log(name + " changed");

        if (name === "card-holder-name") {
            setCardholderName(value);

        } else if (name === "card-number") {
            setCardNumber(value);
            
        } else if (name === "exp-date-M") {
            setExpMonth(value);

        } else if (name === "exp-date-Y") {
            setExpYear(value);

        }else if (name === "cvc") {
            setCvcNumber(value);
        }
    }

    const handleClick = (event) => {
        event.preventDefault();

        console.log(errorMsg.cardholderName[0])
        console.log(errorMsg.cardholderName[1])

        // cardName
        setErrorMsg((prevValue) => {
            const {isValid, errorMsg} = checkCardName(cardholderName, "cardholderNameInput");
            return (
                {
                    ...prevValue,
                    cardholderName : [
                        isValid, errorMsg
                    ]
                }
            );
        });

        // cardNumber
        setErrorMsg((prevValue) => {
            const {isValid, errorMsg} = checkCardNumber(cardNumber, "cardNumberInput");
            return (
                {
                    ...prevValue,
                    cardNumber : [
                        isValid, errorMsg
                    ]
                }
            );
        });

        // expMonth
        setErrorMsg((prevValue) => {
            const {isValid, errorMsg} = checkExpMonth(expMonth, "expMonthInput");
            return (
                {
                    ...prevValue,
                    expMonth : [
                        isValid, errorMsg
                    ]
                }
            );
        });

        // expYear
        setErrorMsg((prevValue) => {
            const {isValid, errorMsg} = checkExpYear(expYear, "expYearInput");
            return (
                {
                    ...prevValue,
                    expYear : [
                        isValid, errorMsg
                    ]
                }
            );
        });

        // cvcNumber
        setErrorMsg((prevValue) => {
            const {isValid, errorMsg} = checkCvcNumber(cvcNumber, "cvcNumberInput");
            return (
                {
                    ...prevValue,
                    cvcNumber : [
                        isValid, errorMsg
                    ]
                }
            );
        });
    }

    const resetErrorAndDetailsStates = () => {
        setErrorMsg({
            cardholderName : [false, false],
            cardNumber : [false, false],
            expMonth : [false, false],
            expYear : [false, false],
            cvcNumber : [false, false]
        });

        props.resetDetailsStates()
    }

    return (
        <div className="form-container">
            {
                (
                    (errorMsg.cardholderName[0]) &&
                    (errorMsg.cardNumber[0]) &&
                    (errorMsg.expMonth[0]) &&
                    (errorMsg.expYear[0]) &&
                    (errorMsg.cvcNumber[0])
                ) ? (
                    <ThankYou
                        ButtonDOMevent={resetErrorAndDetailsStates}
                    />
                ) : (
                    <form id="inputForm">
                        <Input
                            DOMevent={handleChange}
                            name="card-holder-name"
                            content="CARDHOLDER NAME"
                            placeholder="e.g. Jane Appleseed"
                            msg={errorMsg.cardholderName}
                            value={cardholderName}
                            id="cardholderNameInput"
                        />
                        <Input
                            DOMevent={handleChange}
                            name="card-number"
                            content="CARD NUMBER"
                            placeholder="e.g. 1234 5678 9123 0000"
                            msg={errorMsg.cardNumber}
                            value={cardNumber}
                            id="cardNumberInput"
                        />

                        <div className="formLowerDiv">
                            <DoubleInput
                                DOMevent={handleChange}
                                className="doubleTextInput"
                                id1="expMonthInput"
                                id2="expYearInput"
                                name="exp-date"
                                content="EXP. DATE (MM/YY)"
                                placeholder1="MM"
                                placeholder2="YY"
                                msg={errorMsg.expMonth && errorMsg.expYear}
                                valueM={expMonth}
                                valueY={expYear}
                            />
                        
                            <Input
                                DOMevent={handleChange}
                                className="smallInput"
                                name="cvc" 
                                content="CVC"
                                placeholder="e.g. 123"
                                msg={errorMsg.cvcNumber}
                                value={cvcNumber}
                                id="cvcNumberInput"
                            />

                        </div>

                        <Button DOMevent={handleClick} type="submit" text="Confirm" />
                    </form>
                )
            }
        </div>
    );
}

export default Form;