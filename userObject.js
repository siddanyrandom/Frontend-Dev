const user = {
    name: "Siddhartha",
    showName: () => {
        console.log(this.name);
    }
};

user.showName();

const user2 = {
    name: "Siddhartha",
    showName() {
        console.log(this.name);
    }
};

user2.showName();
