import React, {useCallback, useState} from 'react';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
	const [allowToggle, setAllowToggle] = useState(false);
	const [showParagraph, setShowParagraph] = useState(false);

	const toggleShowHandler = useCallback(() => {
		if (allowToggle) {
			setShowParagraph((prevState) => !prevState);
		}
	}, [allowToggle]);

	const allowToggleHandler = () => {
		setAllowToggle(true);
	};
	return (
		<div className="app">
			<h1>Hi there!</h1>
			{<DemoOutput show={toggleShowHandler} />}
			<Button onClick={allowToggleHandler}>Toggle Paragraph ! </Button>
			<Button onClick={toggleShowHandler}>Toggle Paragraph ! </Button>
		</div>
	);
}

export default App;
