const fs = require("fs");
const path = require("path");

function mixer(...filePaths) {
  filePaths.forEach((filePath) => {
    const absolutePath = path.resolve(filePath);
    require(absolutePath);
  });
}

module.exports = mixer;
