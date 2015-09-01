$( document ).ready(function() {
  CANVAS_WIDTH = window.innerWidth;
  CANVAS_HEIGHT = window.innerHeight;
//Create canvas with the device resolution.
var myCanvas = createHiDPICanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
$('body').append(myCanvas)

  var c = $('canvas')[0]
  var context = c.getContext("2d");
  context.font = "30px Arial";

  var FPS = 30;
  setInterval(function(context, c) {
    drawText(context, c);
  }(context, c), 1000/FPS);
});



function drawText(context, canvas) {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  context.fillText("Hello World", 550, 100)
}



//  function fadeIn(text) {
//    var alpha = 0,   // zero opacity
//    interval = setInterval(function () {
//      canvas.width = canvas.width; // Clears the canvas
//      context.fillStyle = "rgba(255, 0, 0, " + alpha + ")";
//      context.font = "italic 20pt Arial";
//      context.fillText(text, 50, 50);
//      alpha = alpha - 0.05; // decrease opacity (fade out)
//      if (alpha < 0) {
//        canvas.width = canvas.width;
//        clearInterval(interval);
//      }
//    }, 50);
//







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


