class Person2 {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(this.name);
    }
}

class Student2 extends Person2 {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log(this.branch);
    }
}

const p2 = new Student2("Siddhartha", "CSE");
p2.showName();
p2.showBranch();
