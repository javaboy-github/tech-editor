import {useState, createElement} from 'react';

export default function EditableBlock() {
 const [tag, setTag] = useState("p");
 const [content, setContent] = useState("");

 const contenthandle = (e: any) => {setContent(e.target.value);};

 return createElement(
   tag, 
	 {contentEditable: true, onChange: contenthandle},
	 tag
 );
 }
