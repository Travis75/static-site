$( document ).ready(function() {

//Create canvas with the device resolution.
var myCanvas = createHiDPICanvas(window.innerWidth, window.innerHeight)
$('body').append(myCanvas)

  var c = $('canvas')[0]
  var context = c.getContext("2d");
  context.font = "30px Arial";

  var FPS = 30;
  setInterval(function(context) {
    drawText(context);
  }(context), 1000/FPS);
});



function drawText(context) {
  context.fillText("Hello World", 550, 100)
}











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


