const fs = require('fs');

if (!('SharedArrayBuffer' in window)) {
  window.SharedArrayBuffer = ArrayBuffer;
}

window.list_item = async (path) => fs.readdirSync(path);
window.read_file = async (file) => fs.readFileSync(file, 'utf8');
