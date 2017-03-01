function computeArea(width, height) {
var oldWidth = 4;
 var oldHeight = 3;
  var newWidth = width;
  var newHeight = height;
  var newArea = newWidth * newHeight;
  var expected = oldWidth * oldHeight;
  if (expected === newArea) {
   console.log('SUCCESS: `computeArea` is working');
  }
  else {
    console.log('FAILURE: `computeArea` is not working');
  } // your code here
}


/* From here down, you are not expected to
   understand.... for now :)



*/
computeArea(4,3);
