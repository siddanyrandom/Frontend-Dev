class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (!this.distance || this.distance < 0) {
            throw "Invalid distance";
        }
        return this.distance * 12;
    }
}

const driver = new Driver("Aman", 4.8, "Maruti Swift");
const trip = new Trip("Delhi", "Noida", 15);

try {
    console.log("Fare:", trip.calculateFare());
} catch (err) {
    console.log("Error:", err);
}

const badTrip = new Trip("Delhi", "Gurgaon", -5);

try {
    console.log("Fare:", badTrip.calculateFare());
} catch (err) {
    console.log("Error:", err);
}
