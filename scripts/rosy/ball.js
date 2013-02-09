define(["hooves/operator-functions", "hooves/lisp-idioms", "rosy/drawing", "rosy/utils", "hooves/hooves", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus6acd260b96, moduleC47fa390df, moduleminus4745e9d952, gamvas)  {
  var currentModuleminus76237 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus76237 = value;
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
          var arrayObject76307 = this.actor.gFactors;
          for (index in (arrayObject76307))            {
            var matchVar76308 = arrayObject76307[index];
            var element = matchVar76308;
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
          var arrayObject76323 = this.actor.dFactors;
          for (index in (arrayObject76323))            {
            var matchVar76324 = arrayObject76323[index];
            var element = matchVar76324;
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
          var arrayObject76344 = this.actor.forces;
          for (index in (arrayObject76344))            {
            var matchVar76345 = arrayObject76344[index];
            var forceDesc = matchVar76345;
            ;
            this.actor.body.ApplyForce.apply(this.actor.body, forceDesc);
            };
          ;
          this.actor.forces = undefined;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))) : (undefined));
        })
    });
    var ballCreate = (function ()      {
      var returnValueminus76347 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus76346",
          args:arguments
        };
        });
      var recurP76350 = (function (valminus76351)        {
        if ((("undefined")===((typeof valminus76351))))          {
          return false;
          };
        return (valminus76351.recurSigil===("recurSigilminus76346"));
        });
      var actualFunminus76349 = (function ()        {
        return (function (arguments)          {
          var G76353 = undefined;
          var G76354 = Array.prototype.slice.apply(arguments);
          G76353 = (function (arguments)            {
            var matchValminus76355 = G76354;
            if ((!((("object")===((typeof matchValminus76355))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus76355.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var name = matchValminus76355[0];
            var x = matchValminus76355[1];
            var y = matchValminus76355[2];
            return recur(name, x, y, gamvas.physics.DYNAMIC);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76353))))            {
            return G76353;
            };
          G76353 = (function (arguments)            {
            var matchValminus76356 = G76354;
            if ((!((("object")===((typeof matchValminus76356))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchValminus76356.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var name = matchValminus76356[0];
            var x = matchValminus76356[1];
            var y = matchValminus76356[2];
            var dynamicalCharacter = matchValminus76356[3];
            this._super(name, x, y);
            this.restitution = 0.4;
            this.pminus1 = [x, y];
            this.pminus2 = [moduleminus58c4bce870.plus(1, x), moduleminus58c4bce870.plus(1, y)];
            this.addState((new (ForceableState)("forceable")));
            this.setState("forceable");
            return this.bodyCircle(this.position.x, this.position.y, 10, dynamicalCharacter);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76353))))            {
            return G76353;
            };
          G76353 = (function (arguments)            {
            var matchValminus76357 = G76354;
            var anythingElseminus76352 = matchValminus76357;
            throw ((("Match fail in ball-create against: ")+anythingElseminus76352));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76353))))            {
            return G76353;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: name x y] (recur name x y gamvas\.physics\.DYNAMIC)) ([: name x y dynamical-character] (this\._super name x y) (set! this\.restitution 0.4) (set! this\.p-1 [: x y]) (set! this\.p-2 [: (+ 1 x) (+ 1 y)]) (this\.add-state (new Forceable-State :forceable)) (this\.set-state :forceable) (this\.body-circle this\.position\.x this\.position\.y 10 dynamical-character)) (anything-else-76352 (_throw (_+ ''Match fail in ball-create against: '' anything-else-76352))))) for value ")+(JSON.stringify(G76354))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus76347 = actualFunminus76349.apply(this, arguments);
      while (recurP76350(returnValueminus76347))        {
        returnValueminus76347 = actualFunminus76349.apply(this, returnValueminus76347.args);
        };
      return returnValueminus76347;
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
        var G76390 = undefined;
        var G76391 = [this.position.x, this.position.y, this.pminus1, this.pminus2];
        G76390 = (function (arguments)          {
          var matchValminus76392 = G76391;
          if ((!((("object")===((typeof matchValminus76392))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((4===matchValminus76392.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus76393 = matchValminus76392[0];
          var matchTempminus76394 = matchValminus76392[1];
          var matchTempminus76395 = matchValminus76392[2];
          var matchTempminus76396 = matchValminus76392[3];
          var x = matchTempminus76393;
          var y = matchTempminus76394;
          if ((!((("object")===((typeof matchTempminus76395))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((2===matchTempminus76395.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var xminus1 = matchTempminus76395[0];
          var yminus1 = matchTempminus76395[1];
          if ((!((("object")===((typeof matchTempminus76396))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((2===matchTempminus76396.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var xminus2 = matchTempminus76396[0];
          var yminus2 = matchTempminus76396[1];
          return ((moduleminus58c4bce870.TripleEqualminus(x, xminus1))&&(((moduleminus58c4bce870.TripleEqualminus(xminus1, xminus2))&&(((moduleminus58c4bce870.TripleEqualminus(y, yminus1))&&(moduleminus58c4bce870.TripleEqualminus(yminus1, yminus2)))))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76390))))          {
          return G76390;
          };
        G76390 = (function (arguments)          {
          var matchValminus76417 = G76391;
          var G76389 = matchValminus76417;
          throw ((("Match error in ")+("(let ((x this\.position\.x) (y this\.position\.y) ([: x-1 y-1] this\.p-1) ([: x-2 y-2] this\.p-2)) (&& (=== x x-1) (=== x-1 x-2) (=== y y-1) (=== y-1 y-2)))")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76390))))          {
          return G76390;
          };
        throw ((("match-fail at ((match [: this\.position\.x this\.position\.y this\.p-1 this\.p-2] ([: x y [: x-1 y-1] [: x-2 y-2]] (&& (=== x x-1) (=== x-1 x-2) (=== y y-1) (=== y-1 y-2))) (G76389 (_throw (_+ ''Match error in '' ''(let ((x this\\.position\\.x) (y this\\.position\\.y) ([: x-1 y-1] this\\.p-1) ([: x-2 y-2] this\\.p-2)) (&& (=== x x-1) (=== x-1 x-2) (=== y y-1) (=== y-1 y-2)))''))))) for value ")+(JSON.stringify(G76391))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    currentModuleminus76237.Ball = gamvas.Actor.extend({      
      create:ballCreate,
      draw:ballDraw,
      addForce:(function (f, a)        {
        ((moduleminus4745e9d952.undefinedPredicate(this.forces))?(this.forces = []) : (undefined));
        return this.forces.push([f, a]);
        }),
      cancelGravityNextUpdate:(function ()        {
        var returnValueminus76431 = undefined;
        var recur = (function ()          {
          return {            
            recurSigil:"recurSigilminus76430",
            args:arguments
          };
          });
        var recurP76434 = (function (valminus76435)          {
          if ((("undefined")===((typeof valminus76435))))            {
            return false;
            };
          return (valminus76435.recurSigil===("recurSigilminus76430"));
          });
        var actualFunminus76433 = (function ()          {
          return (function (arguments)            {
            var G76437 = undefined;
            var G76438 = Array.prototype.slice.apply(arguments);
            G76437 = (function (arguments)              {
              var matchValminus76439 = G76438;
              if ((!((("object")===((typeof matchValminus76439))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              if ((!((matchValminus76439.length>=0))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var matchArraySimplePartminus76440 = Array.prototype.slice.call(matchValminus76439, 0, 0);
              if ((!((("object")===((typeof matchArraySimplePartminus76440))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              if ((!((0===matchArraySimplePartminus76440.length))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var matchArrayTailPartminus76441 = Array.prototype.slice.call(matchValminus76439, 0);
              var matchTempminus76442 = matchArrayTailPartminus76441[0];
              var previousMatchSucceededminus76443 = true;
              switch (1){
                              case 1:
                if ((("undefined")===((typeof matchTempminus76442))))                  {
                  previousMatchSucceededminus76443 = false;
                  };
                var by = matchTempminus76442;
                if (previousMatchSucceededminus76443)                  {
                  break;
                  };
                previousMatchSucceededminus76443 = true;
                case 1:
                var fResult76444 = ((function (x)                  {
                  return 0;
                  }))(matchTempminus76442);
                if ((fResult76444===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                  {
                  previousMatchSucceededminus76443 = false;
                  };
                var by = fResult76444;
                if (previousMatchSucceededminus76443)                  {
                  break;
                  };
                previousMatchSucceededminus76443 = true;
                default :
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                
              };
              ((moduleminus4745e9d952.undefinedPredicate(this.gFactors))?(this.gFactors = []) : (undefined));
              return this.gFactors.push(by);
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76437))))              {
              return G76437;
              };
            G76437 = (function (arguments)              {
              var matchValminus76445 = G76438;
              var anythingElseminus76436 = matchValminus76445;
              throw ((("Match fail in anonymous against: ")+anythingElseminus76436));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76437))))              {
              return G76437;
              };
            throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: :- (opt by 0)] (if (undefined\? this\.g-factors) (set! this\.g-factors [:])) (this\.g-factors\.push by)) (anything-else-76436 (_throw (_+ ''Match fail in anonymous against: '' anything-else-76436))))) for value ")+(JSON.stringify(G76438))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          });
        returnValueminus76431 = actualFunminus76433.apply(this, arguments);
        while (recurP76434(returnValueminus76431))          {
          returnValueminus76431 = actualFunminus76433.apply(this, returnValueminus76431.args);
          };
        return returnValueminus76431;
        }),
      addDampingNextUpdate:(function ()        {
        var returnValueminus76447 = undefined;
        var recur = (function ()          {
          return {            
            recurSigil:"recurSigilminus76446",
            args:arguments
          };
          });
        var recurP76450 = (function (valminus76451)          {
          if ((("undefined")===((typeof valminus76451))))            {
            return false;
            };
          return (valminus76451.recurSigil===("recurSigilminus76446"));
          });
        var actualFunminus76449 = (function ()          {
          return (function (arguments)            {
            var G76453 = undefined;
            var G76454 = Array.prototype.slice.apply(arguments);
            G76453 = (function (arguments)              {
              var matchValminus76455 = G76454;
              if ((!((("object")===((typeof matchValminus76455))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              if ((!((matchValminus76455.length>=0))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var matchArraySimplePartminus76456 = Array.prototype.slice.call(matchValminus76455, 0, 0);
              if ((!((("object")===((typeof matchArraySimplePartminus76456))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              if ((!((0===matchArraySimplePartminus76456.length))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var matchArrayTailPartminus76457 = Array.prototype.slice.call(matchValminus76455, 0);
              var matchTempminus76458 = matchArrayTailPartminus76457[0];
              var previousMatchSucceededminus76459 = true;
              switch (1){
                              case 1:
                if ((("undefined")===((typeof matchTempminus76458))))                  {
                  previousMatchSucceededminus76459 = false;
                  };
                var by = matchTempminus76458;
                if (previousMatchSucceededminus76459)                  {
                  break;
                  };
                previousMatchSucceededminus76459 = true;
                case 1:
                var fResult76460 = ((function (x)                  {
                  return 0;
                  }))(matchTempminus76458);
                if ((fResult76460===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                  {
                  previousMatchSucceededminus76459 = false;
                  };
                var by = fResult76460;
                if (previousMatchSucceededminus76459)                  {
                  break;
                  };
                previousMatchSucceededminus76459 = true;
                default :
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                
              };
              ((moduleminus4745e9d952.undefinedPredicate(this.dFactors))?(this.dFactors = []) : (undefined));
              return this.dFactors.push(by);
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76453))))              {
              return G76453;
              };
            G76453 = (function (arguments)              {
              var matchValminus76461 = G76454;
              var anythingElseminus76452 = matchValminus76461;
              throw ((("Match fail in anonymous against: ")+anythingElseminus76452));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G76453))))              {
              return G76453;
              };
            throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: :- (opt by 0)] (if (undefined\? this\.d-factors) (set! this\.d-factors [:])) (this\.d-factors\.push by)) (anything-else-76452 (_throw (_+ ''Match fail in anonymous against: '' anything-else-76452))))) for value ")+(JSON.stringify(G76454))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          });
        returnValueminus76447 = actualFunminus76449.apply(this, arguments);
        while (recurP76450(returnValueminus76447))          {
          returnValueminus76447 = actualFunminus76449.apply(this, returnValueminus76447.args);
          };
        return returnValueminus76447;
        }),
      stationaryPredicate:stationaryPredicate
    });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus76237;
  }))