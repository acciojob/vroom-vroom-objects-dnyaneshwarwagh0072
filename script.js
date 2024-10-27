function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

window.Car = Car;
window.SportsCar = SportsCar;

const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.getMakeModel());

const mySportsCar = new SportsCar('Ferrari', '488', 211);
console.log(mySportsCar.getMakeModel());
console.log(mySportsCar.getTopSpeed());

