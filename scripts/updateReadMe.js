const fs = require('fs');
const path = require('path');

// Form correct paths
const rootDir = path.join(__dirname, '..');
const readMePath = path.join(rootDir, 'README.md');
const dataPath = path.join(rootDir, './data/data.json');

// Read and parse data
const dataContent = fs.readFileSync(dataPath);
const parsedData = JSON.parse(dataContent)

const updatedContent = `# Inspirational quote of the day

<p align="center">
    <img src="./data/photo.jpeg" alt="Beautiful nature photo" width="300" height="250">
</p>

Daily dose of inspiration quotes provided by [ZenQuotes API](https://zenquotes.io/) and images by [Unsplash](https://unsplash.com/).

> ${parsedData.inspirationOfDay.q}
> -- ${parsedData.inspirationOfDay.a}
`

fs.writeFileSync(readMePath, updatedContent)