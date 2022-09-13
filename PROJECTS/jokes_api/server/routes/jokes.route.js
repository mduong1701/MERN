// import the controller to use the instantiated model
const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
    app.get("/api/jokes", JokeController.findAllJokes)
    app.get("/api/jokes/:id", JokeController.findOneSingleJoke)
    app.get("/api/jokes/random", JokeController.findOneRandomJoke)
    app.post("/api/jokes/new", JokeController.createJoke)
    app.put("/api/jokes/update/:id", JokeController.updateExistingJoke)
    app.delete("/api/jokes/delete/:id", JokeController.deleteAnExistingJoke)
}