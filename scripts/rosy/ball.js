define(["hooves/operator-functions", "hooves/lisp-idioms", "rosy/drawing", "rosy/utils", "hooves/hooves", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus6acd260b96, moduleC47fa390df, moduleminus4745e9d952, gamvas)  {
  var currentModuleminus295124 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus295124 = value;
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
          var arrayObject295194 = this.actor.gFactors;
          for (index in (arrayObject295194))            {
            var matchVar295195 = arrayObject295194[index];
            var element = matchVar295195;
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
          var arrayObject295210 = this.actor.dFactors;
          for (index in (arrayObject295210))            {
            var matchVar295211 = arrayObject295210[index];
            var element = matchVar295211;
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
          var arrayObject295231 = this.actor.forces;
          for (index in (arrayObject295231))            {
            var matchVar295232 = arrayObject295231[index];
            var forceDesc = matchVar295232;
            ;
            this.actor.body.ApplyForce.apply(this.actor.body, forceDesc);
            };
          ;
          this.actor.forces = undefined;
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)))) : (undefined));
        })
    });
    var ballCreate = (function ()      {
      var returnValueminus295234 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus295233",
          args:arguments
        };
        });
      var recurP295237 = (function (valminus295238)        {
        if ((("undefined")===((typeof valminus295238))))          {
          return false;
          };
        return (valminus295238.recurSigil===("recurSigilminus295233"));
        });
      var actualFunminus295236 = (function ()        {
        return (function (arguments)          {
          var G295240 = undefined;
          var G295241 = Array.prototype.slice.apply(arguments);
          G295240 = (function (arguments)            {
            var matchValminus295242 = G295241;
            if ((!((("object")===((typeof matchValminus295242))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus295242.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var name = matchValminus295242[0];
            var x = matchValminus295242[1];
            var y = matchValminus295242[2];
            return recur(name, x, y, gamvas.physics.DYNAMIC);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G295240))))            {
            return G295240;
            };
          G295240 = (function (arguments)            {
            var matchValminus295243 = G295241;
            if ((!((("object")===((typeof matchValminus295243))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchValminus295243.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var name = matchValminus295243[0];
            var x = matchValminus295243[1];
            var y = matchValminus295243[2];
            var dynamicalCharacter = matchValminus295243[3];
            this._super(name, x, y);
            this.restitution = 0.4;
            this.pminus1 = [x, y];
            this.pminus2 = [moduleminus58c4bce870.plus(1, x), moduleminus58c4bce870.plus(1, y)];
            this.addState((new (ForceableState)("forceable")));
            this.setState("forceable");
            return this.bodyCircle(this.position.x, this.position.y, 10, dynamicalCharacter);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G295240))))            {
            return G295240;
            };
          G295240 = (function (arguments)            {
            var matchValminus295244 = G295241;
            var anythingElseminus295239 = matchValminus295244;
            throw ((("Match fail in ball-create against: ")+anythingElseminus295239));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G295240))))            {
            return G295240;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: name x y] (recur name x y gamvas\.physics\.DYNAMIC)) ([: name x y dynamical-character] (this\._super name x y) (set! this\.restitution 0.4) (set! this\.p-1 [: x y]) (set! this\.p-2 [: (+ 1 x) (+ 1 y)]) (this\.add-state (new Forceable-State :forceable)) (this\.set-state :forceable) (this\.body-circle this\.position\.x this\.position\.y 10 dynamical-character)) (anything-else-295239 (_throw (_+ ''Match fail in ball-create against: '' anything-else-295239))))) for value ")+(JSON.stringify(G295241))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus295234 = actualFunminus295236.apply(this, arguments);
      while (recurP295237(returnValueminus295234))        {
        returnValueminus295234 = actualFunminus295236.apply(this, returnValueminus295234.args);
        };
      return returnValueminus295234;
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
        var G295277 = undefined;
        var G295278 = [this.position.x, this.position.y, this.pminus1, this.pminus2];
        G295277 = (function (arguments)          {
          var matchValminus295279 = G295278;
          if ((!((("object")===((typeof matchValminus295279))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((4===matchValminus295279.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus295280 = matchValminus295279[0];
          var matchTempminus295281 = matchValminus295279[1];
          var matchTempminus295282 = matchValminus295279[2];
          var matchTempminus295283 = matchValminus295279[3];
          var x = matchTempminus295280;
          var y = matchTempminus295281;
          if ((!((("object")===((typeof matchTempminus295282))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((2===matchTempminus295282.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var xminus1 = matchTempminus295282[0];
          var yminus1 = matchTempminus295282[1];
          if ((!((("object")===((typeof matchTempminus295283))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((2===matchTempminus295283.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var xminus2 = matchTempminus295283[0];
          var yminus2 = matchTempminus295283[1];
          return ((moduleminus58c4bce870.TripleEqualminus(x, xminus1))&&(((moduleminus58c4bce870.TripleEqualminus(xminus1, xminus2))&&(((moduleminus58c4bce870.TripleEqualminus(y, yminus1))&&(moduleminus58c4bce870.TripleEqualminus(yminus1, yminus2)))))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G295277))))          {
          return G295277;
          };
        G295277 = (function (arguments)          {
          var matchValminus295304 = G295278;
          var G295276 = matchValminus295304;
          throw ((("Match error in ")+("(let ((x this\.position\.x) (y this\.position\.y) ([: x-1 y-1] this\.p-1) ([: x-2 y-2] this\.p-2)) (&& (=== x x-1) (=== x-1 x-2) (=== y y-1) (=== y-1 y-2)))")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G295277))))          {
          return G295277;
          };
        throw ((("match-fail at ((match [: this\.position\.x this\.position\.y this\.p-1 this\.p-2] ([: x y [: x-1 y-1] [: x-2 y-2]] (&& (=== x x-1) (=== x-1 x-2) (=== y y-1) (=== y-1 y-2))) (G295276 (_throw (_+ ''Match error in '' ''(let ((x this\\.position\\.x) (y this\\.position\\.y) ([: x-1 y-1] this\\.p-1) ([: x-2 y-2] this\\.p-2)) (&& (=== x x-1) (=== x-1 x-2) (=== y y-1) (=== y-1 y-2)))''))))) for value ")+(JSON.stringify(G295278))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    currentModuleminus295124.Ball = gamvas.Actor.extend({      
      create:ballCreate,
      draw:ballDraw,
      addForce:(function (f, a)        {
        ((moduleminus4745e9d952.undefinedPredicate(this.forces))?(this.forces = []) : (undefined));
        return this.forces.push([f, a]);
        }),
      cancelGravityNextUpdate:(function ()        {
        var returnValueminus295318 = undefined;
        var recur = (function ()          {
          return {            
            recurSigil:"recurSigilminus295317",
            args:arguments
          };
          });
        var recurP295321 = (function (valminus295322)          {
          if ((("undefined")===((typeof valminus295322))))            {
            return false;
            };
          return (valminus295322.recurSigil===("recurSigilminus295317"));
          });
        var actualFunminus295320 = (function ()          {
          return (function (arguments)            {
            var G295324 = undefined;
            var G295325 = Array.prototype.slice.apply(arguments);
            G295324 = (function (arguments)              {
              var matchValminus295326 = G295325;
              if ((!((("object")===((typeof matchValminus295326))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              if ((!((matchValminus295326.length>=0))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var matchArraySimplePartminus295327 = Array.prototype.slice.call(matchValminus295326, 0, 0);
              if ((!((("object")===((typeof matchArraySimplePartminus295327))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              if ((!((0===matchArraySimplePartminus295327.length))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var matchArrayTailPartminus295328 = Array.prototype.slice.call(matchValminus295326, 0);
              var matchTempminus295329 = matchArrayTailPartminus295328[0];
              var previousMatchSucceededminus295330 = true;
              switch (1){
                              case 1:
                if ((("undefined")===((typeof matchTempminus295329))))                  {
                  previousMatchSucceededminus295330 = false;
                  };
                var by = matchTempminus295329;
                if (previousMatchSucceededminus295330)                  {
                  break;
                  };
                previousMatchSucceededminus295330 = true;
                case 1:
                var fResult295331 = ((function (x)                  {
                  return 0;
                  }))(matchTempminus295329);
                if ((fResult295331===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                  {
                  previousMatchSucceededminus295330 = false;
                  };
                var by = fResult295331;
                if (previousMatchSucceededminus295330)                  {
                  break;
                  };
                previousMatchSucceededminus295330 = true;
                default :
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                
              };
              ((moduleminus4745e9d952.undefinedPredicate(this.gFactors))?(this.gFactors = []) : (undefined));
              return this.gFactors.push(by);
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G295324))))              {
              return G295324;
              };
            G295324 = (function (arguments)              {
              var matchValminus295332 = G295325;
              var anythingElseminus295323 = matchValminus295332;
              throw ((("Match fail in anonymous against: ")+anythingElseminus295323));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G295324))))              {
              return G295324;
              };
            throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: :- (opt by 0)] (if (undefined\? this\.g-factors) (set! this\.g-factors [:])) (this\.g-factors\.push by)) (anything-else-295323 (_throw (_+ ''Match fail in anonymous against: '' anything-else-295323))))) for value ")+(JSON.stringify(G295325))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          });
        returnValueminus295318 = actualFunminus295320.apply(this, arguments);
        while (recurP295321(returnValueminus295318))          {
          returnValueminus295318 = actualFunminus295320.apply(this, returnValueminus295318.args);
          };
        return returnValueminus295318;
        }),
      addDampingNextUpdate:(function ()        {
        var returnValueminus295334 = undefined;
        var recur = (function ()          {
          return {            
            recurSigil:"recurSigilminus295333",
            args:arguments
          };
          });
        var recurP295337 = (function (valminus295338)          {
          if ((("undefined")===((typeof valminus295338))))            {
            return false;
            };
          return (valminus295338.recurSigil===("recurSigilminus295333"));
          });
        var actualFunminus295336 = (function ()          {
          return (function (arguments)            {
            var G295340 = undefined;
            var G295341 = Array.prototype.slice.apply(arguments);
            G295340 = (function (arguments)              {
              var matchValminus295342 = G295341;
              if ((!((("object")===((typeof matchValminus295342))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              if ((!((matchValminus295342.length>=0))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var matchArraySimplePartminus295343 = Array.prototype.slice.call(matchValminus295342, 0, 0);
              if ((!((("object")===((typeof matchArraySimplePartminus295343))))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              if ((!((0===matchArraySimplePartminus295343.length))))                {
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                };
              var matchArrayTailPartminus295344 = Array.prototype.slice.call(matchValminus295342, 0);
              var matchTempminus295345 = matchArrayTailPartminus295344[0];
              var previousMatchSucceededminus295346 = true;
              switch (1){
                              case 1:
                if ((("undefined")===((typeof matchTempminus295345))))                  {
                  previousMatchSucceededminus295346 = false;
                  };
                var by = matchTempminus295345;
                if (previousMatchSucceededminus295346)                  {
                  break;
                  };
                previousMatchSucceededminus295346 = true;
                case 1:
                var fResult295347 = ((function (x)                  {
                  return 0;
                  }))(matchTempminus295345);
                if ((fResult295347===("match-fail-e1aa3b7e7ce9731266013c178de842b5")))                  {
                  previousMatchSucceededminus295346 = false;
                  };
                var by = fResult295347;
                if (previousMatchSucceededminus295346)                  {
                  break;
                  };
                previousMatchSucceededminus295346 = true;
                default :
                return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
                
              };
              ((moduleminus4745e9d952.undefinedPredicate(this.dFactors))?(this.dFactors = []) : (undefined));
              return this.dFactors.push(by);
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G295340))))              {
              return G295340;
              };
            G295340 = (function (arguments)              {
              var matchValminus295348 = G295341;
              var anythingElseminus295339 = matchValminus295348;
              throw ((("Match fail in anonymous against: ")+anythingElseminus295339));
              }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
            if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G295340))))              {
              return G295340;
              };
            throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: :- (opt by 0)] (if (undefined\? this\.d-factors) (set! this\.d-factors [:])) (this\.d-factors\.push by)) (anything-else-295339 (_throw (_+ ''Match fail in anonymous against: '' anything-else-295339))))) for value ")+(JSON.stringify(G295341))));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          });
        returnValueminus295334 = actualFunminus295336.apply(this, arguments);
        while (recurP295337(returnValueminus295334))          {
          returnValueminus295334 = actualFunminus295336.apply(this, returnValueminus295334.args);
          };
        return returnValueminus295334;
        }),
      stationaryPredicate:stationaryPredicate
    });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus295124;
  }))