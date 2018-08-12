// API Routes 

// GET Route to end point api/colleagues to display all colleagues
app.get("/api/colleagues", function(req, res) {
    return res.json(colleagues);
});

// POST new Colleague - takes in JSON input
app.post("/api/colleagues", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newcolleague = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newcolleague.routeName = newcolleague.name.replace(/\s+/g, "").toLowerCase();

    console.log(newcolleague);

    colleagues.push(newcolleague);

    res.json(newcolleague);
});