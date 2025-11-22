function simulateAsyncTask(taskName) {
    return new Promise((resolve, reject) => {
        const time = Math.floor(Math.random() * 1000) + 1000;
        console.log(`Starting: ${taskName}...`);
        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log(`Completed: ${taskName}`);
                resolve();
            } else {
                reject(`Failed at step: ${taskName}`);
            }
        }, time);
    });
}

function boilWater() {
    return simulateAsyncTask("Boiling water");
}

function brewCoffee() {
    return simulateAsyncTask("Brewing coffee");
}

function pourCoffee() {
    return simulateAsyncTask("Pouring into cup");
}

boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => console.log("Coffee ready for the team!"))
    .catch(err => console.log("Error:", err));
