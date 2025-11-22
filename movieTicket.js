class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

MovieTicket.prototype.printTicket = function() {
    console.log(this.movieName, this.seatNo, this.price);
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

const t1 = new OnlineTicket("Inception", "A12", 250, 30);
const t2 = new OnlineTicket("Interstellar", "B09", 300, 40);

console.log("Total:", t1.getTotalAmount());
console.log("Total:", t2.getTotalAmount());

t1.printTicket();
t2.printTicket();
