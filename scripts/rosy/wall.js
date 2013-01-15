define(["hooves/operator-functions", "hooves/lisp-idioms", "rosy/drawing", "rosy/utils", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus6acd260b96, moduleC47fa390df, gamvas)  {
  var currentModuleminus26922 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus26922 = value;
    });
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/operator-functions" :all)
    ;
    // ("hooves/lisp-idioms" (:with-prefix idioms- :all))
    ;
    // ("rosy/drawing" :all)
    ;
    // ("rosy/utils" :all)
    ;
    // ((js "gamvas/gamvas-module" gamvas))
    ;
    var staticWallCreate = (function ()      {
      var returnValueminus26926 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus26925",
          args:arguments
        };
        });
      var recurP26929 = (function (valminus26930)        {
        if ((("undefined")===((typeof valminus26930))))          {
          return false;
          };
        return (valminus26930.recurSigil===("recurSigilminus26925"));
        });
      var actualFunminus26928 = (function ()        {
        return (function (arguments)          {
          var G26932 = undefined;
          var G26933 = Array.prototype.slice.apply(arguments);
          G26932 = (function (arguments)            {
            var matchValminus26934 = G26933;
            if ((!((matchValminus26934.length>=5))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus26935 = Array.prototype.slice.call(matchValminus26934, 0, 5);
            if ((!((5===matchArraySimplePartminus26935.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var name = matchArraySimplePartminus26935[0];
            var x = matchArraySimplePartminus26935[1];
            var y = matchArraySimplePartminus26935[2];
            var w = matchArraySimplePartminus26935[3];
            var h = matchArraySimplePartminus26935[4];
            var matchArrayTailPartminus26936 = Array.prototype.slice.call(matchValminus26934, 5);
            var matchTempminus26937 = matchArrayTailPartminus26936[0];
            var previousMatchSucceededminus26938 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTempminus26937))))                {
                previousMatchSucceededminus26938 = false;
                };
              var r = matchTempminus26937;
              if (previousMatchSucceededminus26938)                {
                break;
                };
              previousMatchSucceededminus26938 = true;
              case 1:
              var fResult26939 = ((function (x)                {
                return 0;
                }))(matchTempminus26937);
              if ((fResult26939===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus26938 = false;
                };
              var r = fResult26939;
              if (previousMatchSucceededminus26938)                {
                break;
                };
              previousMatchSucceededminus26938 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            this._super(name, x, y);
            this.bodyRect(this.position.x, this.position.y, w, h, gamvas.physics.STATIC);
            return this.setRotation(r);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26932))))            {
            return G26932;
            };
          G26932 = (function (arguments)            {
            var matchValminus26940 = G26933;
            var anythingElseminus26931 = matchValminus26940;
            throw ((("Match fail in static-wall-create against: ")+anythingElseminus26931));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26932))))            {
            return G26932;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: name x y w h :- (opt r 0)] (this\._super name x y) (this\.body-rect this\.position\.x this\.position\.y w h gamvas\.physics\.STATIC) (this\.set-rotation r)) (anything-else-26931 (_throw (_+ ''Match fail in static-wall-create against: '' anything-else-26931))))) for value ")+(JSON.stringify(G26933))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus26926 = actualFunminus26928.apply(this, arguments);
      while (recurP26929(returnValueminus26926))        {
        returnValueminus26926 = actualFunminus26928.apply(this, returnValueminus26926.args);
        };
      return returnValueminus26926;
      });
    var StaticWall = gamvas.Actor.extend({      
      create:staticWallCreate
    });
    var smallJitter = (function (about)      {
      return moduleminus58c4bce870.plus(about, moduleC47fa390df.random(1));
      });
    var detectCollisionState = gamvas.ActorState.extend({      
      onCollisionEnter:(function (a)        {
        return console.log("Wall hit.", a);
        })
    });
    var wallCreate = (function ()      {
      var returnValueminus26942 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus26941",
          args:arguments
        };
        });
      var recurP26945 = (function (valminus26946)        {
        if ((("undefined")===((typeof valminus26946))))          {
          return false;
          };
        return (valminus26946.recurSigil===("recurSigilminus26941"));
        });
      var actualFunminus26944 = (function ()        {
        return (function (arguments)          {
          var G26948 = undefined;
          var G26949 = Array.prototype.slice.apply(arguments);
          G26948 = (function (arguments)            {
            var matchValminus26950 = G26949;
            if ((!((matchValminus26950.length>=5))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus26951 = Array.prototype.slice.call(matchValminus26950, 0, 5);
            if ((!((5===matchArraySimplePartminus26951.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var name = matchArraySimplePartminus26951[0];
            var x = matchArraySimplePartminus26951[1];
            var y = matchArraySimplePartminus26951[2];
            var w = matchArraySimplePartminus26951[3];
            var h = matchArraySimplePartminus26951[4];
            var matchArrayTailPartminus26952 = Array.prototype.slice.call(matchValminus26950, 5);
            var matchTempminus26953 = matchArrayTailPartminus26952[0];
            var previousMatchSucceededminus26954 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTempminus26953))))                {
                previousMatchSucceededminus26954 = false;
                };
              var r = matchTempminus26953;
              if (previousMatchSucceededminus26954)                {
                break;
                };
              previousMatchSucceededminus26954 = true;
              case 1:
              var fResult26955 = ((function (x)                {
                return 0;
                }))(matchTempminus26953);
              if ((fResult26955===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus26954 = false;
                };
              var r = fResult26955;
              if (previousMatchSucceededminus26954)                {
                break;
                };
              previousMatchSucceededminus26954 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            this._super(name, x, y);
            this.focused = false;
            this.wallW = w;
            this.wallH = h;
            console.log("Creating a wall at ", JSON.stringify([x, y, w, h]));
            this.bodyRect(this.position.x, this.position.y, w, h, gamvas.physics.DYNAMIC);
            this.setRotation(r);
            this.rotation = r;
            this.r = r;
            this.staticWall = (new StaticWall(moduleminus58c4bce870.plus("static-", name), x, y, moduleminus58c4bce870.times(0.25, w), moduleminus58c4bce870.times(0.25, h), r));
            this.addRevoluteJoint(this.staticWall, (new gamvas.Vector2D(moduleminus58c4bce870.divide(w, 4), 0)));
            this.addRevoluteJoint(this.staticWall, (new gamvas.Vector2D(moduleminus58c4bce870.divide(moduleminus58c4bce870.minus(w), 4), 0)));
            var state = gamvas.state.getCurrentState();
            state.addActor(this.staticWall);
            this.drgba = moduleC47fa390df.makeDrgba({              
              r:100,
              dr:20,
              g:149,
              dg:20,
              b:237,
              db:20,
              a:0.4
            });
            this.addState((new detectCollisionState("detectCollision")));
            this.setState("detectCollision");
            this.focusDrgba = moduleC47fa390df.makeDrgba({              
              r:20,
              dr:20,
              g:70,
              dg:20,
              b:255,
              db:20,
              a:0.4
            });
            return console.log("wall rotation is ", this.rotation);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26948))))            {
            return G26948;
            };
          G26948 = (function (arguments)            {
            var matchValminus26956 = G26949;
            var anythingElseminus26947 = matchValminus26956;
            throw ((("Match fail in wall-create against: ")+anythingElseminus26947));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26948))))            {
            return G26948;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: name x y w h :- (opt r 0)] (this\._super name x y) (set! this\.focused false) (set! this\.wall-w w) (set! this\.wall-h h) (console\.log ''Creating a wall at '' (JSON\.stringify [: x y w h])) (this\.body-rect this\.position\.x this\.position\.y w h gamvas\.physics\.DYNAMIC) (this\.set-rotation r) (set! this\.rotation r) (set! this\.r r) (set! this\.static-wall (new Static-Wall (+ ''static-'' name) x y (* 0.25 w) (* 0.25 h) r)) (this\.add-revolute-joint this\.static-wall (new gamvas\.Vector2D (/ w 4) 0)) (this\.add-revolute-joint this\.static-wall (new gamvas\.Vector2D (/ (- w) 4) 0)) (var state (gamvas\.state\.get-current-state)) (state\.add-actor this\.static-wall) (set! this\.drgba (make-drgba ({} r 100 dr 20 g 149 dg 20 b 237 db 20 a 0.4))) (this\.add-state (new detect-collision-state (quote detect-collision))) (this\.set-state (quote detect-collision)) (set! this\.focus-drgba (make-drgba ({} r 20 dr 20 g 70 dg 20 b 255 db 20 a 0.4))) (console\.log ''wall rotation is '' this\.rotation)) (anything-else-26947 (_throw (_+ ''Match fail in wall-create against: '' anything-else-26947))))) for value ")+(JSON.stringify(G26949))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus26942 = actualFunminus26944.apply(this, arguments);
      while (recurP26945(returnValueminus26942))        {
        returnValueminus26942 = actualFunminus26944.apply(this, returnValueminus26942.args);
        };
      return returnValueminus26942;
      });
    var wallDraw = (function (time)      {
      this._super(time);
      var x = this.position.x;
      var y = this.position.y;
      var hw = moduleminus58c4bce870.divide(this.wallW, 2);
      var hh = moduleminus58c4bce870.divide(this.wallH, 2);
      // (var tlx (- x hw))
      // (var tly (+ y hh))
      // (var trx (+ x hw))
      // (var try* (+ y hh))
      // (var brx (+ x hw))
      // (var bry (- y hh))
      // (var blx (- x hw))
      // (var bly (- y hh))
      ;
      var tlx = moduleminus58c4bce870.minus(hw);
      var tly = moduleminus58c4bce870.plus(hh);
      var trx = moduleminus58c4bce870.plus(hw);
      var trytimes = moduleminus58c4bce870.plus(hh);
      var brx = moduleminus58c4bce870.plus(hw);
      var bry = moduleminus58c4bce870.minus(hh);
      var blx = moduleminus58c4bce870.minus(hw);
      var bly = moduleminus58c4bce870.minus(hh);
      var st = gamvas.state.getCurrentState();
      var c = st.c;
      var jitLineTo = (function (x, y)        {
        c.lineTo(smallJitter(x), smallJitter(y));
        });
      var r = this.rotation;
      var self = this;
      return moduleminus6acd260b96.withJitter(c, 10, 3, (function (c)        {
        // (set! c\.fill-style (+ "rgba(" (random-int 20 100) "," (random-int 20 149) "," 237 ",.4)"))
        ;
        ((self.focused)?(c.fillStyle = self.focusDrgba.toString()) : (c.fillStyle = self.drgba.toString()));
        c.translate(x, y);
        c.rotate(r);
        c.beginPath();
        c.moveTo(smallJitter(tlx), smallJitter(tly));
        jitLineTo(trx, trytimes);
        jitLineTo(brx, bry);
        jitLineTo(blx, bly);
        return c.fill();
        }));
      });
    currentModuleminus26922.Wall = gamvas.Actor.extend({      
      create:wallCreate,
      draw:wallDraw
    });
    }))();
  return currentModuleminus26922;
  }))