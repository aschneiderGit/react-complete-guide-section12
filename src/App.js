import React, {useState} from 'react';

import './App.css';
import Button from './components/UI/Button/Button';

function App() {
	const [showParagraph, setShowParagraph] = useState(false);
	const toggleShowHandler = (event) => {
		setShowParagraph((prevState) => !prevState);
	};
	return (
		<div className="app">
			<h1>Hi there!</h1>
			{showParagraph && <p>Paragraph !!!!!!!</p>}

			<Button onClick={toggleShowHandler}>Toggle Paragraph ! </Button>
		</div>
	);
}

export default App;
