# Threading 

Each time node runs it opens a new process is a instrance of a 
program runing. 

A process can have many threads. 

threads has something called scheduling 
the os descides what threads will be processed. 

if you add more cpu cores to your computer 
you can process more threads with more cpus. 
with more cpus you can process threads at the sametime. 

I/O takes time! node checked the os scheduer to see if there is a pause in os time 

# The Node JS Event Loop

```
// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from myFile running
myFile.runContents();


function shouldContinue(){
    // Check one: Any pending setTimeout,setInterval,setImmediate?
    // Check two: Any pending OS tasks? (Like Server Listening to port)
    // Check three: Any pending long running operations (Like fs module)
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

// Event Loop is Single Threaded 
// Entire body executes in one 'tick'
while(shouldContinue()){

    // 1) Node looks at pendingTimers to see if any functions 
    // are ready to be called  setTimeout, setInterval

    // 2) Node looks at pendingOSTasks and pendingOperations and calls  relevant functions and recives a callback

    // 3) Pause execution. Continue when...
    // - a new pendingOSTask is done 
    // - a new pendingOperations is done
    // - a timer is about to complere 

    // 4) Look at pendingTimers. Call any setImmediate

    // 5) Handles any 'close' events like a node file stream

}


// exit back to terminal

```

Some of Node functions are not Single Threaded like:

- Some of crypto lib dose multithreading 
- All fs module using multithreading

