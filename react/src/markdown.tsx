// Markdown Parse Helper
import {remark} from 'remark';
import html from 'remark-html';

// 全ての`tech-blog`のタグ
export const tags = ["javaboy", "Minecraft BE", "C++", "学校", "chromebook", "bison/flex", "Blender", "Java", "React", "electron", "Rust", "紹介"]
// 上を参考に、型を作成
export type Tag = typeof tags[number]

type Markdown = {
  title: string;
  content: string;
  raw: string;
  date: Date;
  update: Date;
  tag: Tag[];
}

export async function toAST(file: string, path: string): Promise<HtmlTag[]> {
	const {head, content} = splitHeadAndBody(file);

	const result = await remark().use(html, { sanitize: false })
		.process(content);
	// return JSON.stringify(result, null, 2);
	const htmlContent = JSON.stringify(result, null, 2);
	return htmlToAst(htmlContent, path);
}

// aタグやimgタグのsrc属性を補足
type AdditionalData = {href: string;} | {src: string} | null;

//  EditableBlock渡すプロパティ
export type HtmlTag = {
	name: string;
	id: string;
	content: string;
	additionalData: AdditionalData;
}

export function htmlToAst(html:string, path:string): HtmlTag[] {
	const domparser = new DOMParser();
	const doc = domparser.parseFromString(html, "text/html");
	const root = doc.body.children[0];
 
	const result: HtmlTag[] = [];

	for (let i = 0; i < root.childNodes.length; i++) {
		const child = root.childNodes[i];
		const name = child.nodeName == "#text" ? "p" : child.nodeName.toLowerCase();
		if (name == "#comment") continue;
		const id = uuidv4();
		const content = (child.textContent || "");
		const html: HtmlTag = {name, id, content, additionalData: 
			(()=>{
				switch (name) {
				case "a":
					return {href: (child as HTMLAnchorElement).href};
				case "img":
					return {src: "files:///" + path +  "/" + (child as HTMLImageElement).src};
				default:
					return null;
				}
			})()
		};
		result.push(html);
	}
	return result;
}

function uuidv4() {
	return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
		((c as any) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> (c as any) / 4).toString(16)
	);
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
				/* eslint no-constant-condition: "off" */
				do {
					if (lines[i][j] == ":") break;
					property += lines[i][j];
					i++;
				} while (true);
				head[property] = lines[i].substring(j);
				break;
			}
		}}
	return {head, content};
}
