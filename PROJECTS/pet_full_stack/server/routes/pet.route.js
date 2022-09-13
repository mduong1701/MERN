// import the controller to use the instantiated model
const PetController = require("../controllers/pet.controller");
// console.log(NinjaController);

module.exports = (app) => {
    app.get("/api/pets", PetController.findAll)
    app.post("/api/pets", PetController.create)
    app.get("/api/pets/:id", PetController.findOne)
    app.put("/api/pets/:id", PetController.update)
    app.delete("/api/pets/:id", PetController.delete)
}