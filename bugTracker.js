function getBugs() {
    return new Promise((resolve, reject) => {
        const apiSuccess = Math.random() > 0.2;
        setTimeout(() => {
            if (apiSuccess) {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            } else {
                reject("API Error: Failed to fetch bugs");
            }
        }, 1000);
    });
}

getBugs()
    .then(bugs => console.table(bugs))
    .catch(err => console.log(err));
