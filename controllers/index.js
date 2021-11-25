const express = require("express");
const router = express.Router();

const workoutRoutes = require('./workoutRoutes');
router.use('/workouts',workoutRoutes);


const htmlRoutes = require('./htmlRoutes');
router.use('/',htmlRoutes);

module.exports = router;