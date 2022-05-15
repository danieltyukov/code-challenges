const Beer = require('../models/beerdata.js');

const createBeer = async (req, res) => {
    console.log(req.body);
    const newBeer = new Beer({
        beerName: req.body.beerName,
        rating: req.body.rating,
    })
    try {
        const savedBeer = await newBeer.save();
        res.status(201).json(savedBeer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateBeer = async (req, res) => {
    const beerId = req.params.beerId;
    try {
        const beer = await Beer.findOneAndUpdate({
            _id: beerId,
        },
            {
                rating: req.body.rating
            }
        )
        res.status(202).json(beer);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const getBeers = async (req, res) => {
    try {
        const beers = await Beer.find();
        res.status(200).json(beers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const searchBeer = async (req, res) => {
    const beerName = req.params.beerName;
    try {
        const beer = await Beer.find({
            beerName: beerName
        });
        res.status(200).json(beer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const isRunning = async (req, res) => {
    return res.json({ Status: "Server is running" });
}

module.exports.createBeer = createBeer;
module.exports.updateBeer = updateBeer;
module.exports.getBeers = getBeers;
module.exports.searchBeer = searchBeer;
module.exports.isRunning = isRunning;