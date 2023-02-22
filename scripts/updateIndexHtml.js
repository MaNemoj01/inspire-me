const fs = require('fs');
const path = require('path');

// Form correct paths
const rootDir = path.join(__dirname, '..');
const indexPath = path.join(rootDir, 'index.html');
const dataPath = path.join(rootDir, './data/data.json');

// Extract and parse data
const indexContent = fs.readFileSync(indexPath, 'utf8');
const dataContent = fs.readFileSync(dataPath)
const parseData = JSON.parse(dataContent);

// Update index.html
const updatedContent = indexContent.replace(/<h1>[^]*<\/h1>/, `<h1>${parseData.inspirationOfDay.h}</h1>`);
fs.writeFileSync(indexPath, updatedContent, 'utf8');

console.log("Successfully updated index.html file.")