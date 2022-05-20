// Markdown Parse Helper
import {remark} from 'remark';
import html from 'remark-html';

export default async function toAST(markdown: string) {
 const result = await remark()
		.use(html, { sanitize: false });
  return JSON.stringify(result, null, 2);
}
