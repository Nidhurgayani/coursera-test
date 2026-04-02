(function(window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";

  byeSpeaker.speak = function(name) {
    var p = document.createElement("p");
    p.textContent = speakWord + " " + name;
    document.body.appendChild(p);
  };

  window.byeSpeaker = byeSpeaker;
})(window);


