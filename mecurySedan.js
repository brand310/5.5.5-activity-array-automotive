const VehicleModule = require("./vehicle.js")

class car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    checkService() {
        if (this.mileage > 50000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        }
    }

    start() {
        if (this.fuel > 0) {            
            console.log("Engine start.");
            return this.started = true
        } else {
            console.log("No fuel.");
            return this.started = false;
        }
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + "Over Capacity. Not enough room for additional passengers!");

            }
        } else {
            console.log(this.model + " " + this.make + "Over capacity.");
        }
    }


}

let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "Red", 10000);

console.log(v.make)