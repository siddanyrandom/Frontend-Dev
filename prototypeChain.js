function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    console.log("Name:", this.name);
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function() {
    console.log("Department:", this.department);
};

function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function() {
    console.log("Subject:", this.subject);
};

const prof = new Professor("Siddhartha", "CSE", "Operating Systems");

prof.showName();
prof.showDepartment();
prof.showSubject();

console.log(Object.getPrototypeOf(prof) === Professor.prototype);
console.log(Object.getPrototypeOf(Professor.prototype) === Faculty.prototype);
console.log(Object.getPrototypeOf(Faculty.prototype) === Person.prototype);
