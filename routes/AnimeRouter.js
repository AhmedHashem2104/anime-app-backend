const Router = require("express").Router();
const AnimeController = require("../controllers/AnimeController");

Router.post("/search", AnimeController.searchAPI);

Router.post("/info", AnimeController.animeInfo);

Router.post("/episode", AnimeController.animeEpisode);

Route.get("/test" , (req , res) => {
  res.send(`Hello World`)
})

module.exports = Router;
