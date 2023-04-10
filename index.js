//Initialize variables
let seconds = -1; 
let minutes = 0;
let hours   = 0;

//This function increaments the seconds, minutes and hours
function process() {
  if (seconds < 59) {
    seconds++;
  } else {
    if (minutes < 59) {
      minutes++;
      seconds = 0;
    } else {
      if (condition) {
        hours++;
        minutes = 0;
        seconds = 0;
      }
    }
  }

  //Log
  console.log(
    "Hours : ",
    hours,
    " Minutes : ",
    minutes,
    " Seconds : ",
    seconds
  );
}

setInterval(process, 1000);
