// server.js
const express = require('express');
const request = require('request');
const app = express();

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

app.use('/MED.Service', function(req, res) {
    var url = 'https://stageservices.essilorlink.com/Inventory/V_C/AvailableQuantityService';
    req.pipe(request(url)).pipe(res);
})

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);