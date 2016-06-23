var garage = {
  cars: [{
    make: 'suzuki',
    model: 'side - kick',
    color: 'red'
  }, {
    make: 'mazda',
    model: 'miata',
    color: 'black'
  }, {
    make: 'honda',
    model: 'civic',
    color: 'purple'
  }, {
    make: 'toyota',
    model: 'prius',
    color: 'gold'
  }, {
    make: 'volkswagen',
    model: 'rabbit',
    color: 'green'
  }, {
    make: 'ford',
    model: 'F150',
    color: 'orange'
  }
]
};
  garage.buildCar = function() {
    var make = prompt('What make?');
    var model = prompt('what model?');
    var color = prompt('what color?');
  var newCar = ({make: make, model: model, color: color});
  this.cars.push(newCar);
};

var Garage = function (cars) {
  this.cars = cars
};
//this is the prototype//
var Car = function (make,model,color) {
  this.make = make;
  this.model = model;
  this.color = color;

}
var prowler = new Car ('plymouth','prowler','heat');
var modelT = new Car ('ford','model-T-pick-up','wood pannel');
var falcon = new Car ('ford','falcon','aztec gold');

var myGarage = new Garage ([prowler, modelT, falcon]);
