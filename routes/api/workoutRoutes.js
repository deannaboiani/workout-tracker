const express = require("express");
const router = express.Router();
const Workout = require('../../models')

app.get("/api/workouts", (req, res) => {
    db.workouts.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  });

module.exports = router;