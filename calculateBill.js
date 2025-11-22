const menu = {
    pizza: 200,
    burger: 120,
    pasta: 150,
    fries: 80,
    coffee: 60
};

function calculateBill(orderItems) {
    const prices = orderItems.map(item => {
        if (!menu[item]) throw `Invalid item: ${item}`;
        return menu[item];
    });

    return prices.reduce((a, b) => a + b, 0);
}

try {
    const total = calculateBill(["pizza", "coffee", "fries"]);
    console.log("Total Bill:", total);
} catch (err) {
    console.log("Error:", err);
}

try {
    const total2 = calculateBill(["burger", "samosa"]);
    console.log("Total Bill:", total2);
} catch (err) {
    console.log("Error:", err);
}
