const express = require("express");
const router = express.Router();
const {Workout} = require("../../models")

router.get("/", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            console.log(err)
        })
});


module.exports = router;