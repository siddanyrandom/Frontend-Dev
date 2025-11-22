function submitOrder() {
    return new Promise((resolve, reject) => {
        const ok = Math.random() > 0.5;
        setTimeout(() => {
            ok ? resolve("Success") : reject("Failed");
        }, 500);
    });
}

async function processOrder() {
    for (let i = 1; i <= 3; i++) {
        try {
            await submitOrder();
            console.log(`Attempt ${i}: Success`);
            return;
        } catch {
            console.log(`Attempt ${i}: Failed`);
        }
    }
    throw "Order could not be processed";
}

(async () => {
    try {
        await processOrder();
    } catch (err) {
        console.log(err);
    }
})();
