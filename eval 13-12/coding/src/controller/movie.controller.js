const express = require('express')

const router = express.Router();

const Movie = require('../model/movie.model');
const Screen = require('../model/screen.model');
const Seats = require('../model/seats.model');
const Theater = require('../model/theaters.model');
const Show = require('../model/show.model');



router.post("/movies", async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        const all = await Movie.find();
        return res.status(200).json({ movie,all:all });
    } catch (e) {
        res.status(404).send({ message: e.message });
    }
})
// to post theaters with their names and
router.post("/theater", async (req, res) => {
    try {
        const theater = await Theater.create(req.body);
        const all_theates = await Theater.find({});
        return res.status(200).json({
            theater,all:all_theates });
    } catch (e) {
        res.status(404).send({ message: e.message });
    }
})

router.post("/screen", async (req, res) => {
    try {
        const screen = await Screen.create(req.body);
        const all_screen = await Screen.find({}).populate("theater");
        return res.status(200).json({
            screen,all:all_screen });
    } catch (e) {
        res.status(404).send({ message: e.message });
    }
})

// to add show
router.post("/show", async (req, res) => {
    try {
        const show = await Show.create(req.body);

        const all_show = await Show.find({}).populate("screens").populate("movie");

        return res.status(200).json({
            show, all: all_show
        });
    } catch (e) {
        res.status(404).send({ message: e.message });
    }
});
// post total Seats
router.post("/seats", async (req, res) => {
    try {
        const show = await Seats.create(req.body);

        const all_show = await Seats.find({}).populate("show");

        return res.status(200).json({
            show, all: all_show
        });
    } catch (e) {
        res.status(404).send({ message: e.message });
    }
});



// to get all the shows for a perticular moive
router.get("/shows/:id", async (req, res) => {
    try {
        let shows = await Show.find({}).populate("movie");
        shows = shows.map((el) => {
            if (el.movie.name == req.params.id) {
                return el;
            }
        })


        return res.status(200).json({shows});

    } catch (e) {
        res.status(404).send({ message: e.message });
    }
});

// to get all seats the shows 
router.get("/seats/:id", async (req, res) => {
    try {
        let seats = await Seats.find({ show: req.params.id })

        return res.status(200).json({seats});

    } catch (e) {
        res.status(404).send({ message: e.message });
    }
});

// to get all movies
router.get("/movies/:actor", async (req, res) => {
    try {
        let movie = await Movie.find({ actors: req.params.actor})

        return res.status(200).json({movie});

    } catch (e) {
        res.status(404).send({ message: e.message });
    }
});

// to get all movies
router.get("/shows/nearest/:city", async (req, res) => {
    try {
        let show = await Show.find().populate({
            path: "screens",
            populate: { 
            path:"theater"
            }
        })
        console.log(show)
        let available = show.filter((el) => {
            if (el.screens != null) {
                
                if (el.screens.theater.location == req.params.city) {
                    return el;
                }
            }
        })

        
        
        
        return res.status(200).json({available});

    } catch (e) {
        res.status(404).send({ message: e.message });
    }
});

router.post("/seats/:id/:count", async (req, res) => {
    try {
        let seats = await Seats.find({ show: req.params.id })
        if (seats.length < req.params.count) {
             return res.status(200).json({message:"seats not avalable"});
        } else {
            for (let i = 0; i < req.params.count; i++){
                console.log(seats[i]._id);
                let del = Seats.findByIdAndDelete(seats[i]._id).lean().exec();
                console.log(del)
            }
        }
        seats = await Seats.find({ show: req.params.id })

        return res.status(200).json({seats,message:`${req.params.count} seats book`});

    } catch (e) {
        res.status(404).send({ message: e.message });
    }
});





module.exports = router;
