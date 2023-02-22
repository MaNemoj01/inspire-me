// Idea for random background
//   https://source.unsplash.com/1600x900/

const fs = require('fs');
const path = require('path')

const updateQuote = async () => {
    // Form correct path to data.json
    const rootDir = path.join(__dirname, '..');
    const dataPath = path.join(rootDir, './data/data.json');

    // Read and parse data.json
    const dataContent = fs.readFileSync(dataPath);
    const parsedData = JSON.parse(dataContent)

    let quoteResponse;
    try {
        // Fetch new inspiration
        quoteResponse = await (await fetch('https://zenquotes.io/api/random')).json()
        // Push current `inspirationOfDay` to `pastInspirations`
        parsedData.pastInspirations.push(parsedData.inspirationOfDay)

        // Replace current inspiration with new one
        parsedData.inspirationOfDay = quoteResponse[0];

        fs.writeFileSync(dataPath, JSON.stringify(parsedData))
        console.log("Successfully updated quote.")
    } catch (error) {
        console.log("Error while updating quote: ", e)
    }
}

const updateImage = async () => {
    // Form correct path to image
    const rootDir = path.join(__dirname, '..');
    const imagePath = path.join(rootDir, './data/photo.jpeg');
    // Fetch new background image
    try{
        const arrayBuffer = await (await fetch('https://source.unsplash.com/1600x900/?nature')).arrayBuffer()
        const buffer = Buffer.from(arrayBuffer, 'binary');
        fs.writeFileSync(imagePath, buffer);
        console.log("Successfully updated image.")
    } catch(e) {
        console.log("Error while updating image: ", e)
    }
}

updateQuote()

updateImage()