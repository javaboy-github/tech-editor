const fs = require('fs');

console.log("Hello!")
window.list_item = async (path) => fs.readdirSync(path);
