const fs = require('fs');

function writeSVGFile(filename, content) {
  fs.writeFileSync(filename, content);
  console.log(`SVG file saved as ${filename}`);
}

module.exports = { writeSVGFile };
