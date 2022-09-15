// import the controller to use the instantiated model
const Author = require("../controllers/author.controller");
// console.log(NinjaController);

module.exports = (app) => {
    app.get("/api/authors", Author.findAll)
    app.post("/api/authors", Author.create)
    app.get("/api/authors/:id", Author.findOne)
    app.put("/api/authors/:id", Author.update)
    app.delete("/api/authors/:id", Author.delete)
}