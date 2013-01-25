define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "rosy/drawing", "rosy/utils", "gamvas/gamvas-module", "gamvas/box-2d-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, moduleminus6acd260b96, moduleC47fa390df, gamvas, Box2D)  {
  var currentModuleminus69621 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus69621 = value;
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
      var returnValueminus69625 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus69624",
          args:arguments
        };
        });
      var recurP69628 = (function (valminus69629)        {
        if ((("undefined")===((typeof valminus69629))))          {
          return false;
          };
        return (valminus69629.recurSigil===("recurSigilminus69624"));
        });
      var actualFunminus69627 = (function ()        {
        return (function (arguments)          {
          var G69631 = undefined;
          var G69632 = Array.prototype.slice.apply(arguments);
          G69631 = (function (arguments)            {
            var matchValminus69633 = G69632;
            if ((!((("object")===((typeof matchValminus69633))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus69633.length>=5))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus69634 = Array.prototype.slice.call(matchValminus69633, 0, 5);
            if ((!((("object")===((typeof matchArraySimplePartminus69634))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((5===matchArraySimplePartminus69634.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var name = matchArraySimplePartminus69634[0];
            var x = matchArraySimplePartminus69634[1];
            var y = matchArraySimplePartminus69634[2];
            var w = matchArraySimplePartminus69634[3];
            var h = matchArraySimplePartminus69634[4];
            var matchArrayTailPartminus69635 = Array.prototype.slice.call(matchValminus69633, 5);
            var matchTempminus69636 = matchArrayTailPartminus69635[0];
            var previousMatchSucceededminus69637 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTempminus69636))))                {
                previousMatchSucceededminus69637 = false;
                };
              var r = matchTempminus69636;
              if (previousMatchSucceededminus69637)                {
                break;
                };
              previousMatchSucceededminus69637 = true;
              case 1:
              var fResult69638 = ((function (x)                {
                return 0;
                }))(matchTempminus69636);
              if ((fResult69638===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus69637 = false;
                };
              var r = fResult69638;
              if (previousMatchSucceededminus69637)                {
                break;
                };
              previousMatchSucceededminus69637 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            this._super(name, x, y);
            this.bodyRect(this.position.x, this.position.y, w, h, gamvas.physics.STATIC);
            return this.setRotation(r);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69631))))            {
            return G69631;
            };
          G69631 = (function (arguments)            {
            var matchValminus69639 = G69632;
            var anythingElseminus69630 = matchValminus69639;
            throw ((("Match fail in static-wall-create against: ")+anythingElseminus69630));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69631))))            {
            return G69631;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: name x y w h :- (opt r 0)] (this\._super name x y) (this\.body-rect this\.position\.x this\.position\.y w h gamvas\.physics\.STATIC) (this\.set-rotation r)) (anything-else-69630 (_throw (_+ ''Match fail in static-wall-create against: '' anything-else-69630))))) for value ")+(JSON.stringify(G69632))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus69625 = actualFunminus69627.apply(this, arguments);
      while (recurP69628(returnValueminus69625))        {
        returnValueminus69625 = actualFunminus69627.apply(this, returnValueminus69625.args);
        };
      return returnValueminus69625;
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
      var returnValueminus69641 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus69640",
          args:arguments
        };
        });
      var recurP69644 = (function (valminus69645)        {
        if ((("undefined")===((typeof valminus69645))))          {
          return false;
          };
        return (valminus69645.recurSigil===("recurSigilminus69640"));
        });
      var actualFunminus69643 = (function ()        {
        return (function (arguments)          {
          var G69647 = undefined;
          var G69648 = Array.prototype.slice.apply(arguments);
          G69647 = (function (arguments)            {
            var matchValminus69649 = G69648;
            if ((!((("object")===((typeof matchValminus69649))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus69649.length>=5))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus69650 = Array.prototype.slice.call(matchValminus69649, 0, 5);
            if ((!((("object")===((typeof matchArraySimplePartminus69650))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((5===matchArraySimplePartminus69650.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var name = matchArraySimplePartminus69650[0];
            var x = matchArraySimplePartminus69650[1];
            var y = matchArraySimplePartminus69650[2];
            var w = matchArraySimplePartminus69650[3];
            var h = matchArraySimplePartminus69650[4];
            var matchArrayTailPartminus69651 = Array.prototype.slice.call(matchValminus69649, 5);
            var matchTempminus69652 = matchArrayTailPartminus69651[0];
            var previousMatchSucceededminus69653 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTempminus69652))))                {
                previousMatchSucceededminus69653 = false;
                };
              var r = matchTempminus69652;
              if (previousMatchSucceededminus69653)                {
                break;
                };
              previousMatchSucceededminus69653 = true;
              case 1:
              var fResult69654 = ((function (x)                {
                return 0;
                }))(matchTempminus69652);
              if ((fResult69654===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus69653 = false;
                };
              var r = fResult69654;
              if (previousMatchSucceededminus69653)                {
                break;
                };
              previousMatchSucceededminus69653 = true;
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
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69647))))            {
            return G69647;
            };
          G69647 = (function (arguments)            {
            var matchValminus69655 = G69648;
            var anythingElseminus69646 = matchValminus69655;
            throw ((("Match fail in wall-create against: ")+anythingElseminus69646));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69647))))            {
            return G69647;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: name x y w h :- (opt r 0)] (this\._super name x y) (set! this\.focused false) (set! this\.wall-w w) (set! this\.wall-h h) (console\.log ''Creating a wall at '' (JSON\.stringify [: x y w h])) (this\.body-rect this\.position\.x this\.position\.y w h gamvas\.physics\.STATIC) (this\.set-rotation r) (set! this\.rotation r) (set! this\.r r) (set! this\.drgba (make-drgba ({} r 100 dr 20 g 149 dg 20 b 237 db 20 a 0.4))) (this\.add-state (new detect-collision-state (quote detect-collision))) (this\.set-state (quote detect-collision)) (set! this\.focus-drgba (make-drgba ({} r 20 dr 20 g 70 dg 20 b 255 db 20 a 0.4))) (console\.log ''wall rotation is '' this\.rotation)) (anything-else-69646 (_throw (_+ ''Match fail in wall-create against: '' anything-else-69646))))) for value ")+(JSON.stringify(G69648))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus69641 = actualFunminus69643.apply(this, arguments);
      while (recurP69644(returnValueminus69641))        {
        returnValueminus69641 = actualFunminus69643.apply(this, returnValueminus69641.args);
        };
      return returnValueminus69641;
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
        var G69678 = this;
        return (function (arguments)          {
          var camera = gamvas.state.getCurrentState().camera;
          var matchVar69683 = camera.toWorld(mouseX, mouseY);
          var worldX = matchVar69683.x;
          if ((("undefined")===((typeof worldX))))            {
            throw ((("Match error in var-match (({} x world-x y world-y) (camera\.to-world mouse-x mouse-y)) against: ")+matchVar69683));
            };
          var worldY = matchVar69683.y;
          if ((("undefined")===((typeof worldY))))            {
            throw ((("Match error in var-match (({} x world-x y world-y) (camera\.to-world mouse-x mouse-y)) against: ")+matchVar69683));
            };
          ;
          var physicsX = gamvas.physics.toWorld(worldX), physicsY = gamvas.physics.toWorld(worldY);
          var result = G69678.fixture.TestPoint((new Box2D.Common.Math.b2Vec2(physicsX, physicsY)));
          return result;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var pointInside = (function (worldX, worldY)      {
      return (function (arguments)        {
        var G69705 = this;
        return (function (arguments)          {
          var physicsX = gamvas.physics.toWorld(worldX), physicsY = gamvas.physics.toWorld(worldY);
          var result = G69705.fixture.TestPoint((new Box2D.Common.Math.b2Vec2(physicsX, physicsY)));
          return result;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    currentModuleminus69621.Wall = gamvas.Actor.extend({      
      create:wallCreate,
      draw:wallDraw,
      clickInside:clickInside,
      pointInside:pointInside
    });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus69621;
  }))