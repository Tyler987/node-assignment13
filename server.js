const express = require("express");
const app = express();
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/exercises", (req, res) => {
    const exercises = [];

exercises[0] = {
  name: "Bench Press",
  repetitions: 10,
  sets: 4,
  weight: "150 lbs",
  totalweeklysets: 8,
  img: "images/bench.jpg",
};

exercises[1] = {
  name: "Barbell Shoulder Press",
  repetitions: 8,
  sets: 3,
  weight: "75 lbs",
  totalweeklysets: 6,
  img: "images/shoulder.jpg",
};

exercises[2] = {
  name: "Barbell Curl",
  repetitions: 12,
  sets: 3,
  weight: "60 lbs",
  totalweeklysets: 6,
  img: "images/curl.jpg",
};

exercises[3] = {
  name: "Pullups",
  repetitions: 10,
  sets: 5,
  weight: "45 lbs",
  totalweeklysets: 10,
  img: "images/pullups.jpg",
};

exercises[4] = {
  name: "Dips",
  repetitions: 12,
  sets: 4,
  weight: "45 lbs",
  totalweeklysets: 8,
  img: "images/dips.jpg",
};

exercises[5] = {
  name: "Back Squat",
  repetitions: 8,
  sets: 5,
  weight: "200 lbs",
  totalweeklysets: 10,
  img: "images/squat.jpg",
};
    res.send(exercises);
})

app.listen(3000, () => {
    console.log("I'm listening");
});
