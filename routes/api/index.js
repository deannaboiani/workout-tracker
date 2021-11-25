const express = require("express");
const router = express.Router();

const exerciseRoutes = require("./exerciseRoutes");
router.use("/exercises", exerciseRoutes);

const workoutRoutes = require("./workoutRoutes");
router.use("/workouts", workoutRoutes);


module.exports = router;