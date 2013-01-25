<!DOCTYPE html>
<html>
    <head>
      <title>Spoonbill Editor</title>
      <!-- data-main attribute tells require.js to load
           scripts/main.js after require.js loads. -->
      <script data-main="scripts/spoonbill-main.js" src="scripts/require.js"></script>
    </head>
    <body>
	  <canvas id="canvas" width="256" height="192" style="float:left; margin:30px;">
		Canvas is not supported.
	  </canvas>
	  <div>
Controls
========

Depend on Mode.  Initially, one is in the unfocused mode.  

In all modes but focus mode, the arrow keys move the camera.

1.   c: enter create mode, to add a rectangle
     click twice in create mode to create a rect
     press escape to exit create mode
2.   i: enter a mode to move the initial ball condition
     click to set the new position
3.   click: either move the camera to the clicked location
     or focus the clicked object.

In focus mode, the focused rect is highlighted:

1.   up: move the rect up
2.   down: move the rect down
3.   left: move the rect left
4.   right: move the rect right
5.   page-up:rotate up
6.   page-down:rotate down 


	  </div>
	  <h3>Output</h3>
	  <textarea id="spoonbillOutput"></textarea>
    </body>
</html>


