$( document ).ready(function() {
  var words = ["Pawtastic", "Pawdacious"]
  var words = $("#word-display img")
  loop(words)
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
