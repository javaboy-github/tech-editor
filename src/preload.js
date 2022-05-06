const fs = require('fs');

window.list_item = async (path) => fs.readdirSync(path);
window.read_file = async (file) => fs.readFileSync(file, 'utf8');
