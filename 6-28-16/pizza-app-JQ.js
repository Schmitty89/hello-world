/*
GOALS FOR PIZZA UNICORN
2.  Orders contain one or many Pizzas
3.  Pizzas have one or many Items
4.  PU has many Delivery People
5.  Orders get assigned to a Random Delivery Person
*/

// *********** Initialize ***********

var pageAddCustomer = $('#page-add-customer');
var pageAddPizza = $('#page-add-pizza');
var pageCart = $('#page-cart');
var pageReceipt = $('#page-receipt');
var buttonCustomer = $('#btn-add-customer');
var buttonPizza = $('#btn-add-pizza');
var buttonCart = $('#btn-add-cart');
var linkAddMorePizzas = $('#add-more-pizzas');

var firstName = $('#firstName');
var lastName = $('#lastName');
var email = $('#email');
var state = $('#state');
var zip = $('#zip');
var pizzaDropdown = $('#pizza-dropdown');
var pizzaSizeList = $('#pizza-size-list');
var toppingList = $('#topping-list');
var pizzaForm = $('#pizza-form');
var cartDisplay = $('#cart-display');
var navLinks = $('.nav-link');

var customer = {};
var order = {};
var pizza = {};

// *********** Create Customer Page ***********
pageAddCustomer.css('display','block');
var currentPage = pageAddCustomer;

buttonCustomer.on( 'click', function() {
  customer = new Customer(firstName.val(), lastName.val(), email.val(), state.val(), zip.val());
  order = new Order(customer);

  loadPizzaOptions();

  console.log('');
  console.log('------ Customer Order Created! ------');
  console.log(customer);
  console.log(order);

  navigate(currentPage, pageAddPizza);
});

// *********** Add Pizzas Page ***********
buttonPizza.on( 'click', function() {
  pizza = new Pizza();
  var pizzaSize = new PizzaSize(pizzaDropdown.dataset.name, parseFloat(pizzaDropdown.dataset.cost));
  pizza.setSize(pizzaSize);

  for (i = 0; i < pizzaForm.elements.length; i++) {
    var toppingInput = pizzaForm.elements[i];
    if (toppingInput.type === 'checkbox') {
      if (toppingInput.checked === true) {
        var topping = new Topping(toppingInput.dataset.name, parseFloat(toppingInput.dataset.cost));
        pizza.addTopping(topping);
      }
    }
  }
  order.addPizza(pizza);

  console.log('');
  console.log('------ Pizza Added! ------');
  console.log(pizza);
  console.log(order.pizzas);

  navigate(currentPage, pageCart);

  showCart();
});

var loadPizzaOptions = function() {
  var caretText = ' <span class="caret"></span>';
  pizzaDropdown.innerHTML = "Select a Pizza" + caretText;
  delete pizzaDropdown.data('name');
  delete pizzaDropdown.data('cost');
  pizzaSizeList.innerHTML = '';
  toppingList.innerHTML = '';

  for (i = 0; i < allPizzaSizes.length; i++) {
    var listItemLink = $('<a></a>');
    listItemLink.attr('href', '#');
    listItemLink.data('name' , allPizzaSizes[i].name);
    listItemLink.data('cost' , allPizzaSizes[i].cost);
    listItemLink.html( allPizzaSizes[i].name);

    listItemLink.on( 'click', function() {
      pizzaDropdown.html(this.html + caretText);
      pizzaDropdown.dataset.name = this.dataset.name;
      pizzaDropdown.attr('data-cost', this.attr('data-cost'));
    });

    var listItem = $('<li></li>');
    listItem.append(listItemLink);
    pizzaSizeList.append(listItem);
  }

  for (i = 0; i < allToppings.length; i++) {
    var thisTopping = allToppings[i];
    var toppingDiv = $('<div></div>');
    var toppingLabel = $('<label></label>');
    var toppingInput = $('<input type = checkbox></input>');
    var toppingLabelText = document.createTextNode(thisTopping.name);

    toppingDiv.className = 'checkbox';
    toppingInput.type = 'checkbox';
    toppingInput.data('thisTopping', 'name');
    toppingInput.data( 'thisTopping' , 'cost');

    toppingLabel.append(toppingInput);
    toppingLabel.append(toppingLabelText);
    toppingDiv.append(toppingLabel);
    toppingList.append(toppingDiv);
  }

}

// *********** Show Cart Page ***********
buttonCart.on( 'click', function() {
  var deliveryPerson = deliveryPeople[ Math.floor(Math.random() * deliveryPeople.length) ];
  order.addDeliveryPerson(deliveryPerson);

  console.log('');
  console.log('------ Order Complete! ------');
  console.log(customer);
  console.log(order);

  navigate(currentPage, pageReceipt);
});

linkAddMorePizzas.on( 'click', function() {
  loadPizzaOptions();
  navigate(currentPage, pageAddPizza);
});

var showCart = function() {

  cartDisplay.innerHTML = '';

  for (i = 0; i < order.pizzas.length; i++) {
    var pizza = order.pizzas[i];
    var pizzaDisplay = document.createElement('p');
    pizzaDisplay.innerHTML = pizza.size.name + ': $' + pizza.size.cost.toFixed(2);
    var toppingListDisplay = document.createElement('ul');

    for (x = 0; x < pizza.toppings.length; x++) {
      var toppingItem = document.createElement('li');
      var thisTopping = pizza.toppings[x];
      toppingItem.innerHTML = thisTopping.name + ': $' + thisTopping.cost.toFixed(2);
      toppingListDisplay.append(toppingItem);
      console.log(toppingListDisplay);
    }

    pizzaDisplay.append(toppingListDisplay);
    var pizzaTotal = document.createTextNode('Pizza Total: $' + pizza.totalCost.toFixed(2))
    pizzaDisplay.append(pizzaTotal);


    cartDisplay.append(pizzaDisplay);
  }

  var orderTotal = document.createElement('p');
  orderTotal.innerHTML = 'Order Total: $' + order.totalCost.toFixed(2);
  cartDisplay.append(orderTotal);
}

// *********** Navigation ***********
var navigate = function(pageFrom, pageTo) {
  pageFrom.css('display', 'none');
  currentPage = pageTo;
  currentPage.css('display', 'block');
}

// Nav links
  navLinks.on( 'click', function() {
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

/*
PizzaSize.prototype.changeName = function(newName) {
  this.name = newName;
}
PizzaSize.prototype.changeCost = function(newName) {
  this.name = newName;
}
PizzaSize.prototype.getName = function() {
  alert(this.name);
}
*/

var DeliveryPerson = function(name, phone, car) {
  this.name = name,
  this.phone = phone,
  this.car = car
}
