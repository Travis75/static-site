$( document ).ready(function() {
  //Create canvas with the device resolution.
  CANVAS_WIDTH = window.innerWidth - 30;
  CANVAS_HEIGHT = window.innerHeight - 30;
  var myCanvas = createHiDPICanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
  $('#container').append(myCanvas)

  // Grab Canvas & Set Font & Size
  var c = $('canvas')[0]
  var context = c.getContext("2d");
  context.font = "30px Arial";

  var display = new Word(["Pawtastic", "Pawdacious", "Pawsome", "Pawcitement"], context)
  display.loop();
});


function Word(words, context) {
  this.words = words;
  this.word = this.words.shift();
  this.context = context;
  this.x_axis = 0;
  this.y_axis = 50;
  this.alpha = 0;
  this.delta = 0.017;
}

Word.prototype = {
  loop: function() {
    this.alpha += this.delta;
    this.context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    this.context.fillStyle = "rgba(255,255,255, " + this.alpha + ")";
    this.context.fillText(this.word, this.x_axis, this.y_axis)
    if (this.alpha <= 0 || this.alpha >= 1) {
      this.delta = -this.delta;
      if (this.alpha <= 0) {
        this.words.push(this.word)
        this.word = this.words.shift();
        this.newXAxis();
        this.newYAxis();
      }
    }
    var self = this;
    requestAnimationFrame(function(){self.loop()});
  },
  newXAxis: function() {
    this.x_axis = Math.floor(Math.random()*CANVAS_WIDTH) + 1;
  },
  newYAxis: function() {
    this.y_axis = Math.floor(Math.random()*CANVAS_HEIGHT) + 1;
  }
};

// Below functions create canvas with proper ratio
var PIXEL_RATIO = (function () {
  var ctx = document.createElement("canvas").getContext("2d"),
    dpr = window.devicePixelRatio || 1,
    bsr = ctx.webkitBackingStorePixelRatio ||
          ctx.mozBackingStorePixelRatio ||
          ctx.msBackingStorePixelRatio ||
          ctx.oBackingStorePixelRatio ||
          ctx.backingStorePixelRatio || 1;

  return dpr / bsr;
})();
createHiDPICanvas = function(w, h, ratio) {
  if (!ratio) { ratio = PIXEL_RATIO; }
  var can = document.createElement("canvas");
  can.width = w * ratio;
  can.height = h * ratio;
  can.style.width = w + "px";
  can.style.height = h + "px";
  can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
  return can;
}

