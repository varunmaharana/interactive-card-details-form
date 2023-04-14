import { useState } from "react";
import bgMainDesktop from "../assets/images/bg-main-desktop.png";
import { CardFront, CardBack } from "./Card";
import Form from "./Form"

const App = () => {
	const [cardholderName, setCardholderName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expMonth, setExpMonth] = useState("");
    const [expYear, setExpYear] = useState("");
    const [cvcNumber, setCvcNumber] = useState("");
	
	const detailsAndSetterFunctions = [
		// Details
		[
			cardholderName, cardNumber, expMonth, expYear, cvcNumber
		],
		// Detail Setter Functions
		[
			setCardholderName, setCardNumber, setExpMonth, setExpYear, setCvcNumber
		]
	];

	const resetDetailsStates = () => {
		setCardholderName("");
		setCardNumber("");
		setExpMonth("");
		setExpYear("");
		setCvcNumber("");
	}

  	return (
    	<div className="App">
			<img className="bgMainDesktop" src={bgMainDesktop} alt="bgMainDesktop" />
			<CardFront
				className="cardFrontDiv"
				cardholderName={cardholderName}
				cardNumber={cardNumber}
				expMonth={expMonth}
				expYear={expYear}
			/>
			<CardBack
				className="cardBackDiv"
				cvcNumber={cvcNumber}
			/>
			<div className="main">
				<Form
					detailsAndSetterFunctions={detailsAndSetterFunctions}
					resetDetailsStates={resetDetailsStates}
				/>
			</div>

    	</div>
  	);
}

export default App;
