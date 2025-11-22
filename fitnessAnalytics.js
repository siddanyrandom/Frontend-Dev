class FitnessAnalytics {
    constructor(data) {
        if (!data || data.length === 0) {
            throw "Dataset is empty";
        }
        this.data = data;
    }

    getActiveUsers() {
        return this.data.filter(d => d.steps > 7000);
    }

    getAverageCalories() {
        return this.data.reduce((sum, d) => sum + d.calories, 0) / this.data.length;
    }

    getUserSummary() {
        return this.data.map(d => `${d.user} walked ${d.steps} steps and burned ${d.calories} calories`);
    }
}

const data = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

try {
    const app = new FitnessAnalytics(data);

    console.log(app.getActiveUsers());
    console.log(app.getAverageCalories());
    console.log(app.getUserSummary());

} catch (err) {
    console.log("Error:", err);
}
