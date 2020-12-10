const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    name: {
      type: String,
      required: "Enter a name"
    },
    type: {
      type: String,
      required: "Enter a type"
    },
    weight: {
      type: Number,
      required: "Enter a weigth"
    },
    sets: {
      type: Number,
      required: "Enter the number of sets"
    },
    reps: {
      type: Number,
      required: "Enter the number of reps"
    },
    duration: {
      type: Number,
      required: "Enter the duration"
    },
    distance: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
);

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [exerciseSchema],
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    }
  },
);

workoutSchema.virtual('totalDuration').get(function() {
  return this.exercises.reduce(
    (total, current) => total + current.duration,
    0,
  );
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
