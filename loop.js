// PSEUDOCODE to understand event loop in Node JS

// node myFile.js

// event loop starts

// arrays created as soon as we start our program at the terminal:
const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];
// items get added to these arrays when we do some work inside of the program

// new timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  // Check one: Any pending setTimeout, setInterval, setImmediate?
  // Check two: Any pending OS tasks? (Like server listening to port)
  // Check three: Any pending long running operations? (Like fs module)
  // 3 checks Node makes every time to see if the event loop needs to run for another pass - 'tick'

  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperations.length
  );
}

// Entire body executes in one 'tick'
while (shouldContinue()) {
  // 1) Node looks at pendingTimers and sees if any functions are ready to be called. setTimeout, setInterval
  // 2) Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks
  // 3) Pause execution. Continue when...
  // - a new pendingOSTask is done
  // - a new pendingOperation is done
  // - a timer is about to complete
  // 4) Again look at pendingTimers. Call any setImmediate
  // 5) Handle any 'close' events
}
// 5 steps that are executed during every execution of the event loop
// this occurs during every single tick that occurs

// exit back to terminal - event loop done
