define(["hooves/operator-functions", "hooves/lisp-idioms", "rosy/drawing", "rosy/utils", "hooves/hooves", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus6acd260b96, moduleC47fa390df, moduleminus4745e9d952, gamvas)  {
  var currentModuleminus9178 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus9178 = value;
    });
  (function (arguments)    {
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
    // ("hooves/hooves" :all)
    ;
    // ((js "gamvas/gamvas-module" gamvas))
    ;
    var WallFocusState = gamvas.ActorState.extend({      
      init:(function ()        {
        return console.log("Wall-Focus-State initialized.");
        }),
      enter:(function ()        {
        return console.log("Wall-Focus-State entered.");
        }),
      leave:(function ()        {
        return console.log("Wall-Focus-State left.");
        }),
      doCollide:(function (a, b)        {
        return true;
        }),
      onCollision:(function (a, ni, ti, c)        {
        return console.log("Wall hit.");
        }),
      onCollisionEnter:(function (a)        {
        return console.log("Wall hit.", a);
        })
    });
    var ForceableState = gamvas.ActorState.extend({      
      update:(function (time)        {
        ((moduleminus4745e9d952.definedPredicate(this.actor.gFactors))?((function (arguments)          {
          var gf = 1;
          var arrayObject9248 = this.actor.gFactors;
          for (index in (arrayObject9248))            {
            var matchVar9249 = arrayObject9248[index];
            var element = matchVar9249;
            ;
            gf = moduleminus58c4bce870.times(gf, element);
            };
          ;
          this.actor.gFactors = undefined;
          this.actor.body.gravityFactor = gf;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))) : ((function (arguments)          {
          this.actor.body.gravityFactor = 1;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))));
        ((moduleminus4745e9d952.definedPredicate(this.actor.dFactors))?((function (arguments)          {
          var df = 0;
          var arrayObject9264 = this.actor.dFactors;
          for (index in (arrayObject9264))            {
            var matchVar9265 = arrayObject9264[index];
            var element = matchVar9265;
            ;
            df = moduleminus58c4bce870.plus(df, element);
            };
          ;
          this.actor.dFactors = undefined;
          return this.actor.setLinearDamping(df);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))) : ((function (arguments)          {
          return this.actor.setLinearDamping(0);
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))));
        return ((moduleminus4745e9d952.definedPredicate(this.actor.forces))?((function (arguments)          {
          var arrayObject9285 = this.actor.forces;
          for (index in (arrayObject9285))            {
            var matchVar9286 = arrayObject9285[index];
            var forceDesc = matchVar9286;
            ;
            this.actor.body.ApplyForce.apply(this.actor.body, forceDesc);
            };
          ;
          this.actor.forces = undefined;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))) : (undefined));
        })
    });
    var ballCreate = (function ()      {
      var returnValueminus9288 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus9287",
          args:arguments
        };
        });
      var recurP9291 = (function (valminus9292)        {
        if ((("undefined")===((typeof valminus9292))))          {
          return false;
          };
        return (valminus9292.recurSigil===("recurSigilminus9287"));
        });
      var actualFunminus9290 = (function ()        {
        return (function (arguments)          {
          var G9294 = undefined;
          var G9295 = Array.prototype.slice.apply(arguments);
          G9294 = (function (arguments)            {
            var matchValminus9296 = G9295;
            if ((!((("object")===((typeof matchValminus9296))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus9296.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var name = matchValminus9296[0];
            var x = matchValminus9296[1];
            var y = matchValminus9296[2];
            return recur(name, x, y, gamvas.physics.DYNAMIC);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9294))))            {
            return G9294;
            };
          G9294 = (function (arguments)            {
            var matchValminus9297 = G9295;
            if ((!((("object")===((typeof matchValminus9297))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchValminus9297.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var name = matchValminus9297[0];
            var x = matchValminus9297[1];
            var y = matchValminus9297[2];
            var dynamicalCharacter = matchValminus9297[3];
            this._super(name, x, y);
            this.restitution = 0.4;
            this.pminus1 = [x, y];
            this.pminus2 = [moduleminus58c4bce870.plus(1, x), moduleminus58c4bce870.plus(1, y)];
            this.addState((new (ForceableState)("forceable")));
            this.setState("forceable");
            return this.bodyCircle(this.position.x, this.position.y, 10, dynamicalCharacter);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9294))))            {
            return G9294;
            };
          G9294 = (function (arguments)            {
            var matchValminus9298 = G9295;
            var anythingElseminus9293 = matchValminus9298;
            throw ((("Match fail in ball-create against: ")+anythingElseminus9293));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9294))))            {
            return G9294;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: name x y] (recur name x y gamvas\.physics\.DYNAMIC)) ([: name x y dynamical-character] (this\._super name x y) (set! this\.restitution 0.4) (set! this\.p-1 [: x y]) (set! this\.p-2 [: (+ 1 x) (+ 1 y)]) (this\.add-state (new Forceable-State :forceable)) (this\.set-state :forceable) (this\.body-circle this\.position\.x this\.position\.y 10 dynamical-character)) (anything-else-9293 (_throw (_+ ''Match fail in ball-create against: '' anything-else-9293))))) for value ")+(JSON.stringify(G9295))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus9288 = actualFunminus9290.apply(this, arguments);
      while (recurP9291(returnValueminus9288))        {
        returnValueminus9288 = actualFunminus9290.apply(this, returnValueminus9288.args);
        };
      return returnValueminus9288;
      });
    var ballDraw = (function (time)      {
      this._super(time);
      this.pminus2 = this.pminus1;
      this.pminus1 = [this.position.x, this.position.y];
      var x = this.position.x;
      var y = this.position.y;
      var st = gamvas.state.getCurrentState();
      var c = st.c;
      return moduleminus6acd260b96.withJitter(st.c, 10, 3, (function (c)        {
        c.fillStyle = moduleminus58c4bce870.plus("rgba(", 255, ",", moduleC47fa390df.randomInt(80), ",", moduleC47fa390df.randomInt(80), ",.4)");
        c.beginPath();
        c.arc(moduleC47fa390df.random(4, moduleminus58c4bce870.minus(x, 2)), moduleC47fa390df.random(4, moduleminus58c4bce870.minus(y, 2)), moduleC47fa390df.random(0.1, 10), 0, moduleminus58c4bce870.times(2, Math.PI), false);
        return c.fill();
        }));
      });
    var stationaryPredicate = (function ()      {
      return (function (arguments)        {
        var G9331 = undefined;
        var G9332 = [this.position.x, this.position.y, this.pminus1, this.pminus2];
        G9331 = (function (arguments)          {
          var matchValminus9333 = G9332;
          if ((!((("object")===((typeof matchValminus9333))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((4===matchValminus9333.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus9334 = matchValminus9333[0];
          var matchTempminus9335 = matchValminus9333[1];
          var matchTempminus9336 = matchValminus9333[2];
          var matchTempminus9337 = matchValminus9333[3];
          var x = matchTempminus9334;
          var y = matchTempminus9335;
          if ((!((("object")===((typeof matchTempminus9336))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((2===matchTempminus9336.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var xminus1 = matchTempminus9336[0];
          var yminus1 = matchTempminus9336[1];
          if ((!((("object")===((typeof matchTempminus9337))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((2===matchTempminus9337.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var xminus2 = matchTempminus9337[0];
          var yminus2 = matchTempminus9337[1];
          return ((moduleminus58c4bce870.TripleEqualminus(x, xminus1))&&(((moduleminus58c4bce870.TripleEqualminus(xminus1, xminus2))&&(((moduleminus58c4bce870.TripleEqualminus(y, yminus1))&&(moduleminus58c4bce870.TripleEqualminus(yminus1, yminus2)))))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9331))))          {
          return G9331;
          };
        G9331 = (function (arguments)          {
          var matchValminus9358 = G9332;
          var G9330 = matchValminus9358;
          throw ((("Match error in ")+("(let ((x this\.position\.x) (y this\.position\.y) ([: x-1 y-1] this\.p-1) ([: x-2 y-2] this\.p-2)) (&& (=== x x-1) (=== x-1 x-2) (=== y y-1) (=== y-1 y-2)))")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9331))))          {
          return G9331;
          };
        throw ((("match-fail at ((match [: this\.position\.x this\.position\.y this\.p-1 this\.p-2] ([: x y [: x-1 y-1] [: x-2 y-2]] (&& (=== x x-1) (=== x-1 x-2) (=== y y-1) (=== y-1 y-2))) (G9330 (_throw (_+ ''Match error in '' ''(let ((x this\\.position\\.x) (y this\\.position\\.y) ([: x-1 y-1] this\\.p-1) ([: x-2 y-2] this\\.p-2)) (&& (=== x x-1) (=== x-1 x-2) (=== y y-1) (=== y-1 y-2)))''))))) for value ")+(JSON.stringify(G9332))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    currentModuleminus9178.Ball = gamvas.Actor.extend({      
      create:ballCreate,
      draw:ballDraw,
      addForce:(function (f, a)        {
        ((moduleminus4745e9d952.undefinedPredicate(this.forces))?(this.forces = []) : (undefined));
        return this.forces.push([f, a]);
        }),
      cancelGravityNextUpdate:(function ()        {
        var returnValueminus9372 = undefined;
        var recur = (function ()          {
          return {            
            recurSigil:"recurSigilminus9371",
            args:arguments
          };
          });
        var recurP9375 = (function (valminus9376)          {
          if ((("undefined")===((typeof valminus9376))))            {
            return false;
            };
          return (valminus9376.recurSigil===("recurSigilminus9371"));
          });
        var actualFunminus9374 = (function ()          {
          return (function (arguments)            {
            var G9378 = undefined;
            var G9379 = Array.prototype.slice.apply(arguments);
            G9378 = (function (arguments)              {
              var matchValminus9380 = G9379;
              if ((!((("object")===((typeof matchValminus9380))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              if ((!((matchValminus9380.length>=0))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var matchArraySimplePartminus9381 = Array.prototype.slice.call(matchValminus9380, 0, 0);
              if ((!((("object")===((typeof matchArraySimplePartminus9381))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              if ((!((0===matchArraySimplePartminus9381.length))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var matchArrayTailPartminus9382 = Array.prototype.slice.call(matchValminus9380, 0);
              var matchTempminus9383 = matchArrayTailPartminus9382[0];
              var previousMatchSucceededminus9384 = true;
              switch (1){
                              case 1:
                if ((("undefined")===((typeof matchTempminus9383))))                  {
                  previousMatchSucceededminus9384 = false;
                  };
                var by = matchTempminus9383;
                if (previousMatchSucceededminus9384)                  {
                  break;
                  };
                previousMatchSucceededminus9384 = true;
                case 1:
                var fResult9385 = ((function (x)                  {
                  return 0;
                  }))(matchTempminus9383);
                if ((fResult9385===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                  {
                  previousMatchSucceededminus9384 = false;
                  };
                var by = fResult9385;
                if (previousMatchSucceededminus9384)                  {
                  break;
                  };
                previousMatchSucceededminus9384 = true;
                default :
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                
              };
              ((moduleminus4745e9d952.undefinedPredicate(this.gFactors))?(this.gFactors = []) : (undefined));
              return this.gFactors.push(by);
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9378))))              {
              return G9378;
              };
            G9378 = (function (arguments)              {
              var matchValminus9386 = G9379;
              var anythingElseminus9377 = matchValminus9386;
              throw ((("Match fail in anonymous against: ")+anythingElseminus9377));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9378))))              {
              return G9378;
              };
            throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: :- (opt by 0)] (if (undefined\? this\.g-factors) (set! this\.g-factors [:])) (this\.g-factors\.push by)) (anything-else-9377 (_throw (_+ ''Match fail in anonymous against: '' anything-else-9377))))) for value ")+(JSON.stringify(G9379))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          });
        returnValueminus9372 = actualFunminus9374.apply(this, arguments);
        while (recurP9375(returnValueminus9372))          {
          returnValueminus9372 = actualFunminus9374.apply(this, returnValueminus9372.args);
          };
        return returnValueminus9372;
        }),
      addDampingNextUpdate:(function ()        {
        var returnValueminus9388 = undefined;
        var recur = (function ()          {
          return {            
            recurSigil:"recurSigilminus9387",
            args:arguments
          };
          });
        var recurP9391 = (function (valminus9392)          {
          if ((("undefined")===((typeof valminus9392))))            {
            return false;
            };
          return (valminus9392.recurSigil===("recurSigilminus9387"));
          });
        var actualFunminus9390 = (function ()          {
          return (function (arguments)            {
            var G9394 = undefined;
            var G9395 = Array.prototype.slice.apply(arguments);
            G9394 = (function (arguments)              {
              var matchValminus9396 = G9395;
              if ((!((("object")===((typeof matchValminus9396))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              if ((!((matchValminus9396.length>=0))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var matchArraySimplePartminus9397 = Array.prototype.slice.call(matchValminus9396, 0, 0);
              if ((!((("object")===((typeof matchArraySimplePartminus9397))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              if ((!((0===matchArraySimplePartminus9397.length))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var matchArrayTailPartminus9398 = Array.prototype.slice.call(matchValminus9396, 0);
              var matchTempminus9399 = matchArrayTailPartminus9398[0];
              var previousMatchSucceededminus9400 = true;
              switch (1){
                              case 1:
                if ((("undefined")===((typeof matchTempminus9399))))                  {
                  previousMatchSucceededminus9400 = false;
                  };
                var by = matchTempminus9399;
                if (previousMatchSucceededminus9400)                  {
                  break;
                  };
                previousMatchSucceededminus9400 = true;
                case 1:
                var fResult9401 = ((function (x)                  {
                  return 0;
                  }))(matchTempminus9399);
                if ((fResult9401===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                  {
                  previousMatchSucceededminus9400 = false;
                  };
                var by = fResult9401;
                if (previousMatchSucceededminus9400)                  {
                  break;
                  };
                previousMatchSucceededminus9400 = true;
                default :
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                
              };
              ((moduleminus4745e9d952.undefinedPredicate(this.dFactors))?(this.dFactors = []) : (undefined));
              return this.dFactors.push(by);
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9394))))              {
              return G9394;
              };
            G9394 = (function (arguments)              {
              var matchValminus9402 = G9395;
              var anythingElseminus9393 = matchValminus9402;
              throw ((("Match fail in anonymous against: ")+anythingElseminus9393));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G9394))))              {
              return G9394;
              };
            throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: :- (opt by 0)] (if (undefined\? this\.d-factors) (set! this\.d-factors [:])) (this\.d-factors\.push by)) (anything-else-9393 (_throw (_+ ''Match fail in anonymous against: '' anything-else-9393))))) for value ")+(JSON.stringify(G9395))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          });
        returnValueminus9388 = actualFunminus9390.apply(this, arguments);
        while (recurP9391(returnValueminus9388))          {
          returnValueminus9388 = actualFunminus9390.apply(this, returnValueminus9388.args);
          };
        return returnValueminus9388;
        }),
      stationaryPredicate:stationaryPredicate
    });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus9178;
  }))