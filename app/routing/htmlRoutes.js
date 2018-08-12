// Dependencies
// =============================================================
var path = require("path");


// HTTP Routes
// =============================================================

// HTTP GET route to end point Home page via home.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

// HTTP GET route to end point Survey page via survey.html
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});