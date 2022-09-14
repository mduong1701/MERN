// import the controller to use the instantiated model
const Note = require("../controllers/controller");
// console.log(NinjaController);

module.exports = (app) => {
    app.get("/api/notes", Note.findAll)
    app.post("/api/notes", Note.create)
    app.get("/api/notes/:id", Note.findOne)
    app.put("/api/notes/:id", Note.update)
    app.delete("/api/notes/:id", Note.delete)
}