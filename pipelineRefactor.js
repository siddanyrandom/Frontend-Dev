function delay(task, callback) {
    setTimeout(() => {
        console.log(task);
        callback();
    }, 1000);
}

delay("design", () => {
    delay("build", () => {
        delay("test", () => {
            delay("deploy", () => {
                delay("celebrate", () => {});
            });
        });
    });
});

function step(task) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(task);
            resolve();
        }, 1000);
    });
}

async function runPipeline() {
    await step("design");
    await step("build");
    await step("test");
    await step("deploy");
    await step("celebrate");
}

runPipeline();

