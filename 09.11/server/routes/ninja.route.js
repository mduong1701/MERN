// import the controller to use the instantiated model
const NinjaController = require("../controllers/ninja.controller");
// console.log(NinjaController);

module.exports = (app) => {
    app.get("/api/ninjas", NinjaController.findAllNinjas)
    app.post("/api/ninjas", NinjaController.createNinja)
    app.get("/api/ninjas/:bob", NinjaController.findOneSingleNinja)
    app.put("/api/ninjas/:id", NinjaController.updateExistingNinja)
    app.delete("/api/ninjas/:id", NinjaController.deleteAnExistingNinja)
}