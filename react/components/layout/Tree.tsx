import {css} from "@emotion/css";
import {useEffect, useState} from "react";

type Props = {
	pathToBlog: string;
}

export default function Tree({pathToBlog}: Props) {
	const [files, setFiles] = useState<string[]>([]);

	useEffect(() => {
		// TODO: Putting source code that set a data to files
	}, [pathToBlog]);

	return <div className={css`
				width: 30%;
				height: 100%;
				opacity: 0.3;
				background-color: #111;
		`}>
		{
			!pathToBlog ? <div>Enter correctolly path</div>
				: <ul>{files.map(e => <li>{e}</li>)}</ul>
		}
	</div>
}
