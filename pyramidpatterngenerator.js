"use strict";

const limit = (() => {
  const n = Number(process.argv[2]);
  return Number.isInteger(n) && n > 0 ? n : 5;
})();

console.log(`Limit: ${limit}`);
for (let i = 1; i <= limit; i++) {
  let line = "";
  for (let j = 0; j < i; j++) {
    line += "*";
    if (j < i - 1) line += " ";
  }
  console.log(line);
}
