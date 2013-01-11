define(["hooves/operator-functions", "hooves/lisp-idioms", "rosy/drawing", "rosy/utils", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus6acd260b96, moduleC47fa390df, gamvas)  {
  var currentModuleminus56332 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus56332 = value;
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
    var ballCreate = (function ()      {
      var returnValueminus56336 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus56335",
          args:arguments
        };
        });
      var recurP56339 = (function (valminus56340)        {
        if ((("undefined")===((typeof valminus56340))))          {
          return false;
          };
        return (valminus56340.recurSigil===("recurSigilminus56335"));
        });
      var actualFunminus56338 = (function ()        {
        return (function (arguments)          {
          var G56342 = undefined;
          var G56343 = Array.prototype.slice.apply(arguments);
          G56342 = (function (arguments)            {
            var matchValminus56344 = G56343;
            if ((!((3===matchValminus56344.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var name = matchValminus56344[0];
            var x = matchValminus56344[1];
            var y = matchValminus56344[2];
            return recur(name, x, y, gamvas.physics.DYNAMIC);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G56342))))            {
            return G56342;
            };
          G56342 = (function (arguments)            {
            var matchValminus56345 = G56343;
            if ((!((4===matchValminus56345.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var name = matchValminus56345[0];
            var x = matchValminus56345[1];
            var y = matchValminus56345[2];
            var dynamicalCharacter = matchValminus56345[3];
            this._super(name, x, y);
            this.restitution = 0.4;
            this.pminus1 = [x, y];
            this.pminus2 = [moduleminus58c4bce870.plus(1, x), moduleminus58c4bce870.plus(1, y)];
            return this.bodyCircle(this.position.x, this.position.y, 10, dynamicalCharacter);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G56342))))            {
            return G56342;
            };
          G56342 = (function (arguments)            {
            var matchValminus56346 = G56343;
            var anythingElseminus56341 = matchValminus56346;
            throw ((("Match fail in ball-create against: ")+anythingElseminus56341));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G56342))))            {
            return G56342;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: name x y] (recur name x y gamvas\.physics\.DYNAMIC)) ([: name x y dynamical-character] (this\._super name x y) (set! this\.restitution 0.4) (set! this\.p-1 [: x y]) (set! this\.p-2 [: (+ 1 x) (+ 1 y)]) (this\.body-circle this\.position\.x this\.position\.y 10 dynamical-character)) (anything-else-56341 (_throw (_+ ''Match fail in ball-create against: '' anything-else-56341))))) for value ")+(JSON.stringify(G56343))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus56336 = actualFunminus56338.apply(this, arguments);
      while (recurP56339(returnValueminus56336))        {
        returnValueminus56336 = actualFunminus56338.apply(this, returnValueminus56336.args);
        };
      return returnValueminus56336;
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
        var G56379 = undefined;
        var G56380 = [this.position.x, this.position.y, this.pminus1, this.pminus2];
        G56379 = (function (arguments)          {
          var matchValminus56381 = G56380;
          if ((!((4===matchValminus56381.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus56382 = matchValminus56381[0];
          var matchTempminus56383 = matchValminus56381[1];
          var matchTempminus56384 = matchValminus56381[2];
          var matchTempminus56385 = matchValminus56381[3];
          var x = matchTempminus56382;
          var y = matchTempminus56383;
          if ((!((2===matchTempminus56384.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var xminus1 = matchTempminus56384[0];
          var yminus1 = matchTempminus56384[1];
          if ((!((2===matchTempminus56385.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var xminus2 = matchTempminus56385[0];
          var yminus2 = matchTempminus56385[1];
          return ((moduleminus58c4bce870.TripleEqualminus(x, xminus1))&&(((moduleminus58c4bce870.TripleEqualminus(xminus1, xminus2))&&(((moduleminus58c4bce870.TripleEqualminus(y, yminus1))&&(moduleminus58c4bce870.TripleEqualminus(yminus1, yminus2)))))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G56379))))          {
          return G56379;
          };
        G56379 = (function (arguments)          {
          var matchValminus56406 = G56380;
          var G56378 = matchValminus56406;
          throw ((("Match error in ")+("(let ((x this\.position\.x) (y this\.position\.y) ([: x-1 y-1] this\.p-1) ([: x-2 y-2] this\.p-2)) (&& (=== x x-1) (=== x-1 x-2) (=== y y-1) (=== y-1 y-2)))")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G56379))))          {
          return G56379;
          };
        throw ((("match-fail at ((match [: this\.position\.x this\.position\.y this\.p-1 this\.p-2] ([: x y [: x-1 y-1] [: x-2 y-2]] (&& (=== x x-1) (=== x-1 x-2) (=== y y-1) (=== y-1 y-2))) (G56378 (_throw (_+ ''Match error in '' ''(let ((x this\\.position\\.x) (y this\\.position\\.y) ([: x-1 y-1] this\\.p-1) ([: x-2 y-2] this\\.p-2)) (&& (=== x x-1) (=== x-1 x-2) (=== y y-1) (=== y-1 y-2)))''))))) for value ")+(JSON.stringify(G56380))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    currentModuleminus56332.Ball = gamvas.Actor.extend({      
      create:ballCreate,
      draw:ballDraw,
      stationaryPredicate:stationaryPredicate
    });
    }))();
  return currentModuleminus56332;
  }))