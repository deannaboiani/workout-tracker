const express = require("express");
const router = express.Router();
const db = require("../models/Workout");

router.get("/", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            console.log(err)
        })
});

// db.Workout.create({ name: "Workout Plan" })
//   .then(dbWorkout => {
//     console.log(dbWorkout);
//   })
//   .catch(({message}) => {
//     console.log(message);
//   });

  router.get("/exercises", (req, res) => {
    db.Exercise.find({})
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.get("/wokrouts", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  router.get("/populated", (req, res) => {
    db.Workout.find({})
      .populate("exercises")
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });


module.exports = router;