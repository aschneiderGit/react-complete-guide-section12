import React, {useCallback, useState} from 'react';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
	const [showParagraph, setShowParagraph] = useState(false);
	const toggleShowHandler = useCallback(() => {
		setShowParagraph((prevState) => !prevState);
	}, []);
	return (
		<div className="app">
			<h1>Hi there!</h1>
			{<DemoOutput show={false} />}

			<Button onClick={toggleShowHandler}>Toggle Paragraph ! </Button>
		</div>
	);
}

export default App;
