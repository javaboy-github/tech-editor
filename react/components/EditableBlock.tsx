import {useState, createElement} from 'react';

export default function EditableBlock() {
	const [tag, setTag] = useState("p");
	const [content, setContent] = useState("");

	const contenthandle = (e: any) => {setContent(e.target.value);};
	const onKeyDownHandler = (e: any ) => {
 if (e.key == "#") setTag("h1");
 };

	return createElement(
		tag, 
	 {contentEditable: true, onChange: contenthandle, onKeyDown: onKeyDownHandler}
	 tag
	);
}
