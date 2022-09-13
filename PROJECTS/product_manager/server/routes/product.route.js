// import the controller to use the instantiated model
const ProductController = require("../controllers/product.controller");
// console.log(NinjaController);

module.exports = (app) => {
    app.get("/api/products", ProductController.findAll)
    app.post("/api/products", ProductController.create)
    app.get("/api/products/:id", ProductController.findOne)
    app.put("/api/products/:id", ProductController.update)
    app.delete("/api/products/:id", ProductController.delete)
}