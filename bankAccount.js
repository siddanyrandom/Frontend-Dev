class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            throw "Insufficient balance";
        }
        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const acc = new BankAccount();

acc.deposit(1000);
console.log("Balance:", acc.getBalance());

try {
    acc.withdraw(500);
    console.log("Balance:", acc.getBalance());
} catch (err) {
    console.log("Error:", err);
}

try {
    acc.withdraw(800);
    console.log("Balance:", acc.getBalance());
} catch (err) {
    console.log("Error:", err);
}
