const express = require("express");
const app = express();
const PORT = 8000;
const DB = "ninjas";

// --- MIDDLEWARE ---
app.use(express.json(), express.urlencoded({extended:true}));
// ------------------

// CONNECT to the DB using mongoose
require("./config/mongoose.config")(DB)

// ==== import the routes AFTER the DB connection ===
require("./routes/ninja.route")(app)

// START THE SERVER
app.listen(PORT, () => console.log(`>> server up on ${PORT} <<`))