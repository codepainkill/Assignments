let counter = 0;

function updateCounter() {
    counter += 1;
    console.log("Counter Value is: " + counter);
    if(counter!=0)
    {
        setTimeout(updateCounter,1000);
    }
}

updateCounter();
