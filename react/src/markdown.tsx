// Markdown Parse Helper
import {remark} from 'remark';
import html from 'remark-html';

export const tags = ["javaboy", "Minecraft BE", "C++", "学校", "chromebook", "bison/flex", "Blender", "Java", "React", "electron", "Rust", "紹介"]
export type Tag = typeof tags[number]

type Markdown = {
  title: string;
  content: string;
  raw: string;
  date: Date;
  update: Date;
  tag: Tag[];
}

export async function toAST(file: string) {
 const {head, content} = splitHeadAndBody(file);

	const result = await remark().use(html, { sanitize: false })
		.process(content);
	// return JSON.stringify(result, null, 2);
	return JSON.stringify(result, null, 2);
}

function splitHeadAndBody(file: string): {head: any;content:string;} {
	let isInHead = false;
	const lines = file.split("\n");
	const head:any = {};
	let content = "";
	for (let i=0;i<lines.length;i++) {
		if (lines[i] == "") continue;
		if (lines[i] == "===" && !isInHead) {isInHead = true; continue;}
		if (lines[i] == "===" &&  isInHead) {isInHead = false;continue;}
		if (!isInHead) {
      content += lines[i];
		} else {
			for (let j=0;j<lines[i].length;j++) {
				let property = "";
				do {
					if (lines[i][j] == ":") break;
					property += lines[i][j];
					i++;
				} while (true);
				head[property] = lines[i].substring(j);
				break;
			}
		}};
		return {head, content};
}

export function toJSX(markdown: any) {

}
