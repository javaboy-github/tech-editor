import express from "express";
import fs, {opendir} from "fs";

export default function start(port) {
  const app = express();

  // ":path" should be the path to tech-blog that encoded by base64
  app.get('/:path/ls', (req, res) => {
    if (!re.param("path",undefined)) res.send({data: "err", msg: "path is empty"});
    const files = fs.readdirSync(atob(req.param("path", "")));
    res.send({files});
  });

  app.listen(port, () => {
    console.log("Start backend server");
  });
}
