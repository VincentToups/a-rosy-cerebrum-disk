define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "rosy/utils", "rosy/wall", "rosy/drawing", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, moduleC47fa390df, moduleB147560188, moduleminus6acd260b96, gamvas)  {
  var currentModuleminus10490 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus10490 = value;
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
      var returnValueminus10495 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus10494",
          args:arguments
        };
        });
      var recurP10498 = (function (valminus10499)        {
        if ((("undefined")===((typeof valminus10499))))          {
          return false;
          };
        return (valminus10499.recurSigil===("recurSigilminus10494"));
        });
      var actualFunminus10497 = (function ()        {
        return (function (arguments)          {
          var G10501 = undefined;
          var G10502 = Array.prototype.slice.apply(arguments);
          G10501 = (function (arguments)            {
            var matchValminus10503 = G10502;
            if ((!((("object")===((typeof matchValminus10503))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchValminus10503.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus10504 = matchValminus10503[0];
            var matchTempminus10505 = matchValminus10503[1];
            if ((!((("object")===((typeof matchTempminus10504))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchTempminus10504.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var x1 = matchTempminus10504[0];
            var y1 = matchTempminus10504[1];
            if ((!((("object")===((typeof matchTempminus10505))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchTempminus10505.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var x2 = matchTempminus10505[0];
            var y2 = matchTempminus10505[1];
            var cx = moduleminus58c4bce870.divide(moduleminus58c4bce870.plus(x1, x2), 2), cy = moduleminus58c4bce870.divide(moduleminus58c4bce870.plus(y1, y2), 2), w = Math.abs(moduleminus58c4bce870.minus(x1, x2)), h = Math.abs(moduleminus58c4bce870.minus(y1, y2));
            return [cx, cy, w, h, 0];
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G10501))))            {
            return G10501;
            };
          G10501 = (function (arguments)            {
            var matchValminus10506 = G10502;
            var anythingElseminus10500 = matchValminus10506;
            throw ((("Match fail in pair-to-rect against: ")+anythingElseminus10500));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G10501))))            {
            return G10501;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: [: x1 y1] [: x2 y2]] (var cx (/ (+ x1 x2) 2) cy (/ (+ y1 y2) 2) w (Math\.abs (- x1 x2)) h (Math\.abs (- y1 y2))) [: cx cy w h 0]) (anything-else-10500 (_throw (_+ ''Match fail in pair-to-rect against: '' anything-else-10500))))) for value ")+(JSON.stringify(G10502))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus10495 = actualFunminus10497.apply(this, arguments);
      while (recurP10498(returnValueminus10495))        {
        returnValueminus10495 = actualFunminus10497.apply(this, returnValueminus10495.args);
        };
      return returnValueminus10495;
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
      var defineToObjectminus10583 = extension;
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
      defineToObjectminus10583.init = init;
      return defineToObjectminus10583;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus10651 = extension;
      var onMouseDown = (function (b, x, y, evt)        {
        this.mouseClick = [b, x, y, evt];
        });
      defineToObjectminus10651.onMouseDown = onMouseDown;
      return defineToObjectminus10651;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus10679 = extension;
      var onKeyDown = (function (k, c, evt)        {
        this.keyPress = k;
        });
      defineToObjectminus10679.onKeyDown = onKeyDown;
      return defineToObjectminus10679;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus10707 = extension;
      var maybePopKey = (function ()        {
        var k = this.keyPress;
        this.keyPress = undefined;
        return k;
        });
      defineToObjectminus10707.maybePopKey = maybePopKey;
      return defineToObjectminus10707;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus10743 = extension;
      var mouseInWorld = (function ()        {
        var matchVar10763 = gamvas.mouse.getPosition();
        var x = matchVar10763.x;
        if ((("undefined")===((typeof x))))          {
          throw ((("Match error in var-match (({} x x y y) (gamvas\.mouse\.get-position)) against: ")+matchVar10763));
          };
        var y = matchVar10763.y;
        if ((("undefined")===((typeof y))))          {
          throw ((("Match error in var-match (({} x x y y) (gamvas\.mouse\.get-position)) against: ")+matchVar10763));
          };
        ;
        return this.camera.toWorld(x, y);
        });
      defineToObjectminus10743.mouseInWorld = mouseInWorld;
      return defineToObjectminus10743;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus10773 = extension;
      var moveToMouse = (function ()        {
        var matchVar10794 = this.mouseClick;
        if ((!((("object")===((typeof matchVar10794))))))          {
          throw ((("Match error in var-match ([: btn x y evt] this\.mouse-click) against: ")+matchVar10794));
          };
        if ((!((4===matchVar10794.length))))          {
          throw ((("Match error in var-match ([: btn x y evt] this\.mouse-click) against: ")+matchVar10794));
          };
        var btn = matchVar10794[0];
        var x = matchVar10794[1];
        var y = matchVar10794[2];
        var evt = matchVar10794[3];
        ;
        var matchVar10795 = this.camera.toWorld(x, y);
        var x = matchVar10795.x;
        if ((("undefined")===((typeof x))))          {
          throw ((("Match error in var-match (({} x x y y) (\.\. this\.camera (to-world x y))) against: ")+matchVar10795));
          };
        var y = matchVar10795.y;
        if ((("undefined")===((typeof y))))          {
          throw ((("Match error in var-match (({} x x y y) (\.\. this\.camera (to-world x y))) against: ")+matchVar10795));
          };
        ;
        console.log("Mouse in world is ", x, y);
        return this.camera.setPosition(x, y);
        });
      defineToObjectminus10773.moveToMouse = moveToMouse;
      return defineToObjectminus10773;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus10805 = extension;
      var drawBallPosition = (function ()        {
        return (function (arguments)          {
          var G10852 = this;
          return (function (arguments)            {
            return (function (arguments)              {
              var context10866 = G10852.c;
              context10866.save();
              try                {
                G10852.c.beginPath();
                G10852.c.strokeStyle = "red";
                var matchVar10867 = G10852.ballStart;
                if ((!((("object")===((typeof matchVar10867))))))                  {
                  throw ((("Match error in var-match ([: x y] ball-start) against: ")+matchVar10867));
                  };
                if ((!((2===matchVar10867.length))))                  {
                  throw ((("Match error in var-match ([: x y] ball-start) against: ")+matchVar10867));
                  };
                var x = matchVar10867[0];
                var y = matchVar10867[1];
                ;
                G10852.c.translate(x, y);
                G10852.c.arc(0, 0, 10, 0, moduleminus58c4bce870.times(3, Math.PI));
                G10852.c.stroke();
                G10852.c.fillStyle = "blue";
                G10852.c.fillText("START", 0, 0);
                }finally                 {
                context10866.restore();
                };
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus10805.drawBallPosition = drawBallPosition;
      return defineToObjectminus10805;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus10873 = extension;
      var pointToIntersectingWalls = (function (x, y)        {
        var walls = [];
        var actors = this.getActors();
        for (index in (actors))          {
          (function (arguments)            {
            var G10902 = undefined;
            var G10903 = actors[index];
            G10902 = (function (arguments)              {
              var matchValminus10904 = G10903;
              var matchFunExprminus10906 = (function (G10905)                {
                return (G10905 instanceof moduleB147560188.Wall);
                });
              if ((!(matchFunExprminus10906(matchValminus10904))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var wall = matchValminus10904;
              return ((wall.pointInside(x, y))?(walls.push(wall)) : (undefined));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G10902))))              {
              return G10902;
              };
            G10902 = (function (arguments)              {
              var matchValminus10907 = G10903;
              var anything = matchValminus10907;
              return undefined;
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G10902))))              {
              return G10902;
              };
            throw ((("match-fail at ((match [actors index] ((instance Wall wall) (if (wall\.point-inside x y) (walls\.push wall))) (anything undefined))) for value ")+(JSON.stringify(G10903))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          };
        return walls;
        });
      defineToObjectminus10873.pointToIntersectingWalls = pointToIntersectingWalls;
      return defineToObjectminus10873;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus10913 = extension;
      var handleClickCreating = (function ()        {
        return (function (arguments)          {
          var G10972 = undefined;
          var G10973 = this.createPoints;
          G10972 = (function (arguments)            {
            var matchValminus10978 = G10973;
            if ((!((("undefined")===((typeof matchValminus10978))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchVar10979 = this.mouseInWorld();
            var mx = matchVar10979.x;
            if ((("undefined")===((typeof mx))))              {
              throw ((("Match error in var-match (({} x mx y my) (@ (mouse-in-world))) against: ")+matchVar10979));
              };
            var my = matchVar10979.y;
            if ((("undefined")===((typeof my))))              {
              throw ((("Match error in var-match (({} x mx y my) (@ (mouse-in-world))) against: ")+matchVar10979));
              };
            ;
            this.createPoints = [[mx, my]];
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G10972))))            {
            return G10972;
            };
          G10972 = (function (arguments)            {
            var matchValminus10988 = G10973;
            if ((!((("object")===((typeof matchValminus10988))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus10988.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var p1 = matchValminus10988[0];
            var matchVar10989 = this.mouseInWorld();
            var mx = matchVar10989.x;
            if ((("undefined")===((typeof mx))))              {
              throw ((("Match error in var-match (({} x mx y my) (@ (mouse-in-world))) against: ")+matchVar10989));
              };
            var my = matchVar10989.y;
            if ((("undefined")===((typeof my))))              {
              throw ((("Match error in var-match (({} x mx y my) (@ (mouse-in-world))) against: ")+matchVar10989));
              };
            ;
            var matchVar10994 = pairToRect(p1, [mx, my]);
            if ((!((("object")===((typeof matchVar10994))))))              {
              throw ((("Match error in var-match ([: x y w h _] (pair-to-rect p1 [: mx my])) against: ")+matchVar10994));
              };
            if ((!((5===matchVar10994.length))))              {
              throw ((("Match error in var-match ([: x y w h _] (pair-to-rect p1 [: mx my])) against: ")+matchVar10994));
              };
            var x = matchVar10994[0];
            var y = matchVar10994[1];
            var w = matchVar10994[2];
            var h = matchVar10994[3];
            var _ = matchVar10994[4];
            ;
            console.log("Create ", x, y, w, h);
            this.addActor((new (moduleB147560188.Wall)(moduleminus58c4bce870.plus("Wall-", this.wallCount), x, y, w, h, 0)));
            this.wallCount = moduleminus58c4bce870.plus(1, this.wallCount);
            this.createPoints = undefined;
            this.subState = "unfocused";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G10972))))            {
            return G10972;
            };
          G10972 = (function (arguments)            {
            var matchValminus11015 = G10973;
            var otherwise = matchValminus11015;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G10972))))            {
            return G10972;
            };
          throw ((("match-fail at ((match (@ create-points) (undefined (var-match ({} x mx y my) (@ (mouse-in-world))) (set! (@ create-points) [: [: mx my]])) ([: p1] (var-match ({} x mx y my) (@ (mouse-in-world))) (var-match [: x y w h _] (pair-to-rect p1 [: mx my])) (console\.log ''Create '' x y w h) (this\.add-actor (new Wall (+ ''Wall-'' (@ wall-count)) x y w h 0)) (set! (@ wall-count) (+ 1 (@ wall-count))) (set! (@ create-points) undefined) (set! (@ sub-state) :unfocused)) (otherwise undefined))) for value ")+(JSON.stringify(G10973))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus10913.handleClickCreating = handleClickCreating;
      return defineToObjectminus10913;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus11021 = extension;
      var handleClickUnfocused = (function ()        {
        this.moveToMouse();
        var matchVar11073 = this.mouseClick;
        if ((!((("object")===((typeof matchVar11073))))))          {
          throw ((("Match error in var-match ([: btn x y evt] this\.mouse-click) against: ")+matchVar11073));
          };
        if ((!((4===matchVar11073.length))))          {
          throw ((("Match error in var-match ([: btn x y evt] this\.mouse-click) against: ")+matchVar11073));
          };
        var btn = matchVar11073[0];
        var x = matchVar11073[1];
        var y = matchVar11073[2];
        var evt = matchVar11073[3];
        ;
        var matchVar11074 = this.camera.toWorld(x, y);
        var wx = matchVar11074.x;
        if ((("undefined")===((typeof wx))))          {
          throw ((("Match error in var-match (({} x wx y wy) (this\.camera\.to-world x y)) against: ")+matchVar11074));
          };
        var wy = matchVar11074.y;
        if ((("undefined")===((typeof wy))))          {
          throw ((("Match error in var-match (({} x wx y wy) (this\.camera\.to-world x y)) against: ")+matchVar11074));
          };
        ;
        return (function (arguments)          {
          var G11075 = undefined;
          var G11076 = this.pointToIntersectingWalls(wx, wy);
          G11075 = (function (arguments)            {
            var matchValminus11081 = G11076;
            if ((!((("object")===((typeof matchValminus11081))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((0===matchValminus11081.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11075))))            {
            return G11075;
            };
          G11075 = (function (arguments)            {
            var matchValminus11082 = G11076;
            if ((!((("object")===((typeof matchValminus11082))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus11082.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var w = matchValminus11082[0];
            var actors = this.getActors();
            for (index in (actors))              {
              (function (arguments)                {
                var G11087 = undefined;
                var G11088 = actors[index];
                G11087 = (function (arguments)                  {
                  var matchValminus11089 = G11088;
                  var matchFunExprminus11091 = (function (G11090)                    {
                    return (G11090 instanceof moduleB147560188.Wall);
                    });
                  if ((!(matchFunExprminus11091(matchValminus11089))))                    {
                    return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                    };
                  var wall = matchValminus11089;
                  wall.focused = false;
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11087))))                  {
                  return G11087;
                  };
                G11087 = (function (arguments)                  {
                  var matchValminus11092 = G11088;
                  var anything = matchValminus11092;
                  return undefined;
                  }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
                if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11087))))                  {
                  return G11087;
                  };
                throw ((("match-fail at ((match [actors index] ((instance Wall wall) (set! wall\.focused false)) (anything undefined))) for value ")+(JSON.stringify(G11088))));
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              };
            w.focused = true;
            this.focus = w;
            this.subState = "focused";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11075))))            {
            return G11075;
            };
          G11075 = (function (arguments)            {
            var matchValminus11101 = G11076;
            var anythingElse = matchValminus11101;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11075))))            {
            return G11075;
            };
          throw ((("match-fail at ((match (@ (point->intersecting-walls wx wy)) ([:] undefined) ([: w] (var actors (@ (get-actors))) (for (index in actors) (match [actors index] ((instance Wall wall) (set! wall\.focused false)) (anything undefined))) (set! w\.focused true) (set! (@ focus) w) (set! (@ sub-state) :focused)) (anything-else undefined))) for value ")+(JSON.stringify(G11076))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus11021.handleClickUnfocused = handleClickUnfocused;
      return defineToObjectminus11021;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus11107 = extension;
      var handleKeyPressUnfocused = (function (k)        {
        return (function (arguments)          {
          var G11141 = undefined;
          var G11142 = this.maybePopKey();
          G11141 = (function (arguments)            {
            var matchValminus11147 = G11142;
            var matchFunExprminus11148 = moduleminus4745e9d952.TripleEqualminus_(c);
            if ((!(matchFunExprminus11148(matchValminus11147))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            this.subState = "creating";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11141))))            {
            return G11141;
            };
          G11141 = (function (arguments)            {
            var matchValminus11153 = G11142;
            var matchFunExprminus11154 = moduleminus4745e9d952.TripleEqualminus_(i);
            if ((!(matchFunExprminus11154(matchValminus11153))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            this.subState = "moveBallStart";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11141))))            {
            return G11141;
            };
          G11141 = (function (arguments)            {
            var matchValminus11159 = G11142;
            var otherwise = matchValminus11159;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11141))))            {
            return G11141;
            };
          throw ((("match-fail at ((match (@ (maybe-pop-key)) ((p (===_ c)) (set! (@ sub-state) :creating)) ((p (===_ i)) (set! (@ sub-state) :move-ball-start)) (otherwise undefined))) for value ")+(JSON.stringify(G11142))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus11107.handleKeyPressUnfocused = handleKeyPressUnfocused;
      return defineToObjectminus11107;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus11165 = extension;
      var handleKeyPressMoveBallStart = (function (k)        {
        return (function (arguments)          {
          var G11197 = undefined;
          var G11198 = this.maybePopKey();
          G11197 = (function (arguments)            {
            var matchValminus11203 = G11198;
            var matchFunExprminus11204 = moduleminus4745e9d952.TripleEqualminus_(escape);
            if ((!(matchFunExprminus11204(matchValminus11203))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            this.this.mouseClick = undefined;
            this.subState = "unfocused";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11197))))            {
            return G11197;
            };
          G11197 = (function (arguments)            {
            var matchValminus11213 = G11198;
            var anything = matchValminus11213;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11197))))            {
            return G11197;
            };
          throw ((("match-fail at ((match (@ (maybe-pop-key)) ((p (===_ escape)) (set! (@ this\.mouse-click) undefined) (set! (@ sub-state) :unfocused)) (anything undefined))) for value ")+(JSON.stringify(G11198))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus11165.handleKeyPressMoveBallStart = handleKeyPressMoveBallStart;
      return defineToObjectminus11165;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus11219 = extension;
      var handleKeyPressCreating = (function (k)        {
        return (function (arguments)          {
          var G11263 = undefined;
          var G11264 = this.maybePopKey();
          G11263 = (function (arguments)            {
            var matchValminus11269 = G11264;
            var matchFunExprminus11270 = moduleminus4745e9d952.TripleEqualminus_(escape);
            if ((!(matchFunExprminus11270(matchValminus11269))))              {
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
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11263))))            {
            return G11263;
            };
          G11263 = (function (arguments)            {
            var matchValminus11291 = G11264;
            var anything = matchValminus11291;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11263))))            {
            return G11263;
            };
          throw ((("match-fail at ((match (@ (maybe-pop-key)) ((p (===_ escape)) (if (defined\? create-points) (progn (set! (@ create-points) undefined) (set! (@ mouse-click) undefined)) (progn (set! (@ create-points) undefined) (set! (@ mouse-click undefined)) (set! (@ sub-state) :unfocused)))) (anything undefined))) for value ")+(JSON.stringify(G11264))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus11219.handleKeyPressCreating = handleKeyPressCreating;
      return defineToObjectminus11219;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus11297 = extension;
      var handleKeyPressFocused = (function (time)        {
        var matchVar11344 = this.focus.position;
        var x = matchVar11344.x;
        if ((("undefined")===((typeof x))))          {
          throw ((("Match error in var-match (({} x x y y) this\.focus\.position) against: ")+matchVar11344));
          };
        var y = matchVar11344.y;
        if ((("undefined")===((typeof y))))          {
          throw ((("Match error in var-match (({} x x y y) this\.focus\.position) against: ")+matchVar11344));
          };
        ;
        var r = this.focus.rotation;
        return (function (arguments)          {
          var G11345 = undefined;
          var G11346 = this.maybePopKey();
          G11345 = (function (arguments)            {
            var matchValminus11351 = G11346;
            var previousMatchSucceededminus11352 = true;
            switch (1){
                          case 1:
              var matchFunExprminus11353 = moduleminus4745e9d952.TripleEqualminus_(escape);
              if ((!(matchFunExprminus11353(matchValminus11351))))                {
                previousMatchSucceededminus11352 = false;
                };
              if (previousMatchSucceededminus11352)                {
                break;
                };
              previousMatchSucceededminus11352 = true;
              case 1:
              var matchFunExprminus11354 = moduleminus4745e9d952.TripleEqualminus_(u);
              if ((!(matchFunExprminus11354(matchValminus11351))))                {
                previousMatchSucceededminus11352 = false;
                };
              if (previousMatchSucceededminus11352)                {
                break;
                };
              previousMatchSucceededminus11352 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            focus.focused = false;
            this.focus = undefined;
            this.subState = "unfocused";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11345))))            {
            return G11345;
            };
          G11345 = (function (arguments)            {
            var matchValminus11363 = G11346;
            var matchFunExprminus11364 = moduleminus4745e9d952.TripleEqualminus_(up);
            if ((!(matchFunExprminus11364(matchValminus11363))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.focus.move(0, moduleminus58c4bce870.times(time, -70));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11345))))            {
            return G11345;
            };
          G11345 = (function (arguments)            {
            var matchValminus11365 = G11346;
            var matchFunExprminus11366 = moduleminus4745e9d952.TripleEqualminus_(down);
            if ((!(matchFunExprminus11366(matchValminus11365))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.focus.move(0, moduleminus58c4bce870.times(time, 70));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11345))))            {
            return G11345;
            };
          G11345 = (function (arguments)            {
            var matchValminus11367 = G11346;
            var matchFunExprminus11368 = moduleminus4745e9d952.TripleEqualminus_(right);
            if ((!(matchFunExprminus11368(matchValminus11367))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.focus.move(moduleminus58c4bce870.times(time, 70), 0);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11345))))            {
            return G11345;
            };
          G11345 = (function (arguments)            {
            var matchValminus11369 = G11346;
            var matchFunExprminus11370 = moduleminus4745e9d952.TripleEqualminus_(left);
            if ((!(matchFunExprminus11370(matchValminus11369))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.focus.move(moduleminus58c4bce870.times(time, -70), 0);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11345))))            {
            return G11345;
            };
          G11345 = (function (arguments)            {
            var matchValminus11371 = G11346;
            var matchFunExprminus11372 = moduleminus4745e9d952.TripleEqualminus_(pageUp);
            if ((!(matchFunExprminus11372(matchValminus11371))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.focus.rotate(moduleminus58c4bce870.divide(Math.PI, 32));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11345))))            {
            return G11345;
            };
          G11345 = (function (arguments)            {
            var matchValminus11373 = G11346;
            var matchFunExprminus11374 = moduleminus4745e9d952.TripleEqualminus_(pageDown);
            if ((!(matchFunExprminus11374(matchValminus11373))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.focus.rotate(moduleminus58c4bce870.minus(moduleminus58c4bce870.divide(Math.PI, 32)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11345))))            {
            return G11345;
            };
          G11345 = (function (arguments)            {
            var matchValminus11375 = G11346;
            var anything = matchValminus11375;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11345))))            {
            return G11345;
            };
          throw ((("match-fail at ((match (@ (maybe-pop-key)) ((or (p (===_ escape)) (p (===_ u))) (set! focus\.focused false) (set! (@ focus) undefined) (set! (@ sub-state) :unfocused)) ((p (===_ up)) (this\.focus\.move 0 (* time -70))) ((p (===_ down)) (this\.focus\.move 0 (* time 70))) ((p (===_ right)) (this\.focus\.move (* time 70) 0)) ((p (===_ left)) (this\.focus\.move (* time -70) 0)) ((p (===_ page-up)) (this\.focus\.rotate (/ Math\.PI 32))) ((p (===_ page-down)) (this\.focus\.rotate (- (/ Math\.PI 32)))) (anything undefined))) for value ")+(JSON.stringify(G11346))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus11297.handleKeyPressFocused = handleKeyPressFocused;
      return defineToObjectminus11297;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus11381 = extension;
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
          var G11493 = undefined;
          var G11494 = this.subState;
          G11493 = (function (arguments)            {
            var matchValminus11499 = G11494;
            if ((!(("unfocused"===matchValminus11499))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleKeyPressUnfocused();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11493))))            {
            return G11493;
            };
          G11493 = (function (arguments)            {
            var matchValminus11504 = G11494;
            if ((!(("moveBallStart"===matchValminus11504))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleKeyPressMoveBallStart();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11493))))            {
            return G11493;
            };
          G11493 = (function (arguments)            {
            var matchValminus11509 = G11494;
            if ((!(("creating"===matchValminus11509))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleKeyPressCreating();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11493))))            {
            return G11493;
            };
          G11493 = (function (arguments)            {
            var matchValminus11514 = G11494;
            if ((!(("focused"===matchValminus11514))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleKeyPressFocused(time);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11493))))            {
            return G11493;
            };
          G11493 = (function (arguments)            {
            var matchValminus11519 = G11494;
            var anything = matchValminus11519;
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11493))))            {
            return G11493;
            };
          throw ((("match-fail at ((match (@ sub-state) (:unfocused (@ (handle-key-press-unfocused))) (:move-ball-start (@ (handle-key-press-move-ball-start))) (:creating (@ (handle-key-press-creating))) (:focused (@ (handle-key-press-focused time))) (anything undefined))) for value ")+(JSON.stringify(G11494))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus11381.handleKeyPress = handleKeyPress;
      return defineToObjectminus11381;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus11525 = extension;
      var handleClick = (function ()        {
        ((moduleminus4745e9d952.definedPredicate(this.mouseClick))?((function (arguments)          {
          var G11584 = undefined;
          var G11585 = this.subState;
          G11584 = (function (arguments)            {
            var matchValminus11590 = G11585;
            if ((!(("unfocused"===matchValminus11590))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleClickUnfocused();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11584))))            {
            return G11584;
            };
          G11584 = (function (arguments)            {
            var matchValminus11595 = G11585;
            if ((!(("creating"===matchValminus11595))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleClickCreating();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11584))))            {
            return G11584;
            };
          G11584 = (function (arguments)            {
            var matchValminus11600 = G11585;
            if ((!(("moveBallStart"===matchValminus11600))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchVar11601 = this.mouseClick;
            if ((!((("object")===((typeof matchVar11601))))))              {
              throw ((("Match error in var-match ([: btn x y evt] this\.mouse-click) against: ")+matchVar11601));
              };
            if ((!((4===matchVar11601.length))))              {
              throw ((("Match error in var-match ([: btn x y evt] this\.mouse-click) against: ")+matchVar11601));
              };
            var btn = matchVar11601[0];
            var x = matchVar11601[1];
            var y = matchVar11601[2];
            var evt = matchVar11601[3];
            ;
            var matchVar11602 = this.camera.toWorld(x, y);
            var x = matchVar11602.x;
            if ((("undefined")===((typeof x))))              {
              throw ((("Match error in var-match (({} x x y y) (\.\. this\.camera (to-world x y))) against: ")+matchVar11602));
              };
            var y = matchVar11602.y;
            if ((("undefined")===((typeof y))))              {
              throw ((("Match error in var-match (({} x x y y) (\.\. this\.camera (to-world x y))) against: ")+matchVar11602));
              };
            ;
            this.ballStart = [x, y];
            this.subState = "unfocused";
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11584))))            {
            return G11584;
            };
          G11584 = (function (arguments)            {
            var matchValminus11611 = G11585;
            if ((!(("focused"===matchValminus11611))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return this.handleClickUnfocused();
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11584))))            {
            return G11584;
            };
          throw ((("match-fail at ((match (@ sub-state) (:unfocused (@ (handle-click-unfocused))) (:creating (@ (handle-click-creating))) (:move-ball-start (var-match [: btn x y evt] this\.mouse-click) (var-match ({} x x y y) (\.\. this\.camera (to-world x y))) (set! (@ ball-start) [: x y]) (set! (@ sub-state) :unfocused)) (:focused (@ (handle-click-unfocused))))) for value ")+(JSON.stringify(G11585))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))) : (undefined));
        this.mouseClick = undefined;
        });
      defineToObjectminus11525.handleClick = handleClick;
      return defineToObjectminus11525;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus11625 = extension;
      var drawUnfocused = (function (time)        {
        return undefined;
        });
      defineToObjectminus11625.drawUnfocused = drawUnfocused;
      return defineToObjectminus11625;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus11645 = extension;
      var drawCreating = (function (time)        {
        var c = this.c;
        return (function (arguments)          {
          var G11691 = undefined;
          var G11692 = this.createPoints;
          G11691 = (function (arguments)            {
            var matchValminus11697 = G11692;
            if ((!((("undefined")===((typeof matchValminus11697))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            return undefined;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11691))))            {
            return G11691;
            };
          G11691 = (function (arguments)            {
            var matchValminus11698 = G11692;
            if ((!((("object")===((typeof matchValminus11698))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((1===matchValminus11698.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus11699 = matchValminus11698[0];
            if ((!((("object")===((typeof matchTempminus11699))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((2===matchTempminus11699.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var cx = matchTempminus11699[0];
            var cy = matchTempminus11699[1];
            return (function (arguments)              {
              var context11705 = c;
              context11705.save();
              try                {
                var matchVar11706 = this.mouseInWorld();
                var mx = matchVar11706.x;
                if ((("undefined")===((typeof mx))))                  {
                  throw ((("Match error in var-match (({} x mx y my) (@ (mouse-in-world))) against: ")+matchVar11706));
                  };
                var my = matchVar11706.y;
                if ((("undefined")===((typeof my))))                  {
                  throw ((("Match error in var-match (({} x mx y my) (@ (mouse-in-world))) against: ")+matchVar11706));
                  };
                ;
                var xs = [mx];
                var matchVar11711 = [cx, mx].sort();
                if ((!((("object")===((typeof matchVar11711))))))                  {
                  throw ((("Match error in var-match ([: x1 x2] (\.\. [: cx mx] (sort))) against: ")+matchVar11711));
                  };
                if ((!((2===matchVar11711.length))))                  {
                  throw ((("Match error in var-match ([: x1 x2] (\.\. [: cx mx] (sort))) against: ")+matchVar11711));
                  };
                var x1 = matchVar11711[0];
                var x2 = matchVar11711[1];
                ;
                var matchVar11712 = [cy, my].sort();
                if ((!((("object")===((typeof matchVar11712))))))                  {
                  throw ((("Match error in var-match ([: y1 y2] (\.\. [: cy my] (sort))) against: ")+matchVar11712));
                  };
                if ((!((2===matchVar11712.length))))                  {
                  throw ((("Match error in var-match ([: y1 y2] (\.\. [: cy my] (sort))) against: ")+matchVar11712));
                  };
                var y1 = matchVar11712[0];
                var y2 = matchVar11712[1];
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
                context11705.restore();
                };
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11691))))            {
            return G11691;
            };
          G11691 = (function (arguments)            {
            var matchValminus11713 = G11692;
            var anything = matchValminus11713;
            return anything;
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11691))))            {
            return G11691;
            };
          throw ((("match-fail at ((match (@ create-points) (undefined undefined) ([: [: cx cy]] (save-excursion c (var-match ({} x mx y my) (@ (mouse-in-world))) (var xs [: mx]) (var-match [: x1 x2] (\.\. [: cx mx] (sort))) (var-match [: y1 y2] (\.\. [: cy my] (sort))) (set! c\.stroke-style ''red'') (c\.begin-path) (c\.move-to x1 y1) (c\.line-to x2 y1) (c\.line-to x2 y2) (c\.line-to x1 y2) (c\.line-to x1 y1) (c\.stroke))) (anything anything))) for value ")+(JSON.stringify(G11692))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus11645.drawCreating = drawCreating;
      return defineToObjectminus11645;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    (function (arguments)      {
      var defineToObjectminus11719 = extension;
      var draw = (function (time)        {
        return (function (arguments)          {
          var G11814 = this;
          return (function (arguments)            {
            this.handleClick();
            this.handleKeyPress(time);
            (function (arguments)              {
              var G11831 = undefined;
              var G11832 = G11814.subState;
              G11831 = (function (arguments)                {
                var matchValminus11833 = G11832;
                if ((!(("unfocused"===matchValminus11833))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                return this.drawUnfocused(time);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11831))))                {
                return G11831;
                };
              G11831 = (function (arguments)                {
                var matchValminus11838 = G11832;
                if ((!(("focused"===matchValminus11838))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                return this.drawUnfocused(time);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11831))))                {
                return G11831;
                };
              G11831 = (function (arguments)                {
                var matchValminus11843 = G11832;
                if ((!(("moveBallStart"===matchValminus11843))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                return this.drawUnfocused(time);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11831))))                {
                return G11831;
                };
              G11831 = (function (arguments)                {
                var matchValminus11848 = G11832;
                if ((!(("creating"===matchValminus11848))))                  {
                  return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                  };
                return this.drawCreating(time);
                }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
              if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G11831))))                {
                return G11831;
                };
              throw ((("match-fail at ((match sub-state (:unfocused (@ (draw-unfocused time))) (:focused (@ (draw-unfocused time))) (:move-ball-start (@ (draw-unfocused time))) (:creating (@ (draw-creating time))))) for value ")+(JSON.stringify(G11832))));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            this.drawBallPosition();
            this.camera.stop();
            return (function (arguments)              {
              var context11862 = this.c;
              context11862.save();
              try                {
                G11814.c.textAlign = "center";
                G11814.c.fillStyle = "red";
                G11814.c.font = "bold 10px sans-serif";
                var matchVar11867 = gamvas.getCanvasDimension();
                var w = matchVar11867.w;
                if ((("undefined")===((typeof w))))                  {
                  throw ((("Match error in var-match (({} w w h h) (gamvas\.get-canvas-dimension)) against: ")+matchVar11867));
                  };
                var h = matchVar11867.h;
                if ((("undefined")===((typeof h))))                  {
                  throw ((("Match error in var-match (({} w w h h) (gamvas\.get-canvas-dimension)) against: ")+matchVar11867));
                  };
                ;
                G11814.c.fillText(this.subState, moduleminus58c4bce870.divide(w, 2), 18);
                var matchVar11872 = gamvas.mouse.getPosition();
                var x = matchVar11872.x;
                if ((("undefined")===((typeof x))))                  {
                  throw ((("Match error in var-match (({} x x y y) (gamvas\.mouse\.get-position)) against: ")+matchVar11872));
                  };
                var y = matchVar11872.y;
                if ((("undefined")===((typeof y))))                  {
                  throw ((("Match error in var-match (({} x x y y) (gamvas\.mouse\.get-position)) against: ")+matchVar11872));
                  };
                ;
                var matchVar11873 = this.camera.toWorld(x, y);
                var x = matchVar11873.x;
                if ((("undefined")===((typeof x))))                  {
                  throw ((("Match error in var-match (({} x x y y) (\.\. (@ camera) (to-world x y))) against: ")+matchVar11873));
                  };
                var y = matchVar11873.y;
                if ((("undefined")===((typeof y))))                  {
                  throw ((("Match error in var-match (({} x x y y) (\.\. (@ camera) (to-world x y))) against: ")+matchVar11873));
                  };
                ;
                G11814.c.fillText(moduleminus58c4bce870.plus(x, ", ", y), moduleminus58c4bce870.divide(w, 2), moduleminus58c4bce870.times(18, 2));
                }finally                 {
                context11862.restore();
                };
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      defineToObjectminus11719.draw = draw;
      return defineToObjectminus11719;
      }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
    currentModuleminus10490.Spoonbill = gamvas.State.extend(extension);
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus10490;
  }))