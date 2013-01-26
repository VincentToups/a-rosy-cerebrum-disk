define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "rosy/utils", "rosy/wall", "rosy/drawing", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, moduleC47fa390df, moduleB147560188, moduleminus6acd260b96, gamvas)  {
  var currentModuleminus268984 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus268984 = value;
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
      var returnValueminus268989 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus268988",
          args:arguments
        };
        });
      var recurP268992 = (function (valminus268993)        {
        if ((("undefined")===((typeof valminus268993))))          {
          return false;
          };
        return (valminus268993.recurSigil===("recurSigilminus268988"));
        });
      var actualFunminus268991 = (function ()        {
        return (function (arguments)          {
          var G268995 = undefined;
          var G268996 = Array.prototype.slice.apply(arguments);
          G268995 = (function (arguments)            {
            var matchValminus268997 = G268996;
            if ((!((("object")===((typeof matchValminus268997))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchValminus268997.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus268998 = matchValminus268997[0];
            var matchTempminus268999 = matchValminus268997[1];
            if ((!((("object")===((typeof matchTempminus268998))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchTempminus268998.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var x1 = matchTempminus268998[0];
            var y1 = matchTempminus268998[1];
            if ((!((("object")===((typeof matchTempminus268999))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchTempminus268999.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var x2 = matchTempminus268999[0];
            var y2 = matchTempminus268999[1];
            var cx = moduleminus58c4bce870.divide(moduleminus58c4bce870.plus(x1, x2), 2), cy = moduleminus58c4bce870.divide(moduleminus58c4bce870.plus(y1, y2), 2), w = Math.abs(moduleminus58c4bce870.minus(x1, x2)), h = Math.abs(moduleminus58c4bce870.minus(y1, y2));
            return [cx, cy, w, h, 0];
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G268995))))            {
            return G268995;
            };
          G268995 = (function (arguments)            {
            var matchValminus269000 = G268996;
            var anythingElseminus268994 = matchValminus269000;
            throw ((("Match fail in pair-to-rect against: ")+anythingElseminus268994));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G268995))))            {
            return G268995;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: [: x1 y1] [: x2 y2]] (var cx (/ (+ x1 x2) 2) cy (/ (+ y1 y2) 2) w (Math\.abs (- x1 x2)) h (Math\.abs (- y1 y2))) [: cx cy w h 0]) (anything-else-268994 (_throw (_+ ''Match fail in pair-to-rect against: '' anything-else-268994))))) for value ")+(JSON.stringify(G268996))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus268989 = actualFunminus268991.apply(this, arguments);
      while (recurP268992(returnValueminus268989))        {
        returnValueminus268989 = actualFunminus268991.apply(this, returnValueminus268989.args);
        };
      return returnValueminus268989;
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
      var defineToObjectminus269077 = extension;
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
      defineToObjectminus269077.init = init;
      return defineToObjectminus269077;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus269145 = extension;
      var onMouseDown = (function (b, x, y, evt)        {
        this.mouseClick = [b, x, y, evt];
        });
      defineToObjectminus269145.onMouseDown = onMouseDown;
      return defineToObjectminus269145;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus269173 = extension;
      var onKeyDown = (function (k, c, evt)        {
        this.keyPress = k;
        });
      defineToObjectminus269173.onKeyDown = onKeyDown;
      return defineToObjectminus269173;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus269201 = extension;
      var maybePopKey = (function ()        {
        var k = this.keyPress;
        this.keyPress = undefined;
        return k;
        });
      defineToObjectminus269201.maybePopKey = maybePopKey;
      return defineToObjectminus269201;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus269237 = extension;
      var mouseInWorld = (function ()        {
        var matchVar269257 = gamvas.mouse.getPosition();
        var x = matchVar269257.x;
        if ((("undefined")===((typeof x))))          {
          throw ((("Match error in var-match (({} x x y y) (gamvas\.mouse\.get-position)) against: ")+matchVar269257));
          };
        var y = matchVar269257.y;
        if ((("undefined")===((typeof y))))          {
          throw ((("Match error in var-match (({} x x y y) (gamvas\.mouse\.get-position)) against: ")+matchVar269257));
          };
        ;
        return this.camera.toWorld(x, y);
        });
      defineToObjectminus269237.mouseInWorld = mouseInWorld;
      return defineToObjectminus269237;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus269267 = extension;
      var moveToMouse = (function ()        {
        var matchVar269288 = this.mouseClick;
        if ((!((("object")===((typeof matchVar269288))))))          {
          throw ((("Match error in var-match ([: btn x y evt] this\.mouse-click) against: ")+matchVar269288));
          };
        if ((!((4===matchVar269288.length))))          {
          throw ((("Match error in var-match ([: btn x y evt] this\.mouse-click) against: ")+matchVar269288));
          };
        var btn = matchVar269288[0];
        var x = matchVar269288[1];
        var y = matchVar269288[2];
        var evt = matchVar269288[3];
        ;
        var matchVar269289 = this.camera.toWorld(x, y);
        var x = matchVar269289.x;
        if ((("undefined")===((typeof x))))          {
          throw ((("Match error in var-match (({} x x y y) (\.\. this\.camera (to-world x y))) against: ")+matchVar269289));
          };
        var y = matchVar269289.y;
        if ((("undefined")===((typeof y))))          {
          throw ((("Match error in var-match (({} x x y y) (\.\. this\.camera (to-world x y))) against: ")+matchVar269289));
          };
        ;
        console.log("Mouse in world is ", x, y);
        return this.camera.setPosition(x, y);
        });
      defineToObjectminus269267.moveToMouse = moveToMouse;
      return defineToObjectminus269267;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus269299 = extension;
      var drawBallPosition = (function ()        {
        return (function (arguments)          {
          var G269346 = this;
          return (function (arguments)            {
            return (function (arguments)              {
              var context269360 = G269346.c;
              context269360.save();
              try                {
                G269346.c.beginPath();
                G269346.c.strokeStyle = "red";
                var matchVar269361 = G269346.ballStart;
                if ((!((("object")===((typeof matchVar269361))))))                  {
                  throw ((("Match error in var-match ([: x y] ball-start) against: ")+matchVar269361));
                  };
                if ((!((2===matchVar269361.length))))                  {
                  throw ((("Match error in var-match ([: x y] ball-start) against: ")+matchVar269361));
                  };
                var x = matchVar269361[0];
                var y = matchVar269361[1];
                ;
                G269346.c.translate(x, y);
                G269346.c.arc(0, 0, 10, 0, moduleminus58c4bce870.times(3, Math.PI));
                G269346.c.stroke();
                G269346.c.fillStyle = "blue";
                G269346.c.fillText("START", 0, 0);
                }finally                 {
                context269360.restore();
                };
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus269299.drawBallPosition = drawBallPosition;
      return defineToObjectminus269299;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus269367 = extension;
      var pointToIntersectingWalls = (function (x, y)        {
        var walls = [];
        var actors = this.getActors();
        for (index in (actors))          {
          (function (arguments)            {
            var G269396 = undefined;
            var G269397 = actors[index];
            G269396 = (function (arguments)              {
              var matchValminus269398 = G269397;
              var matchFunExprminus269400 = (function (G269399)                {
                return (G269399 instanceof moduleB147560188.Wall);
                });
              if ((!(matchFunExprminus269400(matchValminus269398))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var wall = matchValminus269398;
              return ((wall.pointInside(x, y))?(walls.push(wall)) : (undefined));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269396))))              {
              return G269396;
              };
            G269396 = (function (arguments)              {
              var matchValminus269401 = G269397;
              var anything = matchValminus269401;
              return undefined;
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269396))))              {
              return G269396;
              };
            throw ((("match-fail at ((match [actors index] ((instance Wall wall) (if (wall\.point-inside x y) (walls\.push wall))) (anything undefined))) for value ")+(JSON.stringify(G269397))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          };
        return walls;
        });
      defineToObjectminus269367.pointToIntersectingWalls = pointToIntersectingWalls;
      return defineToObjectminus269367;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus269407 = extension;
      var handleClickCreating = (function ()        {
        return (function (arguments)          {
          var G269466 = undefined;
          var G269467 = this.createPoints;
          G269466 = (function (arguments)            {
            var matchValminus269472 = G269467;
            if ((!((("undefined")===((typeof matchValminus269472))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchVar269473 = this.mouseInWorld();
            var mx = matchVar269473.x;
            if ((("undefined")===((typeof mx))))              {
              throw ((("Match error in var-match (({} x mx y my) (@ (mouse-in-world))) against: ")+matchVar269473));
              };
            var my = matchVar269473.y;
            if ((("undefined")===((typeof my))))              {
              throw ((("Match error in var-match (({} x mx y my) (@ (mouse-in-world))) against: ")+matchVar269473));
              };
            ;
            this.createPoints = [[mx, my]];
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269466))))            {
            return G269466;
            };
          G269466 = (function (arguments)            {
            var matchValminus269482 = G269467;
            if ((!((("object")===((typeof matchValminus269482))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus269482.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var p1 = matchValminus269482[0];
            var matchVar269483 = this.mouseInWorld();
            var mx = matchVar269483.x;
            if ((("undefined")===((typeof mx))))              {
              throw ((("Match error in var-match (({} x mx y my) (@ (mouse-in-world))) against: ")+matchVar269483));
              };
            var my = matchVar269483.y;
            if ((("undefined")===((typeof my))))              {
              throw ((("Match error in var-match (({} x mx y my) (@ (mouse-in-world))) against: ")+matchVar269483));
              };
            ;
            var matchVar269488 = pairToRect(p1, [mx, my]);
            if ((!((("object")===((typeof matchVar269488))))))              {
              throw ((("Match error in var-match ([: x y w h _] (pair-to-rect p1 [: mx my])) against: ")+matchVar269488));
              };
            if ((!((5===matchVar269488.length))))              {
              throw ((("Match error in var-match ([: x y w h _] (pair-to-rect p1 [: mx my])) against: ")+matchVar269488));
              };
            var x = matchVar269488[0];
            var y = matchVar269488[1];
            var w = matchVar269488[2];
            var h = matchVar269488[3];
            var _ = matchVar269488[4];
            ;
            console.log("Create ", x, y, w, h);
            this.addActor((new (moduleB147560188.Wall)(moduleminus58c4bce870.plus("Wall-", this.wallCount), x, y, w, h, 0)));
            this.wallCount = moduleminus58c4bce870.plus(1, this.wallCount);
            this.createPoints = undefined;
            this.subState = "unfocused";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269466))))            {
            return G269466;
            };
          G269466 = (function (arguments)            {
            var matchValminus269509 = G269467;
            var otherwise = matchValminus269509;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269466))))            {
            return G269466;
            };
          throw ((("match-fail at ((match (@ create-points) (undefined (var-match ({} x mx y my) (@ (mouse-in-world))) (set! (@ create-points) [: [: mx my]])) ([: p1] (var-match ({} x mx y my) (@ (mouse-in-world))) (var-match [: x y w h _] (pair-to-rect p1 [: mx my])) (console\.log ''Create '' x y w h) (this\.add-actor (new Wall (+ ''Wall-'' (@ wall-count)) x y w h 0)) (set! (@ wall-count) (+ 1 (@ wall-count))) (set! (@ create-points) undefined) (set! (@ sub-state) :unfocused)) (otherwise undefined))) for value ")+(JSON.stringify(G269467))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus269407.handleClickCreating = handleClickCreating;
      return defineToObjectminus269407;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus269515 = extension;
      var handleClickUnfocused = (function ()        {
        this.moveToMouse();
        var matchVar269567 = this.mouseClick;
        if ((!((("object")===((typeof matchVar269567))))))          {
          throw ((("Match error in var-match ([: btn x y evt] this\.mouse-click) against: ")+matchVar269567));
          };
        if ((!((4===matchVar269567.length))))          {
          throw ((("Match error in var-match ([: btn x y evt] this\.mouse-click) against: ")+matchVar269567));
          };
        var btn = matchVar269567[0];
        var x = matchVar269567[1];
        var y = matchVar269567[2];
        var evt = matchVar269567[3];
        ;
        var matchVar269568 = this.camera.toWorld(x, y);
        var wx = matchVar269568.x;
        if ((("undefined")===((typeof wx))))          {
          throw ((("Match error in var-match (({} x wx y wy) (this\.camera\.to-world x y)) against: ")+matchVar269568));
          };
        var wy = matchVar269568.y;
        if ((("undefined")===((typeof wy))))          {
          throw ((("Match error in var-match (({} x wx y wy) (this\.camera\.to-world x y)) against: ")+matchVar269568));
          };
        ;
        return (function (arguments)          {
          var G269569 = undefined;
          var G269570 = this.pointToIntersectingWalls(wx, wy);
          G269569 = (function (arguments)            {
            var matchValminus269575 = G269570;
            if ((!((("object")===((typeof matchValminus269575))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchValminus269575.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269569))))            {
            return G269569;
            };
          G269569 = (function (arguments)            {
            var matchValminus269576 = G269570;
            if ((!((("object")===((typeof matchValminus269576))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus269576.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var w = matchValminus269576[0];
            var actors = this.getActors();
            for (index in (actors))              {
              (function (arguments)                {
                var G269581 = undefined;
                var G269582 = actors[index];
                G269581 = (function (arguments)                  {
                  var matchValminus269583 = G269582;
                  var matchFunExprminus269585 = (function (G269584)                    {
                    return (G269584 instanceof moduleB147560188.Wall);
                    });
                  if ((!(matchFunExprminus269585(matchValminus269583))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var wall = matchValminus269583;
                  wall.focused = false;
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269581))))                  {
                  return G269581;
                  };
                G269581 = (function (arguments)                  {
                  var matchValminus269586 = G269582;
                  var anything = matchValminus269586;
                  return undefined;
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269581))))                  {
                  return G269581;
                  };
                throw ((("match-fail at ((match [actors index] ((instance Wall wall) (set! wall\.focused false)) (anything undefined))) for value ")+(JSON.stringify(G269582))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              };
            w.focused = true;
            this.focus = w;
            this.subState = "focused";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269569))))            {
            return G269569;
            };
          G269569 = (function (arguments)            {
            var matchValminus269595 = G269570;
            var anythingElse = matchValminus269595;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269569))))            {
            return G269569;
            };
          throw ((("match-fail at ((match (@ (point->intersecting-walls wx wy)) ([:] undefined) ([: w] (var actors (@ (get-actors))) (for (index in actors) (match [actors index] ((instance Wall wall) (set! wall\.focused false)) (anything undefined))) (set! w\.focused true) (set! (@ focus) w) (set! (@ sub-state) :focused)) (anything-else undefined))) for value ")+(JSON.stringify(G269570))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus269515.handleClickUnfocused = handleClickUnfocused;
      return defineToObjectminus269515;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus269601 = extension;
      var handleKeyPressUnfocused = (function (k)        {
        return (function (arguments)          {
          var G269635 = undefined;
          var G269636 = this.maybePopKey();
          G269635 = (function (arguments)            {
            var matchValminus269641 = G269636;
            var matchFunExprminus269642 = moduleminus4745e9d952.TripleEqualminus_(c);
            if ((!(matchFunExprminus269642(matchValminus269641))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            this.subState = "creating";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269635))))            {
            return G269635;
            };
          G269635 = (function (arguments)            {
            var matchValminus269647 = G269636;
            var matchFunExprminus269648 = moduleminus4745e9d952.TripleEqualminus_(i);
            if ((!(matchFunExprminus269648(matchValminus269647))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            this.subState = "moveBallStart";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269635))))            {
            return G269635;
            };
          G269635 = (function (arguments)            {
            var matchValminus269653 = G269636;
            var otherwise = matchValminus269653;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269635))))            {
            return G269635;
            };
          throw ((("match-fail at ((match (@ (maybe-pop-key)) ((p (===_ c)) (set! (@ sub-state) :creating)) ((p (===_ i)) (set! (@ sub-state) :move-ball-start)) (otherwise undefined))) for value ")+(JSON.stringify(G269636))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus269601.handleKeyPressUnfocused = handleKeyPressUnfocused;
      return defineToObjectminus269601;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus269659 = extension;
      var handleKeyPressMoveBallStart = (function (k)        {
        return (function (arguments)          {
          var G269691 = undefined;
          var G269692 = this.maybePopKey();
          G269691 = (function (arguments)            {
            var matchValminus269697 = G269692;
            var matchFunExprminus269698 = moduleminus4745e9d952.TripleEqualminus_(escape);
            if ((!(matchFunExprminus269698(matchValminus269697))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            this.this.mouseClick = undefined;
            this.subState = "unfocused";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269691))))            {
            return G269691;
            };
          G269691 = (function (arguments)            {
            var matchValminus269707 = G269692;
            var anything = matchValminus269707;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269691))))            {
            return G269691;
            };
          throw ((("match-fail at ((match (@ (maybe-pop-key)) ((p (===_ escape)) (set! (@ this\.mouse-click) undefined) (set! (@ sub-state) :unfocused)) (anything undefined))) for value ")+(JSON.stringify(G269692))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus269659.handleKeyPressMoveBallStart = handleKeyPressMoveBallStart;
      return defineToObjectminus269659;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus269713 = extension;
      var handleKeyPressCreating = (function (k)        {
        return (function (arguments)          {
          var G269757 = undefined;
          var G269758 = this.maybePopKey();
          G269757 = (function (arguments)            {
            var matchValminus269763 = G269758;
            var matchFunExprminus269764 = moduleminus4745e9d952.TripleEqualminus_(escape);
            if ((!(matchFunExprminus269764(matchValminus269763))))              {
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
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269757))))            {
            return G269757;
            };
          G269757 = (function (arguments)            {
            var matchValminus269785 = G269758;
            var anything = matchValminus269785;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269757))))            {
            return G269757;
            };
          throw ((("match-fail at ((match (@ (maybe-pop-key)) ((p (===_ escape)) (if (defined\? create-points) (progn (set! (@ create-points) undefined) (set! (@ mouse-click) undefined)) (progn (set! (@ create-points) undefined) (set! (@ mouse-click undefined)) (set! (@ sub-state) :unfocused)))) (anything undefined))) for value ")+(JSON.stringify(G269758))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus269713.handleKeyPressCreating = handleKeyPressCreating;
      return defineToObjectminus269713;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus269791 = extension;
      var handleKeyPressFocused = (function (time)        {
        var matchVar269838 = this.focus.position;
        var x = matchVar269838.x;
        if ((("undefined")===((typeof x))))          {
          throw ((("Match error in var-match (({} x x y y) this\.focus\.position) against: ")+matchVar269838));
          };
        var y = matchVar269838.y;
        if ((("undefined")===((typeof y))))          {
          throw ((("Match error in var-match (({} x x y y) this\.focus\.position) against: ")+matchVar269838));
          };
        ;
        var r = this.focus.rotation;
        return (function (arguments)          {
          var G269839 = undefined;
          var G269840 = this.maybePopKey();
          G269839 = (function (arguments)            {
            var matchValminus269845 = G269840;
            var previousMatchSucceededminus269846 = true;
            switch (1){
                          case 1:
              var matchFunExprminus269847 = moduleminus4745e9d952.TripleEqualminus_(escape);
              if ((!(matchFunExprminus269847(matchValminus269845))))                {
                previousMatchSucceededminus269846 = false;
                };
              if (previousMatchSucceededminus269846)                {
                break;
                };
              previousMatchSucceededminus269846 = true;
              case 1:
              var matchFunExprminus269848 = moduleminus4745e9d952.TripleEqualminus_(u);
              if ((!(matchFunExprminus269848(matchValminus269845))))                {
                previousMatchSucceededminus269846 = false;
                };
              if (previousMatchSucceededminus269846)                {
                break;
                };
              previousMatchSucceededminus269846 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            focus.focused = false;
            this.focus = undefined;
            this.subState = "unfocused";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269839))))            {
            return G269839;
            };
          G269839 = (function (arguments)            {
            var matchValminus269857 = G269840;
            var matchFunExprminus269858 = moduleminus4745e9d952.TripleEqualminus_(up);
            if ((!(matchFunExprminus269858(matchValminus269857))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.focus.move(0, moduleminus58c4bce870.times(time, -70));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269839))))            {
            return G269839;
            };
          G269839 = (function (arguments)            {
            var matchValminus269859 = G269840;
            var matchFunExprminus269860 = moduleminus4745e9d952.TripleEqualminus_(down);
            if ((!(matchFunExprminus269860(matchValminus269859))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.focus.move(0, moduleminus58c4bce870.times(time, 70));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269839))))            {
            return G269839;
            };
          G269839 = (function (arguments)            {
            var matchValminus269861 = G269840;
            var matchFunExprminus269862 = moduleminus4745e9d952.TripleEqualminus_(right);
            if ((!(matchFunExprminus269862(matchValminus269861))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.focus.move(moduleminus58c4bce870.times(time, 70), 0);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269839))))            {
            return G269839;
            };
          G269839 = (function (arguments)            {
            var matchValminus269863 = G269840;
            var matchFunExprminus269864 = moduleminus4745e9d952.TripleEqualminus_(left);
            if ((!(matchFunExprminus269864(matchValminus269863))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.focus.move(moduleminus58c4bce870.times(time, -70), 0);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269839))))            {
            return G269839;
            };
          G269839 = (function (arguments)            {
            var matchValminus269865 = G269840;
            var matchFunExprminus269866 = moduleminus4745e9d952.TripleEqualminus_(pageUp);
            if ((!(matchFunExprminus269866(matchValminus269865))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.focus.rotate(moduleminus58c4bce870.divide(Math.PI, 32));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269839))))            {
            return G269839;
            };
          G269839 = (function (arguments)            {
            var matchValminus269867 = G269840;
            var matchFunExprminus269868 = moduleminus4745e9d952.TripleEqualminus_(pageDown);
            if ((!(matchFunExprminus269868(matchValminus269867))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.focus.rotate(moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(Math.PI, 32)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269839))))            {
            return G269839;
            };
          G269839 = (function (arguments)            {
            var matchValminus269869 = G269840;
            var anything = matchValminus269869;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269839))))            {
            return G269839;
            };
          throw ((("match-fail at ((match (@ (maybe-pop-key)) ((or (p (===_ escape)) (p (===_ u))) (set! focus\.focused false) (set! (@ focus) undefined) (set! (@ sub-state) :unfocused)) ((p (===_ up)) (this\.focus\.move 0 (* time -70))) ((p (===_ down)) (this\.focus\.move 0 (* time 70))) ((p (===_ right)) (this\.focus\.move (* time 70) 0)) ((p (===_ left)) (this\.focus\.move (* time -70) 0)) ((p (===_ page-up)) (this\.focus\.rotate (/ Math\.PI 32))) ((p (===_ page-down)) (this\.focus\.rotate (- (/ Math\.PI 32)))) (anything undefined))) for value ")+(JSON.stringify(G269840))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus269791.handleKeyPressFocused = handleKeyPressFocused;
      return defineToObjectminus269791;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus269875 = extension;
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
          var G269987 = undefined;
          var G269988 = this.subState;
          G269987 = (function (arguments)            {
            var matchValminus269993 = G269988;
            if ((!(("unfocused"===matchValminus269993))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleKeyPressUnfocused();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269987))))            {
            return G269987;
            };
          G269987 = (function (arguments)            {
            var matchValminus269998 = G269988;
            if ((!(("moveBallStart"===matchValminus269998))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleKeyPressMoveBallStart();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269987))))            {
            return G269987;
            };
          G269987 = (function (arguments)            {
            var matchValminus270003 = G269988;
            if ((!(("creating"===matchValminus270003))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleKeyPressCreating();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269987))))            {
            return G269987;
            };
          G269987 = (function (arguments)            {
            var matchValminus270008 = G269988;
            if ((!(("focused"===matchValminus270008))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleKeyPressFocused(time);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269987))))            {
            return G269987;
            };
          G269987 = (function (arguments)            {
            var matchValminus270013 = G269988;
            var anything = matchValminus270013;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G269987))))            {
            return G269987;
            };
          throw ((("match-fail at ((match (@ sub-state) (:unfocused (@ (handle-key-press-unfocused))) (:move-ball-start (@ (handle-key-press-move-ball-start))) (:creating (@ (handle-key-press-creating))) (:focused (@ (handle-key-press-focused time))) (anything undefined))) for value ")+(JSON.stringify(G269988))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus269875.handleKeyPress = handleKeyPress;
      return defineToObjectminus269875;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus270019 = extension;
      var handleClick = (function ()        {
        ((moduleminus4745e9d952.definedPredicate(this.mouseClick))?((function (arguments)          {
          var G270078 = undefined;
          var G270079 = this.subState;
          G270078 = (function (arguments)            {
            var matchValminus270084 = G270079;
            if ((!(("unfocused"===matchValminus270084))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleClickUnfocused();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G270078))))            {
            return G270078;
            };
          G270078 = (function (arguments)            {
            var matchValminus270089 = G270079;
            if ((!(("creating"===matchValminus270089))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleClickCreating();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G270078))))            {
            return G270078;
            };
          G270078 = (function (arguments)            {
            var matchValminus270094 = G270079;
            if ((!(("moveBallStart"===matchValminus270094))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchVar270095 = this.mouseClick;
            if ((!((("object")===((typeof matchVar270095))))))              {
              throw ((("Match error in var-match ([: btn x y evt] this\.mouse-click) against: ")+matchVar270095));
              };
            if ((!((4===matchVar270095.length))))              {
              throw ((("Match error in var-match ([: btn x y evt] this\.mouse-click) against: ")+matchVar270095));
              };
            var btn = matchVar270095[0];
            var x = matchVar270095[1];
            var y = matchVar270095[2];
            var evt = matchVar270095[3];
            ;
            var matchVar270096 = this.camera.toWorld(x, y);
            var x = matchVar270096.x;
            if ((("undefined")===((typeof x))))              {
              throw ((("Match error in var-match (({} x x y y) (\.\. this\.camera (to-world x y))) against: ")+matchVar270096));
              };
            var y = matchVar270096.y;
            if ((("undefined")===((typeof y))))              {
              throw ((("Match error in var-match (({} x x y y) (\.\. this\.camera (to-world x y))) against: ")+matchVar270096));
              };
            ;
            this.ballStart = [x, y];
            this.subState = "unfocused";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G270078))))            {
            return G270078;
            };
          G270078 = (function (arguments)            {
            var matchValminus270105 = G270079;
            if ((!(("focused"===matchValminus270105))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleClickUnfocused();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G270078))))            {
            return G270078;
            };
          throw ((("match-fail at ((match (@ sub-state) (:unfocused (@ (handle-click-unfocused))) (:creating (@ (handle-click-creating))) (:move-ball-start (var-match [: btn x y evt] this\.mouse-click) (var-match ({} x x y y) (\.\. this\.camera (to-world x y))) (set! (@ ball-start) [: x y]) (set! (@ sub-state) :unfocused)) (:focused (@ (handle-click-unfocused))))) for value ")+(JSON.stringify(G270079))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))) : (undefined));
        this.mouseClick = undefined;
        });
      defineToObjectminus270019.handleClick = handleClick;
      return defineToObjectminus270019;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus270119 = extension;
      var drawUnfocused = (function (time)        {
        return undefined;
        });
      defineToObjectminus270119.drawUnfocused = drawUnfocused;
      return defineToObjectminus270119;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus270139 = extension;
      var drawCreating = (function (time)        {
        var c = this.c;
        return (function (arguments)          {
          var G270185 = undefined;
          var G270186 = this.createPoints;
          G270185 = (function (arguments)            {
            var matchValminus270191 = G270186;
            if ((!((("undefined")===((typeof matchValminus270191))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G270185))))            {
            return G270185;
            };
          G270185 = (function (arguments)            {
            var matchValminus270192 = G270186;
            if ((!((("object")===((typeof matchValminus270192))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus270192.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus270193 = matchValminus270192[0];
            if ((!((("object")===((typeof matchTempminus270193))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchTempminus270193.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var cx = matchTempminus270193[0];
            var cy = matchTempminus270193[1];
            return (function (arguments)              {
              var context270199 = c;
              context270199.save();
              try                {
                var matchVar270200 = this.mouseInWorld();
                var mx = matchVar270200.x;
                if ((("undefined")===((typeof mx))))                  {
                  throw ((("Match error in var-match (({} x mx y my) (@ (mouse-in-world))) against: ")+matchVar270200));
                  };
                var my = matchVar270200.y;
                if ((("undefined")===((typeof my))))                  {
                  throw ((("Match error in var-match (({} x mx y my) (@ (mouse-in-world))) against: ")+matchVar270200));
                  };
                ;
                var xs = [mx];
                var matchVar270205 = [cx, mx].sort();
                if ((!((("object")===((typeof matchVar270205))))))                  {
                  throw ((("Match error in var-match ([: x1 x2] (\.\. [: cx mx] (sort))) against: ")+matchVar270205));
                  };
                if ((!((2===matchVar270205.length))))                  {
                  throw ((("Match error in var-match ([: x1 x2] (\.\. [: cx mx] (sort))) against: ")+matchVar270205));
                  };
                var x1 = matchVar270205[0];
                var x2 = matchVar270205[1];
                ;
                var matchVar270206 = [cy, my].sort();
                if ((!((("object")===((typeof matchVar270206))))))                  {
                  throw ((("Match error in var-match ([: y1 y2] (\.\. [: cy my] (sort))) against: ")+matchVar270206));
                  };
                if ((!((2===matchVar270206.length))))                  {
                  throw ((("Match error in var-match ([: y1 y2] (\.\. [: cy my] (sort))) against: ")+matchVar270206));
                  };
                var y1 = matchVar270206[0];
                var y2 = matchVar270206[1];
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
                context270199.restore();
                };
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G270185))))            {
            return G270185;
            };
          G270185 = (function (arguments)            {
            var matchValminus270207 = G270186;
            var anything = matchValminus270207;
            return anything;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G270185))))            {
            return G270185;
            };
          throw ((("match-fail at ((match (@ create-points) (undefined undefined) ([: [: cx cy]] (save-excursion c (var-match ({} x mx y my) (@ (mouse-in-world))) (var xs [: mx]) (var-match [: x1 x2] (\.\. [: cx mx] (sort))) (var-match [: y1 y2] (\.\. [: cy my] (sort))) (set! c\.stroke-style ''red'') (c\.begin-path) (c\.move-to x1 y1) (c\.line-to x2 y1) (c\.line-to x2 y2) (c\.line-to x1 y2) (c\.line-to x1 y1) (c\.stroke))) (anything anything))) for value ")+(JSON.stringify(G270186))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus270139.drawCreating = drawCreating;
      return defineToObjectminus270139;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus270213 = extension;
      var draw = (function (time)        {
        return (function (arguments)          {
          var G270308 = this;
          return (function (arguments)            {
            this.handleClick();
            this.handleKeyPress(time);
            (function (arguments)              {
              var G270325 = undefined;
              var G270326 = G270308.subState;
              G270325 = (function (arguments)                {
                var matchValminus270327 = G270326;
                if ((!(("unfocused"===matchValminus270327))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                return this.drawUnfocused(time);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G270325))))                {
                return G270325;
                };
              G270325 = (function (arguments)                {
                var matchValminus270332 = G270326;
                if ((!(("focused"===matchValminus270332))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                return this.drawUnfocused(time);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G270325))))                {
                return G270325;
                };
              G270325 = (function (arguments)                {
                var matchValminus270337 = G270326;
                if ((!(("moveBallStart"===matchValminus270337))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                return this.drawUnfocused(time);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G270325))))                {
                return G270325;
                };
              G270325 = (function (arguments)                {
                var matchValminus270342 = G270326;
                if ((!(("creating"===matchValminus270342))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                return this.drawCreating(time);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G270325))))                {
                return G270325;
                };
              throw ((("match-fail at ((match sub-state (:unfocused (@ (draw-unfocused time))) (:focused (@ (draw-unfocused time))) (:move-ball-start (@ (draw-unfocused time))) (:creating (@ (draw-creating time))))) for value ")+(JSON.stringify(G270326))));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            this.drawBallPosition();
            this.camera.stop();
            return (function (arguments)              {
              var context270356 = this.c;
              context270356.save();
              try                {
                G270308.c.textAlign = "center";
                G270308.c.fillStyle = "red";
                G270308.c.font = "bold 10px sans-serif";
                var matchVar270361 = gamvas.getCanvasDimension();
                var w = matchVar270361.w;
                if ((("undefined")===((typeof w))))                  {
                  throw ((("Match error in var-match (({} w w h h) (gamvas\.get-canvas-dimension)) against: ")+matchVar270361));
                  };
                var h = matchVar270361.h;
                if ((("undefined")===((typeof h))))                  {
                  throw ((("Match error in var-match (({} w w h h) (gamvas\.get-canvas-dimension)) against: ")+matchVar270361));
                  };
                ;
                G270308.c.fillText(this.subState, moduleminus58c4bce870.divide(w, 2), 18);
                var matchVar270366 = gamvas.mouse.getPosition();
                var x = matchVar270366.x;
                if ((("undefined")===((typeof x))))                  {
                  throw ((("Match error in var-match (({} x x y y) (gamvas\.mouse\.get-position)) against: ")+matchVar270366));
                  };
                var y = matchVar270366.y;
                if ((("undefined")===((typeof y))))                  {
                  throw ((("Match error in var-match (({} x x y y) (gamvas\.mouse\.get-position)) against: ")+matchVar270366));
                  };
                ;
                var matchVar270367 = this.camera.toWorld(x, y);
                var x = matchVar270367.x;
                if ((("undefined")===((typeof x))))                  {
                  throw ((("Match error in var-match (({} x x y y) (\.\. (@ camera) (to-world x y))) against: ")+matchVar270367));
                  };
                var y = matchVar270367.y;
                if ((("undefined")===((typeof y))))                  {
                  throw ((("Match error in var-match (({} x x y y) (\.\. (@ camera) (to-world x y))) against: ")+matchVar270367));
                  };
                ;
                G270308.c.fillText(moduleminus58c4bce870.plus(x, ", ", y), moduleminus58c4bce870.divide(w, 2), moduleminus58c4bce870.times(18, 2));
                }finally                 {
                context270356.restore();
                };
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus270213.draw = draw;
      return defineToObjectminus270213;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    currentModuleminus268984.Spoonbill = gamvas.State.extend(extension);
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus268984;
  }))