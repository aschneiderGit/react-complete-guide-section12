import MyParagraph from './MyParagraph';

function DemoOutput(props) {
	return <MyParagraph>{props.show ? 'Paragraph !!!!!!!' : ''}</MyParagraph>;
}

export default DemoOutput;
