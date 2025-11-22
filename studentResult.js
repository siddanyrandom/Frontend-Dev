class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        return this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
    }

    getGrade() {
        const avg = this.calculateAverage();
        if (avg >= 90) return "A";
        if (avg >= 75) return "B";
        if (avg >= 60) return "C";
        return "F";
    }
}

const s1 = new Student("Siddhartha", [95, 92, 90, 87]);
const s2 = new Student("Rohan", [70, 68, 72, 66]);
const s3 = new Student("Aditi", [55, 58, 60, 52]);

console.log(s1.name, s1.calculateAverage(), s1.getGrade());
console.log(s2.name, s2.calculateAverage(), s2.getGrade());
console.log(s3.name, s3.calculateAverage(), s3.getGrade());
