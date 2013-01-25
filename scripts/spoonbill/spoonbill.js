define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "rosy/utils", "rosy/wall", "rosy/drawing", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, moduleC47fa390df, moduleB147560188, moduleminus6acd260b96, gamvas)  {
  var currentModuleminus87890 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus87890 = value;
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
      var returnValueminus87895 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus87894",
          args:arguments
        };
        });
      var recurP87898 = (function (valminus87899)        {
        if ((("undefined")===((typeof valminus87899))))          {
          return false;
          };
        return (valminus87899.recurSigil===("recurSigilminus87894"));
        });
      var actualFunminus87897 = (function ()        {
        return (function (arguments)          {
          var G87901 = undefined;
          var G87902 = Array.prototype.slice.apply(arguments);
          G87901 = (function (arguments)            {
            var matchValminus87903 = G87902;
            if ((!((("object")===((typeof matchValminus87903))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchValminus87903.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus87904 = matchValminus87903[0];
            var matchTempminus87905 = matchValminus87903[1];
            if ((!((("object")===((typeof matchTempminus87904))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchTempminus87904.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var x1 = matchTempminus87904[0];
            var y1 = matchTempminus87904[1];
            if ((!((("object")===((typeof matchTempminus87905))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchTempminus87905.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var x2 = matchTempminus87905[0];
            var y2 = matchTempminus87905[1];
            var cx = moduleminus58c4bce870.divide(moduleminus58c4bce870.plus(x1, x2), 2), cy = moduleminus58c4bce870.divide(moduleminus58c4bce870.plus(y1, y2), 2), w = Math.abs(moduleminus58c4bce870.minus(x1, x2)), h = Math.abs(moduleminus58c4bce870.minus(y1, y2));
            return [cx, cy, w, h, 0];
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G87901))))            {
            return G87901;
            };
          G87901 = (function (arguments)            {
            var matchValminus87906 = G87902;
            var anythingElseminus87900 = matchValminus87906;
            throw ((("Match fail in pair-to-rect against: ")+anythingElseminus87900));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G87901))))            {
            return G87901;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: [: x1 y1] [: x2 y2]] (var cx (/ (+ x1 x2) 2) cy (/ (+ y1 y2) 2) w (Math\.abs (- x1 x2)) h (Math\.abs (- y1 y2))) [: cx cy w h 0]) (anything-else-87900 (_throw (_+ ''Match fail in pair-to-rect against: '' anything-else-87900))))) for value ")+(JSON.stringify(G87902))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus87895 = actualFunminus87897.apply(this, arguments);
      while (recurP87898(returnValueminus87895))        {
        returnValueminus87895 = actualFunminus87897.apply(this, returnValueminus87895.args);
        };
      return returnValueminus87895;
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
      var defineToObjectminus87983 = extension;
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
      defineToObjectminus87983.init = init;
      return defineToObjectminus87983;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus88051 = extension;
      var onMouseDown = (function (b, x, y, evt)        {
        this.mouseClick = [b, x, y, evt];
        });
      defineToObjectminus88051.onMouseDown = onMouseDown;
      return defineToObjectminus88051;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus88079 = extension;
      var onKeyDown = (function (k, c, evt)        {
        this.keyPress = k;
        });
      defineToObjectminus88079.onKeyDown = onKeyDown;
      return defineToObjectminus88079;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus88107 = extension;
      var maybePopKey = (function ()        {
        var k = this.keyPress;
        this.keyPress = undefined;
        return k;
        });
      defineToObjectminus88107.maybePopKey = maybePopKey;
      return defineToObjectminus88107;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus88143 = extension;
      var mouseInWorld = (function ()        {
        var matchVar88163 = gamvas.mouse.getPosition();
        var x = matchVar88163.x;
        if ((("undefined")===((typeof x))))          {
          throw ((("Match error in var-match (({} x x y y) (gamvas\.mouse\.get-position)) against: ")+matchVar88163));
          };
        var y = matchVar88163.y;
        if ((("undefined")===((typeof y))))          {
          throw ((("Match error in var-match (({} x x y y) (gamvas\.mouse\.get-position)) against: ")+matchVar88163));
          };
        ;
        return this.camera.toWorld(x, y);
        });
      defineToObjectminus88143.mouseInWorld = mouseInWorld;
      return defineToObjectminus88143;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus88173 = extension;
      var moveToMouse = (function ()        {
        var matchVar88194 = this.mouseClick;
        if ((!((("object")===((typeof matchVar88194))))))          {
          throw ((("Match error in var-match ([: btn x y evt] this\.mouse-click) against: ")+matchVar88194));
          };
        if ((!((4===matchVar88194.length))))          {
          throw ((("Match error in var-match ([: btn x y evt] this\.mouse-click) against: ")+matchVar88194));
          };
        var btn = matchVar88194[0];
        var x = matchVar88194[1];
        var y = matchVar88194[2];
        var evt = matchVar88194[3];
        ;
        var matchVar88195 = this.camera.toWorld(x, y);
        var x = matchVar88195.x;
        if ((("undefined")===((typeof x))))          {
          throw ((("Match error in var-match (({} x x y y) (\.\. this\.camera (to-world x y))) against: ")+matchVar88195));
          };
        var y = matchVar88195.y;
        if ((("undefined")===((typeof y))))          {
          throw ((("Match error in var-match (({} x x y y) (\.\. this\.camera (to-world x y))) against: ")+matchVar88195));
          };
        ;
        console.log("Mouse in world is ", x, y);
        return this.camera.setPosition(x, y);
        });
      defineToObjectminus88173.moveToMouse = moveToMouse;
      return defineToObjectminus88173;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus88205 = extension;
      var drawBallPosition = (function ()        {
        return (function (arguments)          {
          var G88252 = this;
          return (function (arguments)            {
            return (function (arguments)              {
              var context88266 = G88252.c;
              context88266.save();
              try                {
                G88252.c.beginPath();
                G88252.c.strokeStyle = "red";
                var matchVar88267 = G88252.ballStart;
                if ((!((("object")===((typeof matchVar88267))))))                  {
                  throw ((("Match error in var-match ([: x y] ball-start) against: ")+matchVar88267));
                  };
                if ((!((2===matchVar88267.length))))                  {
                  throw ((("Match error in var-match ([: x y] ball-start) against: ")+matchVar88267));
                  };
                var x = matchVar88267[0];
                var y = matchVar88267[1];
                ;
                G88252.c.translate(x, y);
                G88252.c.arc(0, 0, 10, 0, moduleminus58c4bce870.times(3, Math.PI));
                G88252.c.stroke();
                G88252.c.fillStyle = "blue";
                G88252.c.fillText("START", 0, 0);
                }finally                 {
                context88266.restore();
                };
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus88205.drawBallPosition = drawBallPosition;
      return defineToObjectminus88205;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus88273 = extension;
      var pointToIntersectingWalls = (function (x, y)        {
        var walls = [];
        var actors = this.getActors();
        for (index in (actors))          {
          (function (arguments)            {
            var G88302 = undefined;
            var G88303 = actors[index];
            G88302 = (function (arguments)              {
              var matchValminus88304 = G88303;
              var matchFunExprminus88306 = (function (G88305)                {
                return (G88305 instanceof moduleB147560188.Wall);
                });
              if ((!(matchFunExprminus88306(matchValminus88304))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var wall = matchValminus88304;
              return ((wall.pointInside(x, y))?(walls.push(wall)) : (undefined));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88302))))              {
              return G88302;
              };
            G88302 = (function (arguments)              {
              var matchValminus88307 = G88303;
              var anything = matchValminus88307;
              return undefined;
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88302))))              {
              return G88302;
              };
            throw ((("match-fail at ((match [actors index] ((instance Wall wall) (if (wall\.point-inside x y) (walls\.push wall))) (anything undefined))) for value ")+(JSON.stringify(G88303))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          };
        return walls;
        });
      defineToObjectminus88273.pointToIntersectingWalls = pointToIntersectingWalls;
      return defineToObjectminus88273;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus88313 = extension;
      var handleClickCreating = (function ()        {
        return (function (arguments)          {
          var G88372 = undefined;
          var G88373 = this.createPoints;
          G88372 = (function (arguments)            {
            var matchValminus88378 = G88373;
            if ((!((("undefined")===((typeof matchValminus88378))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchVar88379 = this.mouseInWorld();
            var mx = matchVar88379.x;
            if ((("undefined")===((typeof mx))))              {
              throw ((("Match error in var-match (({} x mx y my) (@ (mouse-in-world))) against: ")+matchVar88379));
              };
            var my = matchVar88379.y;
            if ((("undefined")===((typeof my))))              {
              throw ((("Match error in var-match (({} x mx y my) (@ (mouse-in-world))) against: ")+matchVar88379));
              };
            ;
            this.createPoints = [[mx, my]];
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88372))))            {
            return G88372;
            };
          G88372 = (function (arguments)            {
            var matchValminus88388 = G88373;
            if ((!((("object")===((typeof matchValminus88388))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus88388.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var p1 = matchValminus88388[0];
            var matchVar88389 = this.mouseInWorld();
            var mx = matchVar88389.x;
            if ((("undefined")===((typeof mx))))              {
              throw ((("Match error in var-match (({} x mx y my) (@ (mouse-in-world))) against: ")+matchVar88389));
              };
            var my = matchVar88389.y;
            if ((("undefined")===((typeof my))))              {
              throw ((("Match error in var-match (({} x mx y my) (@ (mouse-in-world))) against: ")+matchVar88389));
              };
            ;
            var matchVar88394 = pairToRect(p1, [mx, my]);
            if ((!((("object")===((typeof matchVar88394))))))              {
              throw ((("Match error in var-match ([: x y w h _] (pair-to-rect p1 [: mx my])) against: ")+matchVar88394));
              };
            if ((!((5===matchVar88394.length))))              {
              throw ((("Match error in var-match ([: x y w h _] (pair-to-rect p1 [: mx my])) against: ")+matchVar88394));
              };
            var x = matchVar88394[0];
            var y = matchVar88394[1];
            var w = matchVar88394[2];
            var h = matchVar88394[3];
            var _ = matchVar88394[4];
            ;
            console.log("Create ", x, y, w, h);
            this.addActor((new moduleB147560188.Wall(moduleminus58c4bce870.plus("Wall-", this.wallCount), x, y, w, h, 0)));
            this.wallCount = moduleminus58c4bce870.plus(1, this.wallCount);
            this.createPoints = undefined;
            this.subState = "unfocused";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88372))))            {
            return G88372;
            };
          G88372 = (function (arguments)            {
            var matchValminus88415 = G88373;
            var otherwise = matchValminus88415;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88372))))            {
            return G88372;
            };
          throw ((("match-fail at ((match (@ create-points) (undefined (var-match ({} x mx y my) (@ (mouse-in-world))) (set! (@ create-points) [: [: mx my]])) ([: p1] (var-match ({} x mx y my) (@ (mouse-in-world))) (var-match [: x y w h _] (pair-to-rect p1 [: mx my])) (console\.log ''Create '' x y w h) (this\.add-actor (new Wall (+ ''Wall-'' (@ wall-count)) x y w h 0)) (set! (@ wall-count) (+ 1 (@ wall-count))) (set! (@ create-points) undefined) (set! (@ sub-state) :unfocused)) (otherwise undefined))) for value ")+(JSON.stringify(G88373))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus88313.handleClickCreating = handleClickCreating;
      return defineToObjectminus88313;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus88421 = extension;
      var handleClickUnfocused = (function ()        {
        this.moveToMouse();
        var matchVar88473 = this.mouseClick;
        if ((!((("object")===((typeof matchVar88473))))))          {
          throw ((("Match error in var-match ([: btn x y evt] this\.mouse-click) against: ")+matchVar88473));
          };
        if ((!((4===matchVar88473.length))))          {
          throw ((("Match error in var-match ([: btn x y evt] this\.mouse-click) against: ")+matchVar88473));
          };
        var btn = matchVar88473[0];
        var x = matchVar88473[1];
        var y = matchVar88473[2];
        var evt = matchVar88473[3];
        ;
        var matchVar88474 = this.camera.toWorld(x, y);
        var wx = matchVar88474.x;
        if ((("undefined")===((typeof wx))))          {
          throw ((("Match error in var-match (({} x wx y wy) (this\.camera\.to-world x y)) against: ")+matchVar88474));
          };
        var wy = matchVar88474.y;
        if ((("undefined")===((typeof wy))))          {
          throw ((("Match error in var-match (({} x wx y wy) (this\.camera\.to-world x y)) against: ")+matchVar88474));
          };
        ;
        return (function (arguments)          {
          var G88475 = undefined;
          var G88476 = this.pointToIntersectingWalls(wx, wy);
          G88475 = (function (arguments)            {
            var matchValminus88481 = G88476;
            if ((!((("object")===((typeof matchValminus88481))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchValminus88481.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88475))))            {
            return G88475;
            };
          G88475 = (function (arguments)            {
            var matchValminus88482 = G88476;
            if ((!((("object")===((typeof matchValminus88482))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus88482.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var w = matchValminus88482[0];
            var actors = this.getActors();
            for (index in (actors))              {
              (function (arguments)                {
                var G88487 = undefined;
                var G88488 = actors[index];
                G88487 = (function (arguments)                  {
                  var matchValminus88489 = G88488;
                  var matchFunExprminus88491 = (function (G88490)                    {
                    return (G88490 instanceof moduleB147560188.Wall);
                    });
                  if ((!(matchFunExprminus88491(matchValminus88489))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var wall = matchValminus88489;
                  wall.focused = false;
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88487))))                  {
                  return G88487;
                  };
                G88487 = (function (arguments)                  {
                  var matchValminus88492 = G88488;
                  var anything = matchValminus88492;
                  return undefined;
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88487))))                  {
                  return G88487;
                  };
                throw ((("match-fail at ((match [actors index] ((instance Wall wall) (set! wall\.focused false)) (anything undefined))) for value ")+(JSON.stringify(G88488))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              };
            w.focused = true;
            this.focus = w;
            this.subState = "focused";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88475))))            {
            return G88475;
            };
          G88475 = (function (arguments)            {
            var matchValminus88501 = G88476;
            var anythingElse = matchValminus88501;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88475))))            {
            return G88475;
            };
          throw ((("match-fail at ((match (@ (point->intersecting-walls wx wy)) ([:] undefined) ([: w] (var actors (@ (get-actors))) (for (index in actors) (match [actors index] ((instance Wall wall) (set! wall\.focused false)) (anything undefined))) (set! w\.focused true) (set! (@ focus) w) (set! (@ sub-state) :focused)) (anything-else undefined))) for value ")+(JSON.stringify(G88476))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus88421.handleClickUnfocused = handleClickUnfocused;
      return defineToObjectminus88421;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus88507 = extension;
      var handleKeyPressUnfocused = (function (k)        {
        return (function (arguments)          {
          var G88541 = undefined;
          var G88542 = this.maybePopKey();
          G88541 = (function (arguments)            {
            var matchValminus88547 = G88542;
            var matchFunExprminus88548 = moduleminus4745e9d952.TripleEqualminus_(c);
            if ((!(matchFunExprminus88548(matchValminus88547))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            this.subState = "creating";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88541))))            {
            return G88541;
            };
          G88541 = (function (arguments)            {
            var matchValminus88553 = G88542;
            var matchFunExprminus88554 = moduleminus4745e9d952.TripleEqualminus_(i);
            if ((!(matchFunExprminus88554(matchValminus88553))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            this.subState = "moveBallStart";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88541))))            {
            return G88541;
            };
          G88541 = (function (arguments)            {
            var matchValminus88559 = G88542;
            var otherwise = matchValminus88559;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88541))))            {
            return G88541;
            };
          throw ((("match-fail at ((match (@ (maybe-pop-key)) ((p (===_ c)) (set! (@ sub-state) :creating)) ((p (===_ i)) (set! (@ sub-state) :move-ball-start)) (otherwise undefined))) for value ")+(JSON.stringify(G88542))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus88507.handleKeyPressUnfocused = handleKeyPressUnfocused;
      return defineToObjectminus88507;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus88565 = extension;
      var handleKeyPressMoveBallStart = (function (k)        {
        return (function (arguments)          {
          var G88597 = undefined;
          var G88598 = this.maybePopKey();
          G88597 = (function (arguments)            {
            var matchValminus88603 = G88598;
            var matchFunExprminus88604 = moduleminus4745e9d952.TripleEqualminus_(escape);
            if ((!(matchFunExprminus88604(matchValminus88603))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            this.this.mouseClick = undefined;
            this.subState = "unfocused";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88597))))            {
            return G88597;
            };
          G88597 = (function (arguments)            {
            var matchValminus88613 = G88598;
            var anything = matchValminus88613;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88597))))            {
            return G88597;
            };
          throw ((("match-fail at ((match (@ (maybe-pop-key)) ((p (===_ escape)) (set! (@ this\.mouse-click) undefined) (set! (@ sub-state) :unfocused)) (anything undefined))) for value ")+(JSON.stringify(G88598))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus88565.handleKeyPressMoveBallStart = handleKeyPressMoveBallStart;
      return defineToObjectminus88565;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus88619 = extension;
      var handleKeyPressCreating = (function (k)        {
        return (function (arguments)          {
          var G88663 = undefined;
          var G88664 = this.maybePopKey();
          G88663 = (function (arguments)            {
            var matchValminus88669 = G88664;
            var matchFunExprminus88670 = moduleminus4745e9d952.TripleEqualminus_(escape);
            if ((!(matchFunExprminus88670(matchValminus88669))))              {
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
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88663))))            {
            return G88663;
            };
          G88663 = (function (arguments)            {
            var matchValminus88691 = G88664;
            var anything = matchValminus88691;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88663))))            {
            return G88663;
            };
          throw ((("match-fail at ((match (@ (maybe-pop-key)) ((p (===_ escape)) (if (defined\? create-points) (progn (set! (@ create-points) undefined) (set! (@ mouse-click) undefined)) (progn (set! (@ create-points) undefined) (set! (@ mouse-click undefined)) (set! (@ sub-state) :unfocused)))) (anything undefined))) for value ")+(JSON.stringify(G88664))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus88619.handleKeyPressCreating = handleKeyPressCreating;
      return defineToObjectminus88619;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus88697 = extension;
      var handleKeyPressFocused = (function (time)        {
        var matchVar88744 = this.focus.position;
        var x = matchVar88744.x;
        if ((("undefined")===((typeof x))))          {
          throw ((("Match error in var-match (({} x x y y) this\.focus\.position) against: ")+matchVar88744));
          };
        var y = matchVar88744.y;
        if ((("undefined")===((typeof y))))          {
          throw ((("Match error in var-match (({} x x y y) this\.focus\.position) against: ")+matchVar88744));
          };
        ;
        var r = this.focus.rotation;
        return (function (arguments)          {
          var G88745 = undefined;
          var G88746 = this.maybePopKey();
          G88745 = (function (arguments)            {
            var matchValminus88751 = G88746;
            var previousMatchSucceededminus88752 = true;
            switch (1){
                          case 1:
              var matchFunExprminus88753 = moduleminus4745e9d952.TripleEqualminus_(escape);
              if ((!(matchFunExprminus88753(matchValminus88751))))                {
                previousMatchSucceededminus88752 = false;
                };
              if (previousMatchSucceededminus88752)                {
                break;
                };
              previousMatchSucceededminus88752 = true;
              case 1:
              var matchFunExprminus88754 = moduleminus4745e9d952.TripleEqualminus_(u);
              if ((!(matchFunExprminus88754(matchValminus88751))))                {
                previousMatchSucceededminus88752 = false;
                };
              if (previousMatchSucceededminus88752)                {
                break;
                };
              previousMatchSucceededminus88752 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            focus.focused = false;
            this.focus = undefined;
            this.subState = "unfocused";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88745))))            {
            return G88745;
            };
          G88745 = (function (arguments)            {
            var matchValminus88763 = G88746;
            var matchFunExprminus88764 = moduleminus4745e9d952.TripleEqualminus_(up);
            if ((!(matchFunExprminus88764(matchValminus88763))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.focus.move(0, moduleminus58c4bce870.times(time, -70));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88745))))            {
            return G88745;
            };
          G88745 = (function (arguments)            {
            var matchValminus88765 = G88746;
            var matchFunExprminus88766 = moduleminus4745e9d952.TripleEqualminus_(down);
            if ((!(matchFunExprminus88766(matchValminus88765))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.focus.move(0, moduleminus58c4bce870.times(time, 70));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88745))))            {
            return G88745;
            };
          G88745 = (function (arguments)            {
            var matchValminus88767 = G88746;
            var matchFunExprminus88768 = moduleminus4745e9d952.TripleEqualminus_(right);
            if ((!(matchFunExprminus88768(matchValminus88767))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.focus.move(moduleminus58c4bce870.times(time, 70), 0);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88745))))            {
            return G88745;
            };
          G88745 = (function (arguments)            {
            var matchValminus88769 = G88746;
            var matchFunExprminus88770 = moduleminus4745e9d952.TripleEqualminus_(left);
            if ((!(matchFunExprminus88770(matchValminus88769))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.focus.move(moduleminus58c4bce870.times(time, -70), 0);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88745))))            {
            return G88745;
            };
          G88745 = (function (arguments)            {
            var matchValminus88771 = G88746;
            var matchFunExprminus88772 = moduleminus4745e9d952.TripleEqualminus_(pageUp);
            if ((!(matchFunExprminus88772(matchValminus88771))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.focus.rotate(moduleminus58c4bce870.divide(Math.PI, 32));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88745))))            {
            return G88745;
            };
          G88745 = (function (arguments)            {
            var matchValminus88773 = G88746;
            var matchFunExprminus88774 = moduleminus4745e9d952.TripleEqualminus_(pageDown);
            if ((!(matchFunExprminus88774(matchValminus88773))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.focus.rotate(moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(Math.PI, 32)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88745))))            {
            return G88745;
            };
          G88745 = (function (arguments)            {
            var matchValminus88775 = G88746;
            var anything = matchValminus88775;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88745))))            {
            return G88745;
            };
          throw ((("match-fail at ((match (@ (maybe-pop-key)) ((or (p (===_ escape)) (p (===_ u))) (set! focus\.focused false) (set! (@ focus) undefined) (set! (@ sub-state) :unfocused)) ((p (===_ up)) (this\.focus\.move 0 (* time -70))) ((p (===_ down)) (this\.focus\.move 0 (* time 70))) ((p (===_ right)) (this\.focus\.move (* time 70) 0)) ((p (===_ left)) (this\.focus\.move (* time -70) 0)) ((p (===_ page-up)) (this\.focus\.rotate (/ Math\.PI 32))) ((p (===_ page-down)) (this\.focus\.rotate (- (/ Math\.PI 32)))) (anything undefined))) for value ")+(JSON.stringify(G88746))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus88697.handleKeyPressFocused = handleKeyPressFocused;
      return defineToObjectminus88697;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus88781 = extension;
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
          var G88893 = undefined;
          var G88894 = this.subState;
          G88893 = (function (arguments)            {
            var matchValminus88899 = G88894;
            if ((!(("unfocused"===matchValminus88899))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleKeyPressUnfocused();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88893))))            {
            return G88893;
            };
          G88893 = (function (arguments)            {
            var matchValminus88904 = G88894;
            if ((!(("moveBallStart"===matchValminus88904))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleKeyPressMoveBallStart();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88893))))            {
            return G88893;
            };
          G88893 = (function (arguments)            {
            var matchValminus88909 = G88894;
            if ((!(("creating"===matchValminus88909))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleKeyPressCreating();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88893))))            {
            return G88893;
            };
          G88893 = (function (arguments)            {
            var matchValminus88914 = G88894;
            if ((!(("focused"===matchValminus88914))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleKeyPressFocused(time);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88893))))            {
            return G88893;
            };
          G88893 = (function (arguments)            {
            var matchValminus88919 = G88894;
            var anything = matchValminus88919;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88893))))            {
            return G88893;
            };
          throw ((("match-fail at ((match (@ sub-state) (:unfocused (@ (handle-key-press-unfocused))) (:move-ball-start (@ (handle-key-press-move-ball-start))) (:creating (@ (handle-key-press-creating))) (:focused (@ (handle-key-press-focused time))) (anything undefined))) for value ")+(JSON.stringify(G88894))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus88781.handleKeyPress = handleKeyPress;
      return defineToObjectminus88781;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus88925 = extension;
      var handleClick = (function ()        {
        ((moduleminus4745e9d952.definedPredicate(this.mouseClick))?((function (arguments)          {
          var G88984 = undefined;
          var G88985 = this.subState;
          G88984 = (function (arguments)            {
            var matchValminus88990 = G88985;
            if ((!(("unfocused"===matchValminus88990))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleClickUnfocused();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88984))))            {
            return G88984;
            };
          G88984 = (function (arguments)            {
            var matchValminus88995 = G88985;
            if ((!(("creating"===matchValminus88995))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleClickCreating();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88984))))            {
            return G88984;
            };
          G88984 = (function (arguments)            {
            var matchValminus89000 = G88985;
            if ((!(("moveBallStart"===matchValminus89000))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchVar89001 = this.mouseClick;
            if ((!((("object")===((typeof matchVar89001))))))              {
              throw ((("Match error in var-match ([: btn x y evt] this\.mouse-click) against: ")+matchVar89001));
              };
            if ((!((4===matchVar89001.length))))              {
              throw ((("Match error in var-match ([: btn x y evt] this\.mouse-click) against: ")+matchVar89001));
              };
            var btn = matchVar89001[0];
            var x = matchVar89001[1];
            var y = matchVar89001[2];
            var evt = matchVar89001[3];
            ;
            var matchVar89002 = this.camera.toWorld(x, y);
            var x = matchVar89002.x;
            if ((("undefined")===((typeof x))))              {
              throw ((("Match error in var-match (({} x x y y) (\.\. this\.camera (to-world x y))) against: ")+matchVar89002));
              };
            var y = matchVar89002.y;
            if ((("undefined")===((typeof y))))              {
              throw ((("Match error in var-match (({} x x y y) (\.\. this\.camera (to-world x y))) against: ")+matchVar89002));
              };
            ;
            this.ballStart = [x, y];
            this.subState = "unfocused";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88984))))            {
            return G88984;
            };
          G88984 = (function (arguments)            {
            var matchValminus89011 = G88985;
            if ((!(("focused"===matchValminus89011))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleClickUnfocused();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G88984))))            {
            return G88984;
            };
          throw ((("match-fail at ((match (@ sub-state) (:unfocused (@ (handle-click-unfocused))) (:creating (@ (handle-click-creating))) (:move-ball-start (var-match [: btn x y evt] this\.mouse-click) (var-match ({} x x y y) (\.\. this\.camera (to-world x y))) (set! (@ ball-start) [: x y]) (set! (@ sub-state) :unfocused)) (:focused (@ (handle-click-unfocused))))) for value ")+(JSON.stringify(G88985))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))) : (undefined));
        this.mouseClick = undefined;
        });
      defineToObjectminus88925.handleClick = handleClick;
      return defineToObjectminus88925;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus89025 = extension;
      var drawUnfocused = (function (time)        {
        return undefined;
        });
      defineToObjectminus89025.drawUnfocused = drawUnfocused;
      return defineToObjectminus89025;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus89045 = extension;
      var drawCreating = (function (time)        {
        var c = this.c;
        return (function (arguments)          {
          var G89091 = undefined;
          var G89092 = this.createPoints;
          G89091 = (function (arguments)            {
            var matchValminus89097 = G89092;
            if ((!((("undefined")===((typeof matchValminus89097))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G89091))))            {
            return G89091;
            };
          G89091 = (function (arguments)            {
            var matchValminus89098 = G89092;
            if ((!((("object")===((typeof matchValminus89098))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus89098.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus89099 = matchValminus89098[0];
            if ((!((("object")===((typeof matchTempminus89099))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchTempminus89099.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var cx = matchTempminus89099[0];
            var cy = matchTempminus89099[1];
            return (function (arguments)              {
              var context89105 = c;
              context89105.save();
              try                {
                var matchVar89106 = this.mouseInWorld();
                var mx = matchVar89106.x;
                if ((("undefined")===((typeof mx))))                  {
                  throw ((("Match error in var-match (({} x mx y my) (@ (mouse-in-world))) against: ")+matchVar89106));
                  };
                var my = matchVar89106.y;
                if ((("undefined")===((typeof my))))                  {
                  throw ((("Match error in var-match (({} x mx y my) (@ (mouse-in-world))) against: ")+matchVar89106));
                  };
                ;
                var xs = [mx];
                var matchVar89111 = [cx, mx].sort();
                if ((!((("object")===((typeof matchVar89111))))))                  {
                  throw ((("Match error in var-match ([: x1 x2] (\.\. [: cx mx] (sort))) against: ")+matchVar89111));
                  };
                if ((!((2===matchVar89111.length))))                  {
                  throw ((("Match error in var-match ([: x1 x2] (\.\. [: cx mx] (sort))) against: ")+matchVar89111));
                  };
                var x1 = matchVar89111[0];
                var x2 = matchVar89111[1];
                ;
                var matchVar89112 = [cy, my].sort();
                if ((!((("object")===((typeof matchVar89112))))))                  {
                  throw ((("Match error in var-match ([: y1 y2] (\.\. [: cy my] (sort))) against: ")+matchVar89112));
                  };
                if ((!((2===matchVar89112.length))))                  {
                  throw ((("Match error in var-match ([: y1 y2] (\.\. [: cy my] (sort))) against: ")+matchVar89112));
                  };
                var y1 = matchVar89112[0];
                var y2 = matchVar89112[1];
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
                context89105.restore();
                };
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G89091))))            {
            return G89091;
            };
          G89091 = (function (arguments)            {
            var matchValminus89113 = G89092;
            var anything = matchValminus89113;
            return anything;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G89091))))            {
            return G89091;
            };
          throw ((("match-fail at ((match (@ create-points) (undefined undefined) ([: [: cx cy]] (save-excursion c (var-match ({} x mx y my) (@ (mouse-in-world))) (var xs [: mx]) (var-match [: x1 x2] (\.\. [: cx mx] (sort))) (var-match [: y1 y2] (\.\. [: cy my] (sort))) (set! c\.stroke-style ''red'') (c\.begin-path) (c\.move-to x1 y1) (c\.line-to x2 y1) (c\.line-to x2 y2) (c\.line-to x1 y2) (c\.line-to x1 y1) (c\.stroke))) (anything anything))) for value ")+(JSON.stringify(G89092))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus89045.drawCreating = drawCreating;
      return defineToObjectminus89045;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus89119 = extension;
      var draw = (function (time)        {
        return (function (arguments)          {
          var G89214 = this;
          return (function (arguments)            {
            this.handleClick();
            this.handleKeyPress(time);
            (function (arguments)              {
              var G89231 = undefined;
              var G89232 = G89214.subState;
              G89231 = (function (arguments)                {
                var matchValminus89233 = G89232;
                if ((!(("unfocused"===matchValminus89233))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                return this.drawUnfocused(time);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G89231))))                {
                return G89231;
                };
              G89231 = (function (arguments)                {
                var matchValminus89238 = G89232;
                if ((!(("focused"===matchValminus89238))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                return this.drawUnfocused(time);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G89231))))                {
                return G89231;
                };
              G89231 = (function (arguments)                {
                var matchValminus89243 = G89232;
                if ((!(("moveBallStart"===matchValminus89243))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                return this.drawUnfocused(time);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G89231))))                {
                return G89231;
                };
              G89231 = (function (arguments)                {
                var matchValminus89248 = G89232;
                if ((!(("creating"===matchValminus89248))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                return this.drawCreating(time);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G89231))))                {
                return G89231;
                };
              throw ((("match-fail at ((match sub-state (:unfocused (@ (draw-unfocused time))) (:focused (@ (draw-unfocused time))) (:move-ball-start (@ (draw-unfocused time))) (:creating (@ (draw-creating time))))) for value ")+(JSON.stringify(G89232))));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            this.drawBallPosition();
            this.camera.stop();
            return (function (arguments)              {
              var context89262 = this.c;
              context89262.save();
              try                {
                G89214.c.textAlign = "center";
                G89214.c.fillStyle = "red";
                G89214.c.font = "bold 10px sans-serif";
                var matchVar89267 = gamvas.getCanvasDimension();
                var w = matchVar89267.w;
                if ((("undefined")===((typeof w))))                  {
                  throw ((("Match error in var-match (({} w w h h) (gamvas\.get-canvas-dimension)) against: ")+matchVar89267));
                  };
                var h = matchVar89267.h;
                if ((("undefined")===((typeof h))))                  {
                  throw ((("Match error in var-match (({} w w h h) (gamvas\.get-canvas-dimension)) against: ")+matchVar89267));
                  };
                ;
                G89214.c.fillText(this.subState, moduleminus58c4bce870.divide(w, 2), 18);
                var matchVar89272 = gamvas.mouse.getPosition();
                var x = matchVar89272.x;
                if ((("undefined")===((typeof x))))                  {
                  throw ((("Match error in var-match (({} x x y y) (gamvas\.mouse\.get-position)) against: ")+matchVar89272));
                  };
                var y = matchVar89272.y;
                if ((("undefined")===((typeof y))))                  {
                  throw ((("Match error in var-match (({} x x y y) (gamvas\.mouse\.get-position)) against: ")+matchVar89272));
                  };
                ;
                var matchVar89273 = this.camera.toWorld(x, y);
                var x = matchVar89273.x;
                if ((("undefined")===((typeof x))))                  {
                  throw ((("Match error in var-match (({} x x y y) (\.\. (@ camera) (to-world x y))) against: ")+matchVar89273));
                  };
                var y = matchVar89273.y;
                if ((("undefined")===((typeof y))))                  {
                  throw ((("Match error in var-match (({} x x y y) (\.\. (@ camera) (to-world x y))) against: ")+matchVar89273));
                  };
                ;
                G89214.c.fillText(moduleminus58c4bce870.plus(x, ", ", y), moduleminus58c4bce870.divide(w, 2), moduleminus58c4bce870.times(18, 2));
                }finally                 {
                context89262.restore();
                };
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus89119.draw = draw;
      return defineToObjectminus89119;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    currentModuleminus87890.Spoonbill = gamvas.State.extend(extension);
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus87890;
  }))