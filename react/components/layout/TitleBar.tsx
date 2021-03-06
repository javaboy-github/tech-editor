import {css} from '@emotion/css';
import React from 'react';

export default function TitleBar() {
	return (
		<div className={css`-webkit-app-region: drag;
  height: 25px;
  width: 100%;
  margin: 0;
  background-color: gray;
  padding: 0;
  position: sticky;
  top: 0;
  left: 0;
  opacity: 1;
  z-index: 99;
`}
		>
			<input
				className={css`width: 70%;
  display: block;
  margin: auto;
`}
				placeholder="Type commands"
			/>
		</div>
	);
}
