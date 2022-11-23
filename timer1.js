// Implement an alarm clock/timer which will beep after a specified amount of time has passed. 
// Node System Sound - process.stdout.write('\x07');

// for code to pass cmd line arg, have to use process.argv
// use .slice() to return a portion of that array of command line args
// process.argv.slice(2) to start return at index 2, which returns 10 3 5 15 9
const input = process.argv.slice(2);
let delay = 0;

const beepTimer = () => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay * 1000);                // multiply by 1000 because given values are not in milliseconds
};
// Loop through the times of input string
for (const times of input) {              
  const timesNumber = Number(times);     // Converts times to real Numbers
  if (!isNaN(timesNumber) && timesNumber >= 0) {   // If time is not NaN (case 1, 3) and time is >=0 (case 2)
    delay += timesNumber;         // so the next element gets added to the previous element before returning
   beepTimer(delay);              // run the beepTimer function while passing 'delay'
  }
};



/* EDGE CASES
1) No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
2) An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
3) An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
*/

// The user can specify an unlimited number of alarms using command line arguments
// TEST CODE
// node timer1.js 10 3 5 15 9 
