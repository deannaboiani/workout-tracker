// be able to view create and track daily workouts.
// be able to log multiple exercises in a workout on a given day.
// be able to track the name, type, weight, sets, reps, and duration of exercise. 
// If the exercise is a cardio exercise, I should be able to track my distance traveled.
const express = require("express");
const mongojs = require("mongojs");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workout";
const collections = ["workouts"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});




// Set the app to listen on port 3000
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  