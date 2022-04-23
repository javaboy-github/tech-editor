import ReactDOM from "react-dom";
import TitleBar from "../components/layout/TitleBar"
import {css, cx} from "@emotion/css";

export default function App() {
	return (
		<div className={css`
			background-color: #222;
			opacity: 0.9;
			height: 100%;
			width: 100%;
			margin: 0;
			padding: 0;
			`}>
			<TitleBar />
			<p>Hello</p>
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
);
