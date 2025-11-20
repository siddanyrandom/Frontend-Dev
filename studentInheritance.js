function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    console.log(this.name);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function() {
    console.log(this.branch);
};

const s1 = new Student("Siddhartha", "CSE");

s1.showName();
s1.showBranch();

console.log(Object.getPrototypeOf(s1) === Student.prototype);
console.log(Object.getPrototypeOf(Student.prototype) === Person.prototype);
