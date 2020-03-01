"use strict";

const mondayTasks = [
  {
    name: "Daily standup",
    duration: 30 // specified in minutes
  },
  {
    name: "Feature discussion",
    duration: 120
  },
  {
    name: "Development time",
    duration: 240
  },
  {
    name: "Talk to different members from the product team",
    duration: 60
  }
];

const durations = mondayTasks.map(function(time) {
    return time.duration;
  });
  console.log(durations);

const total = durations.reduce(function (acc, time) {
    return acc + (time / 60) * 25 ;
  },0);
  console.log(`€${total}`);
  