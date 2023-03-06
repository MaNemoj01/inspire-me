const fs = require('fs');
const path = require('path');

// Form correct paths
const rootDir = path.join(__dirname, '..');
const readMePath = path.join(rootDir, 'README.md');
const dataPath = path.join(rootDir, './data/data.json');

// Read and parse data
const dataContent = fs.readFileSync(dataPath);
const parsedData = JSON.parse(dataContent)

const updatedContent = `
<div align="center">

# Inspirational quote of the day

<img src="./data/photo.jpeg" alt="Beautiful nature photo" width="320" height="180">

<sub><i>Daily dose of inspiration quotes provided by [ZenQuotes API](https://zenquotes.io/) and images by [Unsplash](https://unsplash.com/).</i></sub>


${parsedData.inspirationOfDay.h}

</div>
`

fs.writeFileSync(readMePath, updatedContent)
console.log("Successfully updated README.md file.")