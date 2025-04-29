console.log("Timer started!");

setTimeout(() => {
    console.log("3 seconds passed!");
}, 3000);

let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log("Count: ", count);

    if (count === 5) {
        clearInterval(intervalId);
        console.log("Counting stopped!");
    }
}, 1000);