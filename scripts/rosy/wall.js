define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "rosy/drawing", "rosy/utils", "gamvas/gamvas-module", "gamvas/box-2d-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, moduleminus6acd260b96, moduleC47fa390df, gamvas, Box2D)  {
  var currentModuleminus76136 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus76136 = value;
    });
  (function (arguments)    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/operator-functions" :all)
    ;
    // ("hooves/lisp-idioms" (:with-prefix idioms- :all))
    ;
    // ("hooves/hooves" :all)
    ;
    // ("rosy/drawing" :all)
    ;
    // ("rosy/utils" :all)
    ;
    // ((js "gamvas/gamvas-module" gamvas))
    ;
    // ((js "gamvas/box-2d-module" Box2D))
    ;
    var staticWallCreate = (function ()      {
      var returnValueminus76140 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus76139",
          args:arguments
        };
        });
      var recurP76143 = (function (valminus76144)        {
        if ((("undefined")===((typeof valminus76144))))          {
          return false;
          };
        return (valminus76144.recurSigil===("recurSigilminus76139"));
        });
      var actualFunminus76142 = (function ()        {
        return (function (arguments)          {
          var G76146 = undefined;
          var G76147 = Array.prototype.slice.apply(arguments);
          G76146 = (function (arguments)            {
            var matchValminus76148 = G76147;
            if ((!((("object")===((typeof matchValminus76148))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus76148.length>=5))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus76149 = Array.prototype.slice.call(matchValminus76148, 0, 5);
            if ((!((("object")===((typeof matchArraySimplePartminus76149))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((5===matchArraySimplePartminus76149.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var name = matchArraySimplePartminus76149[0];
            var x = matchArraySimplePartminus76149[1];
            var y = matchArraySimplePartminus76149[2];
            var w = matchArraySimplePartminus76149[3];
            var h = matchArraySimplePartminus76149[4];
            var matchArrayTailPartminus76150 = Array.prototype.slice.call(matchValminus76148, 5);
            var matchTempminus76151 = matchArrayTailPartminus76150[0];
            var previousMatchSucceededminus76152 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTempminus76151))))                {
                previousMatchSucceededminus76152 = false;
                };
              var r = matchTempminus76151;
              if (previousMatchSucceededminus76152)                {
                break;
                };
              previousMatchSucceededminus76152 = true;
              case 1:
              var fResult76153 = ((function (x)                {
                return 0;
                }))(matchTempminus76151);
              if ((fResult76153===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus76152 = false;
                };
              var r = fResult76153;
              if (previousMatchSucceededminus76152)                {
                break;
                };
              previousMatchSucceededminus76152 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            this._super(name, x, y);
            this.bodyRect(this.position.x, this.position.y, w, h, gamvas.physics.STATIC);
            return this.setRotation(r);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76146))))            {
            return G76146;
            };
          G76146 = (function (arguments)            {
            var matchValminus76154 = G76147;
            var anythingElseminus76145 = matchValminus76154;
            throw ((("Match fail in static-wall-create against: ")+anythingElseminus76145));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76146))))            {
            return G76146;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: name x y w h :- (opt r 0)] (this\._super name x y) (this\.body-rect this\.position\.x this\.position\.y w h gamvas\.physics\.STATIC) (this\.set-rotation r)) (anything-else-76145 (_throw (_+ ''Match fail in static-wall-create against: '' anything-else-76145))))) for value ")+(JSON.stringify(G76147))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus76140 = actualFunminus76142.apply(this, arguments);
      while (recurP76143(returnValueminus76140))        {
        returnValueminus76140 = actualFunminus76142.apply(this, returnValueminus76140.args);
        };
      return returnValueminus76140;
      });
    var StaticWall = gamvas.Actor.extend({      
      create:staticWallCreate
    });
    var smallJitter = (function (about)      {
      return moduleminus58c4bce870.plus(about, moduleC47fa390df.random(1));
      });
    var detectCollisionState = gamvas.ActorState.extend({      
      enter:(function ()        {
        return console.log("Entering collision state.");
        }),
      leave:(function ()        {
        return console.log("Leaving collision state.");
        }),
      onCollisionEnter:(function (a)        {
        this.actor.focused = true;
        }),
      onMouseDown:(function (button, x, y, event)        {
        return ((this.actor.clickInside(x, y))?(console.log("True.")) : (console.log("False.")));
        })
    });
    var wallCreate = (function ()      {
      var returnValueminus76156 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus76155",
          args:arguments
        };
        });
      var recurP76159 = (function (valminus76160)        {
        if ((("undefined")===((typeof valminus76160))))          {
          return false;
          };
        return (valminus76160.recurSigil===("recurSigilminus76155"));
        });
      var actualFunminus76158 = (function ()        {
        return (function (arguments)          {
          var G76162 = undefined;
          var G76163 = Array.prototype.slice.apply(arguments);
          G76162 = (function (arguments)            {
            var matchValminus76164 = G76163;
            if ((!((("object")===((typeof matchValminus76164))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus76164.length>=5))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus76165 = Array.prototype.slice.call(matchValminus76164, 0, 5);
            if ((!((("object")===((typeof matchArraySimplePartminus76165))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((5===matchArraySimplePartminus76165.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var name = matchArraySimplePartminus76165[0];
            var x = matchArraySimplePartminus76165[1];
            var y = matchArraySimplePartminus76165[2];
            var w = matchArraySimplePartminus76165[3];
            var h = matchArraySimplePartminus76165[4];
            var matchArrayTailPartminus76166 = Array.prototype.slice.call(matchValminus76164, 5);
            var matchTempminus76167 = matchArrayTailPartminus76166[0];
            var previousMatchSucceededminus76168 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTempminus76167))))                {
                previousMatchSucceededminus76168 = false;
                };
              var r = matchTempminus76167;
              if (previousMatchSucceededminus76168)                {
                break;
                };
              previousMatchSucceededminus76168 = true;
              case 1:
              var fResult76169 = ((function (x)                {
                return 0;
                }))(matchTempminus76167);
              if ((fResult76169===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus76168 = false;
                };
              var r = fResult76169;
              if (previousMatchSucceededminus76168)                {
                break;
                };
              previousMatchSucceededminus76168 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            this._super(name, x, y);
            this.focused = false;
            this.wallW = w;
            this.wallH = h;
            console.log("Creating a wall at ", JSON.stringify([x, y, w, h]));
            this.bodyRect(this.position.x, this.position.y, w, h, gamvas.physics.STATIC);
            this.setRotation(r);
            this.rotation = r;
            this.r = r;
            this.drgba = moduleC47fa390df.makeDrgba({              
              r:100,
              dr:20,
              g:149,
              dg:20,
              b:237,
              db:20,
              a:0.4
            });
            this.addState((new (detectCollisionState)("detectCollision")));
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
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76162))))            {
            return G76162;
            };
          G76162 = (function (arguments)            {
            var matchValminus76170 = G76163;
            var anythingElseminus76161 = matchValminus76170;
            throw ((("Match fail in wall-create against: ")+anythingElseminus76161));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76162))))            {
            return G76162;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: name x y w h :- (opt r 0)] (this\._super name x y) (set! this\.focused false) (set! this\.wall-w w) (set! this\.wall-h h) (console\.log ''Creating a wall at '' (JSON\.stringify [: x y w h])) (this\.body-rect this\.position\.x this\.position\.y w h gamvas\.physics\.STATIC) (this\.set-rotation r) (set! this\.rotation r) (set! this\.r r) (set! this\.drgba (make-drgba ({} r 100 dr 20 g 149 dg 20 b 237 db 20 a 0.4))) (this\.add-state (new detect-collision-state (quote detect-collision))) (this\.set-state (quote detect-collision)) (set! this\.focus-drgba (make-drgba ({} r 20 dr 20 g 70 dg 20 b 255 db 20 a 0.4))) (console\.log ''wall rotation is '' this\.rotation)) (anything-else-76161 (_throw (_+ ''Match fail in wall-create against: '' anything-else-76161))))) for value ")+(JSON.stringify(G76163))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus76156 = actualFunminus76158.apply(this, arguments);
      while (recurP76159(returnValueminus76156))        {
        returnValueminus76156 = actualFunminus76158.apply(this, returnValueminus76156.args);
        };
      return returnValueminus76156;
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
    var clickInside = (function (mouseX, mouseY)      {
      return (function (arguments)        {
        var G76193 = this;
        return (function (arguments)          {
          var camera = gamvas.state.getCurrentState().camera;
          var matchVar76198 = camera.toWorld(mouseX, mouseY);
          var worldX = matchVar76198.x;
          if ((("undefined")===((typeof worldX))))            {
            throw ((("Match error in var-match (({} x world-x y world-y) (camera\.to-world mouse-x mouse-y)) against: ")+matchVar76198));
            };
          var worldY = matchVar76198.y;
          if ((("undefined")===((typeof worldY))))            {
            throw ((("Match error in var-match (({} x world-x y world-y) (camera\.to-world mouse-x mouse-y)) against: ")+matchVar76198));
            };
          ;
          var physicsX = gamvas.physics.toWorld(worldX), physicsY = gamvas.physics.toWorld(worldY);
          var result = G76193.fixture.TestPoint((new (Box2D.Common.Math.b2Vec2)(physicsX, physicsY)));
          return result;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var pointInside = (function (worldX, worldY)      {
      return (function (arguments)        {
        var G76220 = this;
        return (function (arguments)          {
          var physicsX = gamvas.physics.toWorld(worldX), physicsY = gamvas.physics.toWorld(worldY);
          var result = G76220.fixture.TestPoint((new (Box2D.Common.Math.b2Vec2)(physicsX, physicsY)));
          return result;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    currentModuleminus76136.Wall = gamvas.Actor.extend({      
      create:wallCreate,
      draw:wallDraw,
      clickInside:clickInside,
      pointInside:pointInside
    });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus76136;
  }))