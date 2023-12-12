let counter = 0;

function updateCounter() {
    counter += 1;
    console.log("Counter Value is: " + counter);
}

// Use setInterval outside the loop to avoid multiple overlapping intervals

    setInterval(updateCounter, 1000);

