import { useState } from "react";
import bgMainDesktop from "../assets/images/bg-main-desktop.png";
import { CardFront, CardBack } from "./Card";
import Form from "./Form"
import ThankYou from "./ThankYou";

const App = () => {
  	const [count, setCount] = useState(0);

  	return (
    	<div className="App">
			<img className="bgMainDesktop" src={bgMainDesktop} alt="bgMainDesktop" />
			<div className="main">
				<Form />
				{/* <ThankYou /> */}
			</div>

    	</div>
  	);
}

export default App;
