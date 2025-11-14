let feedback = "Great product! Fast delivery and amazing sound quality!";

let wordCount = feedback.split(" ").length;

let hasNegative = feedback.toLowerCase().includes("bad") || 
                  feedback.toLowerCase().includes("poor");

let result = hasNegative ? "Needs Improvement" : "Positive Feedback";

console.log("Words:", wordCount);
console.log(result);
