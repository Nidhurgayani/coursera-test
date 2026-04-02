(function(window) {
  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.speak = function(name) {
    var p = document.createElement("p");
    p.textContent = speakWord + " " + name;
    document.body.appendChild(p);
  };

  window.helloSpeaker = helloSpeaker;
})(window);


