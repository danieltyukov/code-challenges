const express = require("express");

const beer_Act = require("../controllers/beers");

const router = express.Router();

router.get("/beers", beer_Act.getBeers);
router.get("/searchBeer:beerName", beer_Act.searchBeer);
router.post("/createBeer", beer_Act.createBeer);
router.put("/updateBeer:beerId", beer_Act.updateBeer);

router.get("/isRunning", beer_Act.isRunning);

module.exports = router;