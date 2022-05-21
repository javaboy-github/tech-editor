const fs = require('fs');

if (!('SharedArrayBuffer' in window)) {
  window.SharedArrayBuffer = ArrayBuffer;
}

const buffer = require('buffer');
console.log(buffer);
window.Buffer = buffer.Buffer;
window.list_item = async (path) => fs.readdirSync(path);
window.read_file = async (file) => fs.readFileSync(file, 'utf8');
