function serverA() {
    return new Promise((resolve, reject) => {
        const ok = Math.random() > 0.2;
        setTimeout(() => {
            ok ? resolve("Server A done") : reject("Server A failed");
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        const ok = Math.random() > 0.2;
        setTimeout(() => {
            ok ? resolve("Server B done") : reject("Server B failed");
        }, 3000);
    });
}

Promise.all([serverA(), serverB()])
    .then(() => console.log("Deployment completed for all servers"))
    .catch(err => console.log("Error:", err));

Promise.race([serverA(), serverB()])
    .then(result => console.log("Fastest response:", result))
    .catch(err => console.log("Error:", err));
