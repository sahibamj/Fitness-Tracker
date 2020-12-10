const router = require('express').Router();
var path = require('path');
const Workout = require("./models/workouts-schema.js");

router.post("/api/workouts", (req, res) => {
  Workout.create(req.body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.put("/api/workouts/:workoutId", (req, res) => {
  const {
    params: { workoutId },
    body,
  } = req;

  Workout.findOneAndUpdate(
    { _id: workoutId },
    {
      $push: {
        exercises: {...body},
      },
    },
    { new: true },
  ).then((dbWorkout) => { 
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find().sort('+day')
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find()
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.get('/exercise', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/exercise.html'));
});

router.get('/stats', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/stats.html'));
});

module.exports = router;
