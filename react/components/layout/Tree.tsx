import {css} from "@emotion/css";
import {useEffect} from "react";

type Props = {
	pathToBlog: string[];
	handle: (dir_name: string) => void
}

export default function Tree({pathToBlog, handle}: Props) {
	useEffect(() => {
		// TODO: Putting source code that set a data to files
	}, [pathToBlog]);

	return <div className={css`
				width: 30%;
				height: 100%;
				opacity: 0.7;
				background-color: #444;
		`}>
		{
			!pathToBlog ? <div>Enter correctolly path</div>
			: <ul className={css`
				padding: 0;
				font-size: 0.8em;
			`}>{pathToBlog.map(e => <li className={css`
					box-sizing: border-box;
					list-style-type: none;
					margin: 0;
					padding-left: 7px;
					display: block;
					&:hover{
						border-left: 5px solid aqua;
						margin: 0;
						padding: 1;
					}
				`} onClick={() => handle(e)}>{e}</li>)}
		<li className={css`
			list-style-type: none;
			color: white;
			display: block;
			padding-left: 7px;
			&:hover{
				border-left: 5px solid lightgreen;
			}
			`}>Add</li>
			</ul>
		}
	</div>
}
