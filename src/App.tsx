import ReactDOM from "react-dom";
import TitleBar from "../components/layout/TitleBar"
import {css, cx} from "@emotion/css";
import Tree from "../components/layout/Tree";
import Edit from "../components/layout/Edit";
import {useEffect, useState} from "react";

export default function App() {
	const [treeviewDir, setTreeviewDir] = useState<string>("");
	useEffect(() => {
		let result: string | null;
		do {
		result = prompt("Enter dir path to tech-blog")
		} while (!result);
		setTreeviewDir(result);
	}, []);

	return (
		<div className={css`
			background-color: #222;
			height: 100%;
			width: 100%;
			margin: 0;
			padding: 0;
			color: white;
			opacity: 0.8;
			`}>
			<TitleBar />
			<div className={css`
				width: 100%;
				height: 100%;
				display: flex;
				`}>
				<Tree pathToBlog={treeviewDir} />
				<Edit />
			</div>
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
);
