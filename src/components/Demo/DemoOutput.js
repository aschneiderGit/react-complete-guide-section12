import MyParagraph from './MyParagraph';
import React from 'react';

function DemoOutput(props) {
	console.log('demo test');
	return <MyParagraph>{props.show ? 'Paragraph !!!!!!!' : ''}</MyParagraph>;
}

export default React.memo(DemoOutput);
