import ReactDOM from 'react-dom';
import React from 'react';
import { css } from '@emotion/css';
import { useEffect, useState } from 'react';
import TitleBar from '../components/layout/TitleBar';
import Tree from '../components/layout/Tree';
import Edit from '../components/layout/Edit';

export default function App() {
	const [treeviewDir, setTreeviewDir] = useState<string[]>([]);
	const [contentDirname, setContentDirname] = useState<string | undefined>(undefined);
	const [content, setContent] = useState<string | undefined>(undefined);
	useEffect(() => {
		const result = '../tech-blog/article/';
		(window as any).list_item(result).then((files: any) => setTreeviewDir(files.filter((e: any) => e[0] != '.')));
	}, []);
	useEffect(() => {
		if (!contentDirname) setContent(undefined);
		(window as any).read_file(`../tech-blog/article/${contentDirname as string}/index.md`).then((content: any) => setContent(content));
	}, [contentDirname]);
	return (
		<div className={css`background-color: #222;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  color: white;
  opacity: 0.8;
`}
		>
			<TitleBar />
			<div className={css`width: 100%;
  height: 100%;
  display: flex;
`}
			>
				<Tree pathToBlog={treeviewDir} handle={(name) => setContentDirname(name)} />
				<Edit content={content} />
			</div>
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('root'),
);
