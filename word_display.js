$( document ).ready(function() {
  var words = ["Pawtastic", "Pawdacious"]
  $("#" + words.shift()).fadeIn(1500)
});

function WordPlay(words) {
  this.word = words.shift();
  this.words= words
}

WordPlay.prototype = {
  rotate: function() {
    this.words.push(this.word)
    this.word = words.shift();
  }
}
