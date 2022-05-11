import { css } from '@emotion/css';
import MarkdownEditor from '@uiw/react-markdown-editor';

type Props = {
  content: string | undefined;
};

export default function Edit({ content }: Props) {
  if (!content) return <></>;
  return (
    <div className={css`
				flex: 70%;
				height: 100%;
				opacity: 1;
				background-color: #111;
		    color: white;
		`}
    >
      <MarkdownEditor value={content} />
    </div>
  );
}
