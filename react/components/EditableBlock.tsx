import { css } from '@emotion/css';
import {useState, createElement, useRef} from 'react';
import { HtmlTag } from '../src/markdown';

type Props = {
	base: HtmlTag;
	onChange: (newbase: HtmlTag) => void;
}

export default function EditableBlock({base, onChange}: Props) {
	const [tag, setTag] = useState(base.name);
	const content = useRef(base.content);

	const onKeyDownHandler = (e: any ) => {
		if (e.key == "#") setTag("h1");
	};

	return createElement(
		tag, 
		{
			contentEditable: true,
			onKeyDown: onKeyDownHandler,
			dangerouslySetInnerHTML: {__html: content.current},
			onInput: (e: {target: HTMLElement}) => onChange({...base, content: e.target.innerText}),
			className: css`
				color: white;
			`,
			...base.additionalData
		}
	);
}
