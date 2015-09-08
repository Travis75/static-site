$( document ).ready(function() {
  verticalCenter();
  var words = $("#word-display img")
  setInterval(function(){verticalCenter();}, 500);
  loop(words);
});

function loop(words) {
  var word = words.shift();
  var $word = $(word);
  $word.fadeIn(2000);
  $word.fadeOut(2000, function(){
    words.push(word);
    loop(words);
  });
}

function verticalCenter() {
  var width = window.innerWidth;
  var $container = $("#container")
  if (width <= 1300 && width > 1000) {
    $container.css("margin-top", "7em");
  } else if (width <= 1000 && width > 700) {
    $container.css("margin-top", "10em");
  } else if (width <= 700 && width > 400) {
    $container.css("margin-top", "12em");
  } else if (width <= 400 && width > 0) {
    $container.css("margin-top", "13em");
  }
}

(function( $ ) {
    $.fn.pop = function() {
        var top = this.get(-1);
        this.splice(this.length-1,1);
        return top;
    };

    $.fn.shift = function() {
        var bottom = this.get(0);
        this.splice(0,1);
        return bottom;
    };
})( jQuery );
