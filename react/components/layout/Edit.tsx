import {css} from "@emotion/css";

type Props = {
	content: string | undefined;
}

export default function Edit({content}: Props) {
	return <div className={css`
				flex: 70%;
				height: 100%;
				opacity: 1;
				background-color: #111;
		`}>
    {content}
	</div>
}
