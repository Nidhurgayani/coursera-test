(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var firstLetter = name.charAt(0).toLowerCase();

    var message;
    if (firstLetter === 'j') {
      message = "Good Bye " + name;
    } else {
      message = "Hello " + name;
    }

    // Show the message on the page
    var p = document.createElement("p");
    p.textContent = message;
    document.body.appendChild(p);
  }
})();
(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var firstLetter = name.charAt(0).toLowerCase();

    var message;
    if (firstLetter === 'j') {
      message = "Good Bye " + name;
    } else {
      message = "Hello " + name;
    }

    // Show the message on the page
    var p = document.createElement("p");
    p.textContent = message;
    document.body.appendChild(p);
  }
})();
