console.log("1: Script start");

setTimeout(() => console.log("4: Timeout callback"), 0);

Promise.resolve().then(() => console.log("3: Promise callback"));

console.log("2: Script end");
