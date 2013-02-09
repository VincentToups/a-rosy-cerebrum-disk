define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "rosy/utils", "rosy/wall", "rosy/drawing", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, moduleC47fa390df, moduleB147560188, moduleminus6acd260b96, gamvas)  {
  var currentModuleminus77557 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus77557 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/operator-functions" :all)
    ;
    // ("hooves/lisp-idioms" :all)
    ;
    // ("hooves/hooves" :all)
    ;
    // ("rosy/utils" :all)
    ;
    // ("rosy/wall" :all)
    ;
    // ("rosy/drawing" :all)
    ;
    // ((js "gamvas/gamvas-module" gamvas))
    ;
    var keyedPredicate = "macro - no dynamic value.";
    var extension = {      
      
    };
    var pairToRect = (function ()      {
      var returnValueminus77562 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus77561",
          args:arguments
        };
        });
      var recurP77565 = (function (valminus77566)        {
        if ((("undefined")===((typeof valminus77566))))          {
          return false;
          };
        return (valminus77566.recurSigil===("recurSigilminus77561"));
        });
      var actualFunminus77564 = (function ()        {
        return (function (arguments)          {
          var G77568 = undefined;
          var G77569 = Array.prototype.slice.apply(arguments);
          G77568 = (function (arguments)            {
            var matchValminus77570 = G77569;
            if ((!((("object")===((typeof matchValminus77570))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchValminus77570.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus77571 = matchValminus77570[0];
            var matchTempminus77572 = matchValminus77570[1];
            if ((!((("object")===((typeof matchTempminus77571))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchTempminus77571.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var x1 = matchTempminus77571[0];
            var y1 = matchTempminus77571[1];
            if ((!((("object")===((typeof matchTempminus77572))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchTempminus77572.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var x2 = matchTempminus77572[0];
            var y2 = matchTempminus77572[1];
            var cx = moduleminus58c4bce870.divide(moduleminus58c4bce870.plus(x1, x2), 2), cy = moduleminus58c4bce870.divide(moduleminus58c4bce870.plus(y1, y2), 2), w = Math.abs(moduleminus58c4bce870.minus(x1, x2)), h = Math.abs(moduleminus58c4bce870.minus(y1, y2));
            return [cx, cy, w, h, 0];
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G77568))))            {
            return G77568;
            };
          G77568 = (function (arguments)            {
            var matchValminus77573 = G77569;
            var anythingElseminus77567 = matchValminus77573;
            throw ((("Match fail in pair-to-rect against: ")+anythingElseminus77567));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G77568))))            {
            return G77568;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: [: x1 y1] [: x2 y2]] (var cx (/ (+ x1 x2) 2) cy (/ (+ y1 y2) 2) w (Math\.abs (- x1 x2)) h (Math\.abs (- y1 y2))) [: cx cy w h 0]) (anything-else-77567 (_throw (_+ ''Match fail in pair-to-rect against: '' anything-else-77567))))) for value ")+(JSON.stringify(G77569))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus77562 = actualFunminus77564.apply(this, arguments);
      while (recurP77565(returnValueminus77562))        {
        returnValueminus77562 = actualFunminus77564.apply(this, returnValueminus77562.args);
        };
      return returnValueminus77562;
      });
    var atg = "macro - no dynamic value.";
    var atgk = "macro - no dynamic value.";
    var atgm = "macro - no dynamic value.";
    var mouseLeft = gamvas.mouse.LEFT, mouseRight = gamvas.mouse.RIGHT, mouseCenter = gamvas.mouse.CENTER, up = gamvas.key.UP, down = gamvas.key.DOWN, left = gamvas.key.LEFT, right = gamvas.key.RIGHT, escape = gamvas.key.ESCAPE, pageUp = gamvas.key.PAGE_UP, pageDown = gamvas.key.PAGE_DOWN, u = gamvas.key.U, a = gamvas.key.A, i = gamvas.key.I, w = gamvas.key.W, n = gamvas.key.N, t = gamvas.key.T, s = gamvas.key.S, l = gamvas.key.L, r = gamvas.key.R, c = gamvas.key.C;
    var mousePressedPredicate = (function (b)      {
      return gamvas.mouse.isPressed(b);
      });
    var keyPressedPredicate = (function (k)      {
      return gamvas.key.isPressed(k);
      });
    (function (arguments)      {
      var defineToObjectminus77650 = extension;
      var init = (function ()        {
        gamvas.physics.pixelsPerMeter = 128;
        var w = gamvas.physics.resetWorld(0, 9.8, false);
        this.subState = "unfocused";
        this.ballStart = [0, 0];
        this.mouseClick = undefined;
        this.keyPress = undefined;
        this.wallCount = 0;
        return console.log("init sub-state ", this.subState);
        });
      defineToObjectminus77650.init = init;
      return defineToObjectminus77650;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus77718 = extension;
      var onMouseDown = (function (b, x, y, evt)        {
        this.mouseClick = [b, x, y, evt];
        });
      defineToObjectminus77718.onMouseDown = onMouseDown;
      return defineToObjectminus77718;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus77746 = extension;
      var onKeyDown = (function (k, c, evt)        {
        this.keyPress = k;
        });
      defineToObjectminus77746.onKeyDown = onKeyDown;
      return defineToObjectminus77746;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus77774 = extension;
      var maybePopKey = (function ()        {
        var k = this.keyPress;
        this.keyPress = undefined;
        return k;
        });
      defineToObjectminus77774.maybePopKey = maybePopKey;
      return defineToObjectminus77774;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus77810 = extension;
      var mouseInWorld = (function ()        {
        var matchVar77830 = gamvas.mouse.getPosition();
        var x = matchVar77830.x;
        if ((("undefined")===((typeof x))))          {
          throw ((("Match error in var-match (({} x x y y) (gamvas\.mouse\.get-position)) against: ")+matchVar77830));
          };
        var y = matchVar77830.y;
        if ((("undefined")===((typeof y))))          {
          throw ((("Match error in var-match (({} x x y y) (gamvas\.mouse\.get-position)) against: ")+matchVar77830));
          };
        ;
        return this.camera.toWorld(x, y);
        });
      defineToObjectminus77810.mouseInWorld = mouseInWorld;
      return defineToObjectminus77810;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus77840 = extension;
      var moveToMouse = (function ()        {
        var matchVar77861 = this.mouseClick;
        if ((!((("object")===((typeof matchVar77861))))))          {
          throw ((("Match error in var-match ([: btn x y evt] this\.mouse-click) against: ")+matchVar77861));
          };
        if ((!((4===matchVar77861.length))))          {
          throw ((("Match error in var-match ([: btn x y evt] this\.mouse-click) against: ")+matchVar77861));
          };
        var btn = matchVar77861[0];
        var x = matchVar77861[1];
        var y = matchVar77861[2];
        var evt = matchVar77861[3];
        ;
        var matchVar77862 = this.camera.toWorld(x, y);
        var x = matchVar77862.x;
        if ((("undefined")===((typeof x))))          {
          throw ((("Match error in var-match (({} x x y y) (\.\. this\.camera (to-world x y))) against: ")+matchVar77862));
          };
        var y = matchVar77862.y;
        if ((("undefined")===((typeof y))))          {
          throw ((("Match error in var-match (({} x x y y) (\.\. this\.camera (to-world x y))) against: ")+matchVar77862));
          };
        ;
        console.log("Mouse in world is ", x, y);
        return this.camera.setPosition(x, y);
        });
      defineToObjectminus77840.moveToMouse = moveToMouse;
      return defineToObjectminus77840;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus77872 = extension;
      var drawBallPosition = (function ()        {
        return (function (arguments)          {
          var G77919 = this;
          return (function (arguments)            {
            return (function (arguments)              {
              var context77933 = G77919.c;
              context77933.save();
              try                {
                G77919.c.beginPath();
                G77919.c.strokeStyle = "red";
                var matchVar77934 = G77919.ballStart;
                if ((!((("object")===((typeof matchVar77934))))))                  {
                  throw ((("Match error in var-match ([: x y] ball-start) against: ")+matchVar77934));
                  };
                if ((!((2===matchVar77934.length))))                  {
                  throw ((("Match error in var-match ([: x y] ball-start) against: ")+matchVar77934));
                  };
                var x = matchVar77934[0];
                var y = matchVar77934[1];
                ;
                G77919.c.translate(x, y);
                G77919.c.arc(0, 0, 10, 0, moduleminus58c4bce870.times(3, Math.PI));
                G77919.c.stroke();
                G77919.c.fillStyle = "blue";
                G77919.c.fillText("START", 0, 0);
                }finally                 {
                context77933.restore();
                };
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus77872.drawBallPosition = drawBallPosition;
      return defineToObjectminus77872;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus77940 = extension;
      var pointToIntersectingWalls = (function (x, y)        {
        var walls = [];
        var actors = this.getActors();
        for (index in (actors))          {
          (function (arguments)            {
            var G77969 = undefined;
            var G77970 = actors[index];
            G77969 = (function (arguments)              {
              var matchValminus77971 = G77970;
              var matchFunExprminus77973 = (function (G77972)                {
                return (G77972 instanceof moduleB147560188.Wall);
                });
              if ((!(matchFunExprminus77973(matchValminus77971))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var wall = matchValminus77971;
              return ((wall.pointInside(x, y))?(walls.push(wall)) : (undefined));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G77969))))              {
              return G77969;
              };
            G77969 = (function (arguments)              {
              var matchValminus77974 = G77970;
              var anything = matchValminus77974;
              return undefined;
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G77969))))              {
              return G77969;
              };
            throw ((("match-fail at ((match [actors index] ((instance Wall wall) (if (wall\.point-inside x y) (walls\.push wall))) (anything undefined))) for value ")+(JSON.stringify(G77970))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          };
        return walls;
        });
      defineToObjectminus77940.pointToIntersectingWalls = pointToIntersectingWalls;
      return defineToObjectminus77940;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus77980 = extension;
      var handleClickCreating = (function ()        {
        return (function (arguments)          {
          var G78039 = undefined;
          var G78040 = this.createPoints;
          G78039 = (function (arguments)            {
            var matchValminus78045 = G78040;
            if ((!((("undefined")===((typeof matchValminus78045))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchVar78046 = this.mouseInWorld();
            var mx = matchVar78046.x;
            if ((("undefined")===((typeof mx))))              {
              throw ((("Match error in var-match (({} x mx y my) (@ (mouse-in-world))) against: ")+matchVar78046));
              };
            var my = matchVar78046.y;
            if ((("undefined")===((typeof my))))              {
              throw ((("Match error in var-match (({} x mx y my) (@ (mouse-in-world))) against: ")+matchVar78046));
              };
            ;
            this.createPoints = [[mx, my]];
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78039))))            {
            return G78039;
            };
          G78039 = (function (arguments)            {
            var matchValminus78055 = G78040;
            if ((!((("object")===((typeof matchValminus78055))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus78055.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var p1 = matchValminus78055[0];
            var matchVar78056 = this.mouseInWorld();
            var mx = matchVar78056.x;
            if ((("undefined")===((typeof mx))))              {
              throw ((("Match error in var-match (({} x mx y my) (@ (mouse-in-world))) against: ")+matchVar78056));
              };
            var my = matchVar78056.y;
            if ((("undefined")===((typeof my))))              {
              throw ((("Match error in var-match (({} x mx y my) (@ (mouse-in-world))) against: ")+matchVar78056));
              };
            ;
            var matchVar78061 = pairToRect(p1, [mx, my]);
            if ((!((("object")===((typeof matchVar78061))))))              {
              throw ((("Match error in var-match ([: x y w h _] (pair-to-rect p1 [: mx my])) against: ")+matchVar78061));
              };
            if ((!((5===matchVar78061.length))))              {
              throw ((("Match error in var-match ([: x y w h _] (pair-to-rect p1 [: mx my])) against: ")+matchVar78061));
              };
            var x = matchVar78061[0];
            var y = matchVar78061[1];
            var w = matchVar78061[2];
            var h = matchVar78061[3];
            var _ = matchVar78061[4];
            ;
            console.log("Create ", x, y, w, h);
            this.addActor((new (moduleB147560188.Wall)(moduleminus58c4bce870.plus("Wall-", this.wallCount), x, y, w, h, 0)));
            this.wallCount = moduleminus58c4bce870.plus(1, this.wallCount);
            this.createPoints = undefined;
            this.subState = "unfocused";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78039))))            {
            return G78039;
            };
          G78039 = (function (arguments)            {
            var matchValminus78082 = G78040;
            var otherwise = matchValminus78082;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78039))))            {
            return G78039;
            };
          throw ((("match-fail at ((match (@ create-points) (undefined (var-match ({} x mx y my) (@ (mouse-in-world))) (set! (@ create-points) [: [: mx my]])) ([: p1] (var-match ({} x mx y my) (@ (mouse-in-world))) (var-match [: x y w h _] (pair-to-rect p1 [: mx my])) (console\.log ''Create '' x y w h) (this\.add-actor (new Wall (+ ''Wall-'' (@ wall-count)) x y w h 0)) (set! (@ wall-count) (+ 1 (@ wall-count))) (set! (@ create-points) undefined) (set! (@ sub-state) :unfocused)) (otherwise undefined))) for value ")+(JSON.stringify(G78040))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus77980.handleClickCreating = handleClickCreating;
      return defineToObjectminus77980;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus78088 = extension;
      var handleClickUnfocused = (function ()        {
        this.moveToMouse();
        var matchVar78140 = this.mouseClick;
        if ((!((("object")===((typeof matchVar78140))))))          {
          throw ((("Match error in var-match ([: btn x y evt] this\.mouse-click) against: ")+matchVar78140));
          };
        if ((!((4===matchVar78140.length))))          {
          throw ((("Match error in var-match ([: btn x y evt] this\.mouse-click) against: ")+matchVar78140));
          };
        var btn = matchVar78140[0];
        var x = matchVar78140[1];
        var y = matchVar78140[2];
        var evt = matchVar78140[3];
        ;
        var matchVar78141 = this.camera.toWorld(x, y);
        var wx = matchVar78141.x;
        if ((("undefined")===((typeof wx))))          {
          throw ((("Match error in var-match (({} x wx y wy) (this\.camera\.to-world x y)) against: ")+matchVar78141));
          };
        var wy = matchVar78141.y;
        if ((("undefined")===((typeof wy))))          {
          throw ((("Match error in var-match (({} x wx y wy) (this\.camera\.to-world x y)) against: ")+matchVar78141));
          };
        ;
        return (function (arguments)          {
          var G78142 = undefined;
          var G78143 = this.pointToIntersectingWalls(wx, wy);
          G78142 = (function (arguments)            {
            var matchValminus78148 = G78143;
            if ((!((("object")===((typeof matchValminus78148))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchValminus78148.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78142))))            {
            return G78142;
            };
          G78142 = (function (arguments)            {
            var matchValminus78149 = G78143;
            if ((!((("object")===((typeof matchValminus78149))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus78149.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var w = matchValminus78149[0];
            var actors = this.getActors();
            for (index in (actors))              {
              (function (arguments)                {
                var G78154 = undefined;
                var G78155 = actors[index];
                G78154 = (function (arguments)                  {
                  var matchValminus78156 = G78155;
                  var matchFunExprminus78158 = (function (G78157)                    {
                    return (G78157 instanceof moduleB147560188.Wall);
                    });
                  if ((!(matchFunExprminus78158(matchValminus78156))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var wall = matchValminus78156;
                  wall.focused = false;
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78154))))                  {
                  return G78154;
                  };
                G78154 = (function (arguments)                  {
                  var matchValminus78159 = G78155;
                  var anything = matchValminus78159;
                  return undefined;
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78154))))                  {
                  return G78154;
                  };
                throw ((("match-fail at ((match [actors index] ((instance Wall wall) (set! wall\.focused false)) (anything undefined))) for value ")+(JSON.stringify(G78155))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              };
            w.focused = true;
            this.focus = w;
            this.subState = "focused";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78142))))            {
            return G78142;
            };
          G78142 = (function (arguments)            {
            var matchValminus78168 = G78143;
            var anythingElse = matchValminus78168;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78142))))            {
            return G78142;
            };
          throw ((("match-fail at ((match (@ (point->intersecting-walls wx wy)) ([:] undefined) ([: w] (var actors (@ (get-actors))) (for (index in actors) (match [actors index] ((instance Wall wall) (set! wall\.focused false)) (anything undefined))) (set! w\.focused true) (set! (@ focus) w) (set! (@ sub-state) :focused)) (anything-else undefined))) for value ")+(JSON.stringify(G78143))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus78088.handleClickUnfocused = handleClickUnfocused;
      return defineToObjectminus78088;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus78174 = extension;
      var handleKeyPressUnfocused = (function (k)        {
        return (function (arguments)          {
          var G78208 = undefined;
          var G78209 = this.maybePopKey();
          G78208 = (function (arguments)            {
            var matchValminus78214 = G78209;
            var matchFunExprminus78215 = moduleminus4745e9d952.TripleEqualminus_(c);
            if ((!(matchFunExprminus78215(matchValminus78214))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            this.subState = "creating";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78208))))            {
            return G78208;
            };
          G78208 = (function (arguments)            {
            var matchValminus78220 = G78209;
            var matchFunExprminus78221 = moduleminus4745e9d952.TripleEqualminus_(i);
            if ((!(matchFunExprminus78221(matchValminus78220))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            this.subState = "moveBallStart";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78208))))            {
            return G78208;
            };
          G78208 = (function (arguments)            {
            var matchValminus78226 = G78209;
            var otherwise = matchValminus78226;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78208))))            {
            return G78208;
            };
          throw ((("match-fail at ((match (@ (maybe-pop-key)) ((p (===_ c)) (set! (@ sub-state) :creating)) ((p (===_ i)) (set! (@ sub-state) :move-ball-start)) (otherwise undefined))) for value ")+(JSON.stringify(G78209))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus78174.handleKeyPressUnfocused = handleKeyPressUnfocused;
      return defineToObjectminus78174;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus78232 = extension;
      var handleKeyPressMoveBallStart = (function (k)        {
        return (function (arguments)          {
          var G78264 = undefined;
          var G78265 = this.maybePopKey();
          G78264 = (function (arguments)            {
            var matchValminus78270 = G78265;
            var matchFunExprminus78271 = moduleminus4745e9d952.TripleEqualminus_(escape);
            if ((!(matchFunExprminus78271(matchValminus78270))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            this.this.mouseClick = undefined;
            this.subState = "unfocused";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78264))))            {
            return G78264;
            };
          G78264 = (function (arguments)            {
            var matchValminus78280 = G78265;
            var anything = matchValminus78280;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78264))))            {
            return G78264;
            };
          throw ((("match-fail at ((match (@ (maybe-pop-key)) ((p (===_ escape)) (set! (@ this\.mouse-click) undefined) (set! (@ sub-state) :unfocused)) (anything undefined))) for value ")+(JSON.stringify(G78265))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus78232.handleKeyPressMoveBallStart = handleKeyPressMoveBallStart;
      return defineToObjectminus78232;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus78286 = extension;
      var handleKeyPressCreating = (function (k)        {
        return (function (arguments)          {
          var G78330 = undefined;
          var G78331 = this.maybePopKey();
          G78330 = (function (arguments)            {
            var matchValminus78336 = G78331;
            var matchFunExprminus78337 = moduleminus4745e9d952.TripleEqualminus_(escape);
            if ((!(matchFunExprminus78337(matchValminus78336))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return ((moduleminus4745e9d952.definedPredicate(createPoints))?((function (arguments)              {
              this.createPoints = undefined;
              this.mouseClick = undefined;
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))) : ((function (arguments)              {
              this.createPoints = undefined;
              setbang(this.mouseClick.undefined);
              this.subState = "unfocused";
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78330))))            {
            return G78330;
            };
          G78330 = (function (arguments)            {
            var matchValminus78358 = G78331;
            var anything = matchValminus78358;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78330))))            {
            return G78330;
            };
          throw ((("match-fail at ((match (@ (maybe-pop-key)) ((p (===_ escape)) (if (defined\? create-points) (progn (set! (@ create-points) undefined) (set! (@ mouse-click) undefined)) (progn (set! (@ create-points) undefined) (set! (@ mouse-click undefined)) (set! (@ sub-state) :unfocused)))) (anything undefined))) for value ")+(JSON.stringify(G78331))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus78286.handleKeyPressCreating = handleKeyPressCreating;
      return defineToObjectminus78286;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus78364 = extension;
      var handleKeyPressFocused = (function (time)        {
        var matchVar78411 = this.focus.position;
        var x = matchVar78411.x;
        if ((("undefined")===((typeof x))))          {
          throw ((("Match error in var-match (({} x x y y) this\.focus\.position) against: ")+matchVar78411));
          };
        var y = matchVar78411.y;
        if ((("undefined")===((typeof y))))          {
          throw ((("Match error in var-match (({} x x y y) this\.focus\.position) against: ")+matchVar78411));
          };
        ;
        var r = this.focus.rotation;
        return (function (arguments)          {
          var G78412 = undefined;
          var G78413 = this.maybePopKey();
          G78412 = (function (arguments)            {
            var matchValminus78418 = G78413;
            var previousMatchSucceededminus78419 = true;
            switch (1){
                          case 1:
              var matchFunExprminus78420 = moduleminus4745e9d952.TripleEqualminus_(escape);
              if ((!(matchFunExprminus78420(matchValminus78418))))                {
                previousMatchSucceededminus78419 = false;
                };
              if (previousMatchSucceededminus78419)                {
                break;
                };
              previousMatchSucceededminus78419 = true;
              case 1:
              var matchFunExprminus78421 = moduleminus4745e9d952.TripleEqualminus_(u);
              if ((!(matchFunExprminus78421(matchValminus78418))))                {
                previousMatchSucceededminus78419 = false;
                };
              if (previousMatchSucceededminus78419)                {
                break;
                };
              previousMatchSucceededminus78419 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            focus.focused = false;
            this.focus = undefined;
            this.subState = "unfocused";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78412))))            {
            return G78412;
            };
          G78412 = (function (arguments)            {
            var matchValminus78430 = G78413;
            var matchFunExprminus78431 = moduleminus4745e9d952.TripleEqualminus_(up);
            if ((!(matchFunExprminus78431(matchValminus78430))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.focus.move(0, moduleminus58c4bce870.times(time, -70));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78412))))            {
            return G78412;
            };
          G78412 = (function (arguments)            {
            var matchValminus78432 = G78413;
            var matchFunExprminus78433 = moduleminus4745e9d952.TripleEqualminus_(down);
            if ((!(matchFunExprminus78433(matchValminus78432))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.focus.move(0, moduleminus58c4bce870.times(time, 70));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78412))))            {
            return G78412;
            };
          G78412 = (function (arguments)            {
            var matchValminus78434 = G78413;
            var matchFunExprminus78435 = moduleminus4745e9d952.TripleEqualminus_(right);
            if ((!(matchFunExprminus78435(matchValminus78434))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.focus.move(moduleminus58c4bce870.times(time, 70), 0);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78412))))            {
            return G78412;
            };
          G78412 = (function (arguments)            {
            var matchValminus78436 = G78413;
            var matchFunExprminus78437 = moduleminus4745e9d952.TripleEqualminus_(left);
            if ((!(matchFunExprminus78437(matchValminus78436))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.focus.move(moduleminus58c4bce870.times(time, -70), 0);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78412))))            {
            return G78412;
            };
          G78412 = (function (arguments)            {
            var matchValminus78438 = G78413;
            var matchFunExprminus78439 = moduleminus4745e9d952.TripleEqualminus_(pageUp);
            if ((!(matchFunExprminus78439(matchValminus78438))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.focus.rotate(moduleminus58c4bce870.divide(Math.PI, 32));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78412))))            {
            return G78412;
            };
          G78412 = (function (arguments)            {
            var matchValminus78440 = G78413;
            var matchFunExprminus78441 = moduleminus4745e9d952.TripleEqualminus_(pageDown);
            if ((!(matchFunExprminus78441(matchValminus78440))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.focus.rotate(moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(Math.PI, 32)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78412))))            {
            return G78412;
            };
          G78412 = (function (arguments)            {
            var matchValminus78442 = G78413;
            var anything = matchValminus78442;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78412))))            {
            return G78412;
            };
          throw ((("match-fail at ((match (@ (maybe-pop-key)) ((or (p (===_ escape)) (p (===_ u))) (set! focus\.focused false) (set! (@ focus) undefined) (set! (@ sub-state) :unfocused)) ((p (===_ up)) (this\.focus\.move 0 (* time -70))) ((p (===_ down)) (this\.focus\.move 0 (* time 70))) ((p (===_ right)) (this\.focus\.move (* time 70) 0)) ((p (===_ left)) (this\.focus\.move (* time -70) 0)) ((p (===_ page-up)) (this\.focus\.rotate (/ Math\.PI 32))) ((p (===_ page-down)) (this\.focus\.rotate (- (/ Math\.PI 32)))) (anything undefined))) for value ")+(JSON.stringify(G78413))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus78364.handleKeyPressFocused = handleKeyPressFocused;
      return defineToObjectminus78364;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus78448 = extension;
      var handleKeyPress = (function (time)        {
        (((!(moduleminus58c4bce870.TripleEqualminus("focused", this.subState))))?((function (arguments)          {
          ((((gamvas.key.isPressed(gamvas.key.PAGE_UP))&&(moduleminus58c4bce870.lessThan(this.camera.zoomFactor, 1.5))))?(this.camera.zoom(moduleminus58c4bce870.times(time, 0.7))) : (undefined));
          ((((gamvas.key.isPressed(gamvas.key.PAGE_DOWN))&&(moduleminus58c4bce870.greaterThan(this.camera.zoomFactor, 0.1))))?(this.camera.zoom(moduleminus58c4bce870.times(time, -0.7))) : (undefined));
          ((gamvas.key.isPressed(gamvas.key.UP))?(this.camera.move(0, moduleminus58c4bce870.times(time, -70))) : (undefined));
          ((gamvas.key.isPressed(gamvas.key.DOWN))?(this.camera.move(0, moduleminus58c4bce870.times(time, 70))) : (undefined));
          ((gamvas.key.isPressed(gamvas.key.LEFT))?(this.camera.move(moduleminus58c4bce870.times(time, -70), 0)) : (undefined));
          return ((gamvas.key.isPressed(gamvas.key.RIGHT))?(this.camera.move(moduleminus58c4bce870.times(time, 70), 0)) : (undefined));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))) : (undefined));
        return (function (arguments)          {
          var G78560 = undefined;
          var G78561 = this.subState;
          G78560 = (function (arguments)            {
            var matchValminus78566 = G78561;
            if ((!(("unfocused"===matchValminus78566))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleKeyPressUnfocused();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78560))))            {
            return G78560;
            };
          G78560 = (function (arguments)            {
            var matchValminus78571 = G78561;
            if ((!(("moveBallStart"===matchValminus78571))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleKeyPressMoveBallStart();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78560))))            {
            return G78560;
            };
          G78560 = (function (arguments)            {
            var matchValminus78576 = G78561;
            if ((!(("creating"===matchValminus78576))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleKeyPressCreating();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78560))))            {
            return G78560;
            };
          G78560 = (function (arguments)            {
            var matchValminus78581 = G78561;
            if ((!(("focused"===matchValminus78581))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleKeyPressFocused(time);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78560))))            {
            return G78560;
            };
          G78560 = (function (arguments)            {
            var matchValminus78586 = G78561;
            var anything = matchValminus78586;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78560))))            {
            return G78560;
            };
          throw ((("match-fail at ((match (@ sub-state) (:unfocused (@ (handle-key-press-unfocused))) (:move-ball-start (@ (handle-key-press-move-ball-start))) (:creating (@ (handle-key-press-creating))) (:focused (@ (handle-key-press-focused time))) (anything undefined))) for value ")+(JSON.stringify(G78561))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus78448.handleKeyPress = handleKeyPress;
      return defineToObjectminus78448;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus78592 = extension;
      var handleClick = (function ()        {
        ((moduleminus4745e9d952.definedPredicate(this.mouseClick))?((function (arguments)          {
          var G78651 = undefined;
          var G78652 = this.subState;
          G78651 = (function (arguments)            {
            var matchValminus78657 = G78652;
            if ((!(("unfocused"===matchValminus78657))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleClickUnfocused();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78651))))            {
            return G78651;
            };
          G78651 = (function (arguments)            {
            var matchValminus78662 = G78652;
            if ((!(("creating"===matchValminus78662))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleClickCreating();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78651))))            {
            return G78651;
            };
          G78651 = (function (arguments)            {
            var matchValminus78667 = G78652;
            if ((!(("moveBallStart"===matchValminus78667))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchVar78668 = this.mouseClick;
            if ((!((("object")===((typeof matchVar78668))))))              {
              throw ((("Match error in var-match ([: btn x y evt] this\.mouse-click) against: ")+matchVar78668));
              };
            if ((!((4===matchVar78668.length))))              {
              throw ((("Match error in var-match ([: btn x y evt] this\.mouse-click) against: ")+matchVar78668));
              };
            var btn = matchVar78668[0];
            var x = matchVar78668[1];
            var y = matchVar78668[2];
            var evt = matchVar78668[3];
            ;
            var matchVar78669 = this.camera.toWorld(x, y);
            var x = matchVar78669.x;
            if ((("undefined")===((typeof x))))              {
              throw ((("Match error in var-match (({} x x y y) (\.\. this\.camera (to-world x y))) against: ")+matchVar78669));
              };
            var y = matchVar78669.y;
            if ((("undefined")===((typeof y))))              {
              throw ((("Match error in var-match (({} x x y y) (\.\. this\.camera (to-world x y))) against: ")+matchVar78669));
              };
            ;
            this.ballStart = [x, y];
            this.subState = "unfocused";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78651))))            {
            return G78651;
            };
          G78651 = (function (arguments)            {
            var matchValminus78678 = G78652;
            if ((!(("focused"===matchValminus78678))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleClickUnfocused();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78651))))            {
            return G78651;
            };
          throw ((("match-fail at ((match (@ sub-state) (:unfocused (@ (handle-click-unfocused))) (:creating (@ (handle-click-creating))) (:move-ball-start (var-match [: btn x y evt] this\.mouse-click) (var-match ({} x x y y) (\.\. this\.camera (to-world x y))) (set! (@ ball-start) [: x y]) (set! (@ sub-state) :unfocused)) (:focused (@ (handle-click-unfocused))))) for value ")+(JSON.stringify(G78652))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))) : (undefined));
        this.mouseClick = undefined;
        });
      defineToObjectminus78592.handleClick = handleClick;
      return defineToObjectminus78592;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus78692 = extension;
      var drawUnfocused = (function (time)        {
        return undefined;
        });
      defineToObjectminus78692.drawUnfocused = drawUnfocused;
      return defineToObjectminus78692;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus78712 = extension;
      var drawCreating = (function (time)        {
        var c = this.c;
        return (function (arguments)          {
          var G78758 = undefined;
          var G78759 = this.createPoints;
          G78758 = (function (arguments)            {
            var matchValminus78764 = G78759;
            if ((!((("undefined")===((typeof matchValminus78764))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78758))))            {
            return G78758;
            };
          G78758 = (function (arguments)            {
            var matchValminus78765 = G78759;
            if ((!((("object")===((typeof matchValminus78765))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus78765.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus78766 = matchValminus78765[0];
            if ((!((("object")===((typeof matchTempminus78766))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchTempminus78766.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var cx = matchTempminus78766[0];
            var cy = matchTempminus78766[1];
            return (function (arguments)              {
              var context78772 = c;
              context78772.save();
              try                {
                var matchVar78773 = this.mouseInWorld();
                var mx = matchVar78773.x;
                if ((("undefined")===((typeof mx))))                  {
                  throw ((("Match error in var-match (({} x mx y my) (@ (mouse-in-world))) against: ")+matchVar78773));
                  };
                var my = matchVar78773.y;
                if ((("undefined")===((typeof my))))                  {
                  throw ((("Match error in var-match (({} x mx y my) (@ (mouse-in-world))) against: ")+matchVar78773));
                  };
                ;
                var xs = [mx];
                var matchVar78778 = [cx, mx].sort();
                if ((!((("object")===((typeof matchVar78778))))))                  {
                  throw ((("Match error in var-match ([: x1 x2] (\.\. [: cx mx] (sort))) against: ")+matchVar78778));
                  };
                if ((!((2===matchVar78778.length))))                  {
                  throw ((("Match error in var-match ([: x1 x2] (\.\. [: cx mx] (sort))) against: ")+matchVar78778));
                  };
                var x1 = matchVar78778[0];
                var x2 = matchVar78778[1];
                ;
                var matchVar78779 = [cy, my].sort();
                if ((!((("object")===((typeof matchVar78779))))))                  {
                  throw ((("Match error in var-match ([: y1 y2] (\.\. [: cy my] (sort))) against: ")+matchVar78779));
                  };
                if ((!((2===matchVar78779.length))))                  {
                  throw ((("Match error in var-match ([: y1 y2] (\.\. [: cy my] (sort))) against: ")+matchVar78779));
                  };
                var y1 = matchVar78779[0];
                var y2 = matchVar78779[1];
                ;
                c.strokeStyle = "red";
                c.beginPath();
                c.moveTo(x1, y1);
                c.lineTo(x2, y1);
                c.lineTo(x2, y2);
                c.lineTo(x1, y2);
                c.lineTo(x1, y1);
                c.stroke();
                }finally                 {
                context78772.restore();
                };
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78758))))            {
            return G78758;
            };
          G78758 = (function (arguments)            {
            var matchValminus78780 = G78759;
            var anything = matchValminus78780;
            return anything;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78758))))            {
            return G78758;
            };
          throw ((("match-fail at ((match (@ create-points) (undefined undefined) ([: [: cx cy]] (save-excursion c (var-match ({} x mx y my) (@ (mouse-in-world))) (var xs [: mx]) (var-match [: x1 x2] (\.\. [: cx mx] (sort))) (var-match [: y1 y2] (\.\. [: cy my] (sort))) (set! c\.stroke-style ''red'') (c\.begin-path) (c\.move-to x1 y1) (c\.line-to x2 y1) (c\.line-to x2 y2) (c\.line-to x1 y2) (c\.line-to x1 y1) (c\.stroke))) (anything anything))) for value ")+(JSON.stringify(G78759))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus78712.drawCreating = drawCreating;
      return defineToObjectminus78712;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus78786 = extension;
      var draw = (function (time)        {
        return (function (arguments)          {
          var G78881 = this;
          return (function (arguments)            {
            this.handleClick();
            this.handleKeyPress(time);
            (function (arguments)              {
              var G78898 = undefined;
              var G78899 = G78881.subState;
              G78898 = (function (arguments)                {
                var matchValminus78900 = G78899;
                if ((!(("unfocused"===matchValminus78900))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                return this.drawUnfocused(time);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78898))))                {
                return G78898;
                };
              G78898 = (function (arguments)                {
                var matchValminus78905 = G78899;
                if ((!(("focused"===matchValminus78905))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                return this.drawUnfocused(time);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78898))))                {
                return G78898;
                };
              G78898 = (function (arguments)                {
                var matchValminus78910 = G78899;
                if ((!(("moveBallStart"===matchValminus78910))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                return this.drawUnfocused(time);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78898))))                {
                return G78898;
                };
              G78898 = (function (arguments)                {
                var matchValminus78915 = G78899;
                if ((!(("creating"===matchValminus78915))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                return this.drawCreating(time);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G78898))))                {
                return G78898;
                };
              throw ((("match-fail at ((match sub-state (:unfocused (@ (draw-unfocused time))) (:focused (@ (draw-unfocused time))) (:move-ball-start (@ (draw-unfocused time))) (:creating (@ (draw-creating time))))) for value ")+(JSON.stringify(G78899))));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            this.drawBallPosition();
            this.camera.stop();
            return (function (arguments)              {
              var context78929 = this.c;
              context78929.save();
              try                {
                G78881.c.textAlign = "center";
                G78881.c.fillStyle = "red";
                G78881.c.font = "bold 10px sans-serif";
                var matchVar78934 = gamvas.getCanvasDimension();
                var w = matchVar78934.w;
                if ((("undefined")===((typeof w))))                  {
                  throw ((("Match error in var-match (({} w w h h) (gamvas\.get-canvas-dimension)) against: ")+matchVar78934));
                  };
                var h = matchVar78934.h;
                if ((("undefined")===((typeof h))))                  {
                  throw ((("Match error in var-match (({} w w h h) (gamvas\.get-canvas-dimension)) against: ")+matchVar78934));
                  };
                ;
                G78881.c.fillText(this.subState, moduleminus58c4bce870.divide(w, 2), 18);
                var matchVar78939 = gamvas.mouse.getPosition();
                var x = matchVar78939.x;
                if ((("undefined")===((typeof x))))                  {
                  throw ((("Match error in var-match (({} x x y y) (gamvas\.mouse\.get-position)) against: ")+matchVar78939));
                  };
                var y = matchVar78939.y;
                if ((("undefined")===((typeof y))))                  {
                  throw ((("Match error in var-match (({} x x y y) (gamvas\.mouse\.get-position)) against: ")+matchVar78939));
                  };
                ;
                var matchVar78940 = this.camera.toWorld(x, y);
                var x = matchVar78940.x;
                if ((("undefined")===((typeof x))))                  {
                  throw ((("Match error in var-match (({} x x y y) (\.\. (@ camera) (to-world x y))) against: ")+matchVar78940));
                  };
                var y = matchVar78940.y;
                if ((("undefined")===((typeof y))))                  {
                  throw ((("Match error in var-match (({} x x y y) (\.\. (@ camera) (to-world x y))) against: ")+matchVar78940));
                  };
                ;
                G78881.c.fillText(moduleminus58c4bce870.plus(x, ", ", y), moduleminus58c4bce870.divide(w, 2), moduleminus58c4bce870.times(18, 2));
                }finally                 {
                context78929.restore();
                };
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus78786.draw = draw;
      return defineToObjectminus78786;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    currentModuleminus77557.Spoonbill = gamvas.State.extend(extension);
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus77557;
  }))