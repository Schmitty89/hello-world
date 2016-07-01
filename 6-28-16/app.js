/*
Sample Data:
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}

this is how to get items from a
*/

var User = function(obj) {
  this.id = obj.id;
  this.name = obj.name;
  this.username = obj.username;
  this.email = obj.email;
  this.phone = obj.phone;
  this.website = obj.website;
};

User.prototype.getEmail = function () {
  return this.email;
};

var getAllUsers = function() {
  var req = new XMLHttpRequest();

  var onSuccess = function(res) {
    var users = JSON.parse(res);

    var userInstances = [];

    for (var i = 0; i < users.length; i++) {
      userInstances.push(new User(users[i]));
    }

    console.log(userInstances);
  };

  var onError = function(statusCode) {
    console.log(statusCode);
  };

  req.onreadystatechange = function() {
    if (this.readyState === 4) {
      if (this.status === 200) {
        onSuccess(this.responseText);
      } else {
        onError(this.status);
      }
    }
  };

  req.open('GET', 'http://jsonplaceholder.typicode.com/users');
  req.send();
};

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn-get-users').addEventListener('click', getAllUsers);
  document.getElementById('btn-save-post').addEventListener('click', savePost);
});
