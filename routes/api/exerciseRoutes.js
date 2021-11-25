const express = require("express");
const router = express.Router();
const {Exercise} = require("../../models")

router.get("/", (req, res) => {
    Exercise.find({})
        .then(dbExercise => {
            res.json(dbExercise);
        }).catch(err => {
            console.log(err)
        })
});


module.exports = router;