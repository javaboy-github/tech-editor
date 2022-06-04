import {useState, createElement} from 'react';
import { HtmlTag } from '../src/markdown';

type Props = {
	base: HtmlTag;
}

export default function EditableBlock({base}: Props) {
	const [tag, setTag] = useState(base.name);
	const [content, setContent] = useState(base.content);

	const contenthandle = (e: any) => {setContent(e.target.value);};
	const onKeyDownHandler = (e: any ) => {
		if (e.key == "#") setTag("h1");
	};

	return createElement(
		tag, 
		{contentEditable: true, onChange: contenthandle, onKeyDown: onKeyDownHandler},
		content
	);
}
