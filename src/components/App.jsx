import { useState } from "react";
import bgMainDesktop from "../assets/images/bg-main-desktop.png";
import { CardFront, CardBack } from "./Card";
import Form from "./Form"

const App = () => {
  	const [count, setCount] = useState(0);

  	return (
    	<div className="App">
			<img className="bgMainDesktop" src={bgMainDesktop} alt="bgMainDesktop" />
			<Form />
    	</div>
  	);
}

export default App;
