define(["hooves/operator-functions", "hooves/lisp-idioms", "hooves/hooves", "rosy/drawing", "rosy/utils", "gamvas/gamvas-module", "gamvas/box-2d-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus4745e9d952, moduleminus6acd260b96, moduleC47fa390df, gamvas, Box2D)  {
  var currentModuleminus9077 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus9077 = value;
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
      var returnValueminus9081 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus9080",
          args:arguments
        };
        });
      var recurP9084 = (function (valminus9085)        {
        if ((("undefined")===((typeof valminus9085))))          {
          return false;
          };
        return (valminus9085.recurSigil===("recurSigilminus9080"));
        });
      var actualFunminus9083 = (function ()        {
        return (function (arguments)          {
          var G9087 = undefined;
          var G9088 = Array.prototype.slice.apply(arguments);
          G9087 = (function (arguments)            {
            var matchValminus9089 = G9088;
            if ((!((("object")===((typeof matchValminus9089))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus9089.length>=5))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus9090 = Array.prototype.slice.call(matchValminus9089, 0, 5);
            if ((!((("object")===((typeof matchArraySimplePartminus9090))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((5===matchArraySimplePartminus9090.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var name = matchArraySimplePartminus9090[0];
            var x = matchArraySimplePartminus9090[1];
            var y = matchArraySimplePartminus9090[2];
            var w = matchArraySimplePartminus9090[3];
            var h = matchArraySimplePartminus9090[4];
            var matchArrayTailPartminus9091 = Array.prototype.slice.call(matchValminus9089, 5);
            var matchTempminus9092 = matchArrayTailPartminus9091[0];
            var previousMatchSucceededminus9093 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTempminus9092))))                {
                previousMatchSucceededminus9093 = false;
                };
              var r = matchTempminus9092;
              if (previousMatchSucceededminus9093)                {
                break;
                };
              previousMatchSucceededminus9093 = true;
              case 1:
              var fResult9094 = ((function (x)                {
                return 0;
                }))(matchTempminus9092);
              if ((fResult9094===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus9093 = false;
                };
              var r = fResult9094;
              if (previousMatchSucceededminus9093)                {
                break;
                };
              previousMatchSucceededminus9093 = true;
              default :
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              
            };
            this._super(name, x, y);
            this.bodyRect(this.position.x, this.position.y, w, h, gamvas.physics.STATIC);
            return this.setRotation(r);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9087))))            {
            return G9087;
            };
          G9087 = (function (arguments)            {
            var matchValminus9095 = G9088;
            var anythingElseminus9086 = matchValminus9095;
            throw ((("Match fail in static-wall-create against: ")+anythingElseminus9086));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9087))))            {
            return G9087;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: name x y w h :- (opt r 0)] (this\._super name x y) (this\.body-rect this\.position\.x this\.position\.y w h gamvas\.physics\.STATIC) (this\.set-rotation r)) (anything-else-9086 (_throw (_+ ''Match fail in static-wall-create against: '' anything-else-9086))))) for value ")+(JSON.stringify(G9088))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus9081 = actualFunminus9083.apply(this, arguments);
      while (recurP9084(returnValueminus9081))        {
        returnValueminus9081 = actualFunminus9083.apply(this, returnValueminus9081.args);
        };
      return returnValueminus9081;
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
      var returnValueminus9097 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus9096",
          args:arguments
        };
        });
      var recurP9100 = (function (valminus9101)        {
        if ((("undefined")===((typeof valminus9101))))          {
          return false;
          };
        return (valminus9101.recurSigil===("recurSigilminus9096"));
        });
      var actualFunminus9099 = (function ()        {
        return (function (arguments)          {
          var G9103 = undefined;
          var G9104 = Array.prototype.slice.apply(arguments);
          G9103 = (function (arguments)            {
            var matchValminus9105 = G9104;
            if ((!((("object")===((typeof matchValminus9105))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((matchValminus9105.length>=5))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchArraySimplePartminus9106 = Array.prototype.slice.call(matchValminus9105, 0, 5);
            if ((!((("object")===((typeof matchArraySimplePartminus9106))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((5===matchArraySimplePartminus9106.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var name = matchArraySimplePartminus9106[0];
            var x = matchArraySimplePartminus9106[1];
            var y = matchArraySimplePartminus9106[2];
            var w = matchArraySimplePartminus9106[3];
            var h = matchArraySimplePartminus9106[4];
            var matchArrayTailPartminus9107 = Array.prototype.slice.call(matchValminus9105, 5);
            var matchTempminus9108 = matchArrayTailPartminus9107[0];
            var previousMatchSucceededminus9109 = true;
            switch (1){
                          case 1:
              if ((("undefined")===((typeof matchTempminus9108))))                {
                previousMatchSucceededminus9109 = false;
                };
              var r = matchTempminus9108;
              if (previousMatchSucceededminus9109)                {
                break;
                };
              previousMatchSucceededminus9109 = true;
              case 1:
              var fResult9110 = ((function (x)                {
                return 0;
                }))(matchTempminus9108);
              if ((fResult9110===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                {
                previousMatchSucceededminus9109 = false;
                };
              var r = fResult9110;
              if (previousMatchSucceededminus9109)                {
                break;
                };
              previousMatchSucceededminus9109 = true;
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
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9103))))            {
            return G9103;
            };
          G9103 = (function (arguments)            {
            var matchValminus9111 = G9104;
            var anythingElseminus9102 = matchValminus9111;
            throw ((("Match fail in wall-create against: ")+anythingElseminus9102));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9103))))            {
            return G9103;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: name x y w h :- (opt r 0)] (this\._super name x y) (set! this\.focused false) (set! this\.wall-w w) (set! this\.wall-h h) (console\.log ''Creating a wall at '' (JSON\.stringify [: x y w h])) (this\.body-rect this\.position\.x this\.position\.y w h gamvas\.physics\.STATIC) (this\.set-rotation r) (set! this\.rotation r) (set! this\.r r) (set! this\.drgba (make-drgba ({} r 100 dr 20 g 149 dg 20 b 237 db 20 a 0.4))) (this\.add-state (new detect-collision-state (quote detect-collision))) (this\.set-state (quote detect-collision)) (set! this\.focus-drgba (make-drgba ({} r 20 dr 20 g 70 dg 20 b 255 db 20 a 0.4))) (console\.log ''wall rotation is '' this\.rotation)) (anything-else-9102 (_throw (_+ ''Match fail in wall-create against: '' anything-else-9102))))) for value ")+(JSON.stringify(G9104))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus9097 = actualFunminus9099.apply(this, arguments);
      while (recurP9100(returnValueminus9097))        {
        returnValueminus9097 = actualFunminus9099.apply(this, returnValueminus9097.args);
        };
      return returnValueminus9097;
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
        var G9134 = this;
        return (function (arguments)          {
          var camera = gamvas.state.getCurrentState().camera;
          var matchVar9139 = camera.toWorld(mouseX, mouseY);
          var worldX = matchVar9139.x;
          if ((("undefined")===((typeof worldX))))            {
            throw ((("Match error in var-match (({} x world-x y world-y) (camera\.to-world mouse-x mouse-y)) against: ")+matchVar9139));
            };
          var worldY = matchVar9139.y;
          if ((("undefined")===((typeof worldY))))            {
            throw ((("Match error in var-match (({} x world-x y world-y) (camera\.to-world mouse-x mouse-y)) against: ")+matchVar9139));
            };
          ;
          var physicsX = gamvas.physics.toWorld(worldX), physicsY = gamvas.physics.toWorld(worldY);
          var result = G9134.fixture.TestPoint((new (Box2D.Common.Math.b2Vec2)(physicsX, physicsY)));
          return result;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    var pointInside = (function (worldX, worldY)      {
      return (function (arguments)        {
        var G9161 = this;
        return (function (arguments)          {
          var physicsX = gamvas.physics.toWorld(worldX), physicsY = gamvas.physics.toWorld(worldY);
          var result = G9161.fixture.TestPoint((new (Box2D.Common.Math.b2Vec2)(physicsX, physicsY)));
          return result;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    currentModuleminus9077.Wall = gamvas.Actor.extend({      
      create:wallCreate,
      draw:wallDraw,
      clickInside:clickInside,
      pointInside:pointInside
    });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus9077;
  }))