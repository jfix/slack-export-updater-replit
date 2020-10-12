const express = require('express')

const { 
    getPipeline, 
    getIndex, 
    getStats,
    getHeatmap, 
    getMeme, 
    postExport 
} = require('./functions.js')


const app = express()

// =============================================================================
// IGNORE ALL GET REQUESTS EXCEPT UPTIMEBOT
app.get('/', getIndex)

// =============================================================================
// RETURN A STATS OBJECT
app.get('/stats', getStats)

// =============================================================================
// returns an object of export events, with keys for each year
app.get("/heatmap", getHeatmap)

// =============================================================================
// returns info to display the meme image
app.get("/meme", getMeme)

// =============================================================================
// ENDPOINT FOR API
app.post('/', postExport);

app.listen(3000, () => {
  console.log('REPL.IT HTTP Express server started');
});
