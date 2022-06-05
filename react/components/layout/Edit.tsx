import { css } from '@emotion/css';
import MDEditor from '@uiw/react-md-editor';
import {useState, useEffect} from 'react';
import {remark} from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
import {HtmlTag, toAST} from '../../src/markdown';
import EditableBlock from "../../components/EditableBlock";

type Props = {
	content: string | undefined;
	path: string;
};

export default function Edit({ content, path }: Props) {
	const [ast, setAst] = useState<HtmlTag[]>([]);

	useEffect(() => {
		if (!content) return;
		toAST(content as string, path).then(result => {setAst(result)});
	}, [content]);
	if (!content) return <></>;
	return (
		<div className={css`flex: 70%;
  height: 100%;
  opacity: 1;
  background-color: #111;
  color: white;
`}>
			{/* <div dangerouslySetInnerHTML={{ __html: html as string }}/> */}
			{ast.map((e, i) => <EditableBlock base={e} onChange={(newbase) => setAst(ast.map((older, j) => i == j ? newbase: older))} key={e.id}/>)}
		</div>
	);
}


async function toMarkdown(raw: string): Promise<string>{
	const contentHtml = await remark()
	/*		.use(prism, {plugins: [
			'autolinker',
			'command-line',
			'data-uri-highlight',
			'diff-highlight',
			'inline-color',
			'line-numbers',
			'treeview',
		]})*/
		.use(html, { sanitize: false })
		.process(raw.replace(/(```.+\n)/g, (_, match) => match.indexOf("treeview") != -1 ? match : `${match.replace("\n", "")}[class="line-numbers"]\n`));
	return contentHtml.toString();
}
