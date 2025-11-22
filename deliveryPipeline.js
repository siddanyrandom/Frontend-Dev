function asyncStep(message) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000;
        const success = Math.random() > 0.2;
        setTimeout(() => {
            success ? resolve(message) : reject("Step failed");
        }, delay);
    });
}

function takeOrder()   { return asyncStep("Step 1: Order taken"); }
function prepare()     { return asyncStep("Step 2: Food prepared"); }
function pack()        { return asyncStep("Step 3: Package ready"); }
function dispatch()    { return asyncStep("Step 4: Out for delivery"); }
function deliver()     { return asyncStep("Delivery completed!"); }

async function runPipeline() {
    console.log("Start Pipeline");
    try {
        console.log(await takeOrder());
        console.log(await prepare());
        console.log(await pack());
        console.log(await dispatch());
        console.log(await deliver());
        console.log("Pipeline finished successfully");
    } catch {
        console.log("Pipeline failed!");
    }
}

runPipeline();
