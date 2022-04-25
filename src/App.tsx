import ReactDOM from "react-dom";
import TitleBar from "../components/layout/TitleBar"
import {css, cx} from "@emotion/css";
import Tree from "../components/layout/Tree";
import Edit from "../components/layout/Edit";

export default function App() {
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
				<Tree />
				<Edit />
			</div>
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
);
