const express = require("express");
const cors = require('cors')
const app = express();
const PORT = 8000;
const DB = "authors";

// --- MIDDLEWARE ---
app.use(cors())
app.use(express.json(), express.urlencoded({extended:true}));
// ------------------

// CONNECT to the DB using mongoose
require("./config/config")(DB)

// ==== import the routes AFTER the DB connection ===
require("./routes/author.route")(app)

// START THE SERVER
app.listen(PORT, () => console.log(`>> server up on ${PORT} <<`))