define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "rosy/drawing", "rosy/utils", "gamvas/gamvas-module", "gamvas/box-2d-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, moduleminus6acd260b96, moduleC47fa390df, gamvas, Box2D)  {
  var currentModuleminus267762 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus267762 = value;
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
      var returnValueminus267766 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus267765",
          args:arguments
        };
        });
      var recurP267769 = (function (valminus267770)        {
        if ((("undefined")===((typeof valminus267770))))          {
          return false;
          };
        return (valminus267770.recurSigil===("recurSigilminus267765"));
        });
      var actualFunminus267768 = (function ()        {
        return (function (arguments)          {
          var G267772 = undefined;
          var G267773 = Array.prototype.slice.apply(arguments);
          G267772 = (function (arguments)            {
            var matchValminus267774 = G267773;
            if ((!((("object")===((typeof matchValminus267774))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus267774.length>=5))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus267775 = Array.prototype.slice.call(matchValminus267774, 0, 5);
            if ((!((("object")===((typeof matchArraySimplePartminus267775))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((5===matchArraySimplePartminus267775.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var name = matchArraySimplePartminus267775[0];
            var x = matchArraySimplePartminus267775[1];
            var y = matchArraySimplePartminus267775[2];
            var w = matchArraySimplePartminus267775[3];
            var h = matchArraySimplePartminus267775[4];
            var matchArrayTailPartminus267776 = Array.prototype.slice.call(matchValminus267774, 5);
            var matchTempminus267777 = matchArrayTailPartminus267776[0];
            var previousMatchSucceededminus267778 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTempminus267777))))                {
                previousMatchSucceededminus267778 = false;
                };
              var r = matchTempminus267777;
              if (previousMatchSucceededminus267778)                {
                break;
                };
              previousMatchSucceededminus267778 = true;
              case 1:
              var fResult267779 = ((function (x)                {
                return 0;
                }))(matchTempminus267777);
              if ((fResult267779===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus267778 = false;
                };
              var r = fResult267779;
              if (previousMatchSucceededminus267778)                {
                break;
                };
              previousMatchSucceededminus267778 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            this._super(name, x, y);
            this.bodyRect(this.position.x, this.position.y, w, h, gamvas.physics.STATIC);
            return this.setRotation(r);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G267772))))            {
            return G267772;
            };
          G267772 = (function (arguments)            {
            var matchValminus267780 = G267773;
            var anythingElseminus267771 = matchValminus267780;
            throw ((("Match fail in static-wall-create against: ")+anythingElseminus267771));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G267772))))            {
            return G267772;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: name x y w h :- (opt r 0)] (this\._super name x y) (this\.body-rect this\.position\.x this\.position\.y w h gamvas\.physics\.STATIC) (this\.set-rotation r)) (anything-else-267771 (_throw (_+ ''Match fail in static-wall-create against: '' anything-else-267771))))) for value ")+(JSON.stringify(G267773))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus267766 = actualFunminus267768.apply(this, arguments);
      while (recurP267769(returnValueminus267766))        {
        returnValueminus267766 = actualFunminus267768.apply(this, returnValueminus267766.args);
        };
      return returnValueminus267766;
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
      var returnValueminus267782 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus267781",
          args:arguments
        };
        });
      var recurP267785 = (function (valminus267786)        {
        if ((("undefined")===((typeof valminus267786))))          {
          return false;
          };
        return (valminus267786.recurSigil===("recurSigilminus267781"));
        });
      var actualFunminus267784 = (function ()        {
        return (function (arguments)          {
          var G267788 = undefined;
          var G267789 = Array.prototype.slice.apply(arguments);
          G267788 = (function (arguments)            {
            var matchValminus267790 = G267789;
            if ((!((("object")===((typeof matchValminus267790))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus267790.length>=5))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus267791 = Array.prototype.slice.call(matchValminus267790, 0, 5);
            if ((!((("object")===((typeof matchArraySimplePartminus267791))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((5===matchArraySimplePartminus267791.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var name = matchArraySimplePartminus267791[0];
            var x = matchArraySimplePartminus267791[1];
            var y = matchArraySimplePartminus267791[2];
            var w = matchArraySimplePartminus267791[3];
            var h = matchArraySimplePartminus267791[4];
            var matchArrayTailPartminus267792 = Array.prototype.slice.call(matchValminus267790, 5);
            var matchTempminus267793 = matchArrayTailPartminus267792[0];
            var previousMatchSucceededminus267794 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTempminus267793))))                {
                previousMatchSucceededminus267794 = false;
                };
              var r = matchTempminus267793;
              if (previousMatchSucceededminus267794)                {
                break;
                };
              previousMatchSucceededminus267794 = true;
              case 1:
              var fResult267795 = ((function (x)                {
                return 0;
                }))(matchTempminus267793);
              if ((fResult267795===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus267794 = false;
                };
              var r = fResult267795;
              if (previousMatchSucceededminus267794)                {
                break;
                };
              previousMatchSucceededminus267794 = true;
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
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G267788))))            {
            return G267788;
            };
          G267788 = (function (arguments)            {
            var matchValminus267796 = G267789;
            var anythingElseminus267787 = matchValminus267796;
            throw ((("Match fail in wall-create against: ")+anythingElseminus267787));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G267788))))            {
            return G267788;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: name x y w h :- (opt r 0)] (this\._super name x y) (set! this\.focused false) (set! this\.wall-w w) (set! this\.wall-h h) (console\.log ''Creating a wall at '' (JSON\.stringify [: x y w h])) (this\.body-rect this\.position\.x this\.position\.y w h gamvas\.physics\.STATIC) (this\.set-rotation r) (set! this\.rotation r) (set! this\.r r) (set! this\.drgba (make-drgba ({} r 100 dr 20 g 149 dg 20 b 237 db 20 a 0.4))) (this\.add-state (new detect-collision-state (quote detect-collision))) (this\.set-state (quote detect-collision)) (set! this\.focus-drgba (make-drgba ({} r 20 dr 20 g 70 dg 20 b 255 db 20 a 0.4))) (console\.log ''wall rotation is '' this\.rotation)) (anything-else-267787 (_throw (_+ ''Match fail in wall-create against: '' anything-else-267787))))) for value ")+(JSON.stringify(G267789))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus267782 = actualFunminus267784.apply(this, arguments);
      while (recurP267785(returnValueminus267782))        {
        returnValueminus267782 = actualFunminus267784.apply(this, returnValueminus267782.args);
        };
      return returnValueminus267782;
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
        var G267819 = this;
        return (function (arguments)          {
          var camera = gamvas.state.getCurrentState().camera;
          var matchVar267824 = camera.toWorld(mouseX, mouseY);
          var worldX = matchVar267824.x;
          if ((("undefined")===((typeof worldX))))            {
            throw ((("Match error in var-match (({} x world-x y world-y) (camera\.to-world mouse-x mouse-y)) against: ")+matchVar267824));
            };
          var worldY = matchVar267824.y;
          if ((("undefined")===((typeof worldY))))            {
            throw ((("Match error in var-match (({} x world-x y world-y) (camera\.to-world mouse-x mouse-y)) against: ")+matchVar267824));
            };
          ;
          var physicsX = gamvas.physics.toWorld(worldX), physicsY = gamvas.physics.toWorld(worldY);
          var result = G267819.fixture.TestPoint((new (Box2D.Common.Math.b2Vec2)(physicsX, physicsY)));
          return result;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var pointInside = (function (worldX, worldY)      {
      return (function (arguments)        {
        var G267846 = this;
        return (function (arguments)          {
          var physicsX = gamvas.physics.toWorld(worldX), physicsY = gamvas.physics.toWorld(worldY);
          var result = G267846.fixture.TestPoint((new (Box2D.Common.Math.b2Vec2)(physicsX, physicsY)));
          return result;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    currentModuleminus267762.Wall = gamvas.Actor.extend({      
      create:wallCreate,
      draw:wallDraw,
      clickInside:clickInside,
      pointInside:pointInside
    });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus267762;
  }))