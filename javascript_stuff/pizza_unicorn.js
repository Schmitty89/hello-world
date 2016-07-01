/*
GOALS FOR PIZZA UNICORN
2.  Orders contain one or many Pizzas
3.  Pizzas have one or many Items
4.  PU has many Delivery People
5.  Orders get assigned to a Random Delivery Person
*/

// *********** Initialize ***********

var pageAddCustomer = document.getElementById('page-add-customer');
var pageAddPizza = document.getElementById('page-add-pizza');
var pageCart = document.getElementById('page-cart');
var pageReceipt = document.getElementById('page-receipt');
var buttonCustomer = document.getElementById('btn-add-customer');
var buttonPizza = document.getElementById('btn-add-pizza');
var buttonCart = document.getElementById('btn-add-cart');
var linkAddMorePizzas = document.getElementById('add-more-pizzas');

var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var email = document.getElementById('email');
var state = document.getElementById('state');
var zip = document.getElementById('zip');
var pizzaDropdown = document.getElementById('pizza-dropdown');
var pizzaSizeList = document.getElementById('pizza-size-list');
var navLinks = document.querySelectorAll('.nav-link');

var customer = {};
var order = {};
var pizza = {};

// *********** Create Customer Page ***********
pageAddCustomer.style.display = 'block';
var currentPage = pageAddCustomer;

buttonCustomer.addEventListener( 'click', function() {
  customer = new Customer(firstName.value, lastName.value, email.value, state.value, zip.value);
  order = new Order(customer);

  loadPizzaOptions();

  console.log('');
  console.log('------ Customer Order Created! ------');
  console.log(customer);
  console.log(order);

  navigate(currentPage, pageAddPizza);
});

// *********** Add Pizzas Page ***********
buttonPizza.addEventListener( 'click', function() {
  pizza = new Pizza();
  var pizzaSize = new PizzaSize(pizzaDropdown.dataset.name, pizzaDropdown.dataset.cost);
  pizza.setSize(pizzaSize);
  order.addPizza(pizza);

  console.log('');
  console.log('------ Pizza Added! ------');
  console.log(pizza);
  console.log(order.pizzas);

  navigate(currentPage, pageCart);
});

var loadPizzaOptions = function() {
  var caretText = ' <span class="caret"></span>';
  pizzaDropdown.innerHTML = "Select a Pizza" + caretText;
  delete pizzaDropdown.dataset.name;
  delete pizzaDropdown.dataset.cost;
  pizzaSizeList.innerHTML = '';


  for (i = 0; i < allPizzaSizes.length; i++) {
    var listItemLink = document.createElement('a');
    listItemLink.href = '#';
    listItemLink.dataset.name = allPizzaSizes[i].name;
    listItemLink.dataset.cost = allPizzaSizes[i].cost;
    listItemLink.innerHTML = allPizzaSizes[i].name;

    listItemLink.addEventListener( 'click', function() {
      pizzaDropdown.innerHTML = this.innerHTML + caretText;
      pizzaDropdown.dataset.name = this.dataset.name;
      pizzaDropdown.dataset.cost = this.dataset.cost;
    });

    var listItem = document.createElement('li');
    listItem.appendChild(listItemLink);
    pizzaSizeList.appendChild(listItem);
  }

}

// *********** Show Cart Page ***********
buttonCart.addEventListener( 'click', function() {
  var deliveryPerson = deliveryPeople[ Math.floor(Math.random() * deliveryPeople.length) ];
  order.addDeliveryPerson(deliveryPerson);

  console.log('');
  console.log('------ Order Complete! ------');
  console.log(customer);
  console.log(order);

  navigate(currentPage, pageReceipt);
});

linkAddMorePizzas.addEventListener( 'click', function() {
  loadPizzaOptions();
  navigate(currentPage, pageAddPizza);
});


// *********** Navigation ***********
var navigate = function(pageFrom, pageTo) {
  pageFrom.style.display = 'none';
  currentPage = pageTo;
  currentPage.style.display = 'block';
}

// Nav links
for (i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener( 'click', function() {
    switch (this.id) {
      case 'link-customer':
        navigate(currentPage, pageAddCustomer);
        break;

      case 'link-pizza':
        navigate(currentPage, pageAddPizza);
        break;

      case 'link-cart':
        navigate(currentPage, pageCart);
        break;

      case 'link-receipt':
        navigate(currentPage, pageReceipt);
        break;

      default:
        console.log('404');
    }
  });
}

// *********** App Objects ***********

var Customer = ( function() {
  var incrementedId = 1;

  return function Customer(firstName, lastName, email, state, zip) {
    this.id = incrementedId++,
    this.firstName = firstName,
    this.lastName = lastName,
    this.email = email,
    this.state = state,
    this.zip = zip
  }

} )();

var Order = ( function(customer) {
  var incrementedId = 10001;

  return function Order(customer) {
    this.id = incrementedId++,
    this.customerId = customer.id,
    this.deliveryPerson = {},
    this.pizzas = [],
    this.totalCost = 0,
    this.addPizza = function(pizza) {
      this.pizzas.push(pizza);
      this.totalCost += pizza.totalCost;
    },
    this.addDeliveryPerson = function(deliveryPerson) {
      this.deliveryPerson = deliveryPerson;
    }
  }
} )();

var Pizza = function() {
  this.toppings = [],
  this.totalCost = 0,
  this.size = {},
  this.setSize = function(size) {
    this.size = size;
    this.totalCost += parseInt(size.cost)
  }
  this.addTopping = function(topping){
    this.toppings.push(topping);
    this.totalCost += parseFloat(topping.cost);
  }
}

var Topping = function(name, cost) {
  this.name = name,
  this.cost = cost
}

var PizzaSize = function(name, cost) {
  this.name = name,
  this.cost = parseFloat(cost)
}

var DeliveryPerson = function(name, phone, car) {
  this.name = name,
  this.phone = phone,
  this.car = car
}
