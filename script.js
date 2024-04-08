/** @format */

let time = 0;

// all dom
const showTime = document.getElementById("time");

// display time
const handleDisplayTime = (time) => {
  let show = "";
  if (time >= 0) {
    const hours = parseInt(time / 3600);
    const minutes = parseInt((time % 3600) / 60);
    const seconds = parseInt((time % 3600) % 60);
    if (hours > 0 && hours.toString().length > 1) show += hours + ":";
    else if (hours.toString().length === 1) show += "0" + hours + ":";
    else show += "00:";
    if (minutes > 0 && minutes.toString().length > 1) show += minutes + ":";
    else if (minutes.toString().length === 1) show += "0" + minutes + ":";
    else show += "00:";
    if (seconds > 0 && seconds.toString().length > 1)
      show += seconds.toString();
    else if (seconds.toString().length === 1) show += "0" + seconds;
    else show += "00";
  }
  showTime.innerText = show;
};

handleDisplayTime(time);

let increaseTime = null;

// time increase handler for setinterval
const handleTimeIncrease = () => {
  time++;
  handleDisplayTime(time);
};

// all handler

// start stop watch handler
const handleStart = () => {
  if (!increaseTime) increaseTime = setInterval(handleTimeIncrease, 1000);
};

// handler for stop time
const handleStop = () => {
  clearInterval(increaseTime);
  increaseTime = null;
};

// handle for reset time
const handleReset = () => {
  clearInterval(increaseTime);
  time = 0;
  increaseTime = null;
  handleDisplayTime(time);
};
