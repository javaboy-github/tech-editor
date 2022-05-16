import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({command}) => {
	const data:any = {};
	if (command == "build") data.base = "./";
	return {
		...data,
		global: {},
		plugins: [react({})]
	};
})

