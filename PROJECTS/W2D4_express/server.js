// Bring in Express
const express = require('express');
const app = express(); // invoking express()
const PORT = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const routes = require("./routes/routes");
routes(app);

// Start a server
app.listen(PORT, () => console.log(`Server up on PORT: ${PORT}`))

