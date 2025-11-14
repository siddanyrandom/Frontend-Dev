let product = " wireless headphones PRO ";

let cleaned = product.trim().toLowerCase();

let capitalized = cleaned
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

let finalTitle = capitalized.replace("Pro", "Pro Edition");

console.log(finalTitle);
console.log("Length:", finalTitle.length);
