// Markdown Parse Helper
import {remark} from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';

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

export function toAST(content: string): any {
  // gray-matterで解析
	const matterResult = matter(content);

  // データを合体させる
  const markdown = {
    ...matterResult.data,
    raw: matterResult.content,
    title: matterResult.data.tag.map((e:string) =>`【${e}】`).join("") + matterResult.data.title 
  } as Markdown;
  const result = remark().use(html, { sanitize: false })
    .process(markdown.content);
	return JSON.stringify(result, null, 2);
}

export function toJSX(markdown: any) {

}
