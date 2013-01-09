define(["hooves/operator-functions", "hooves/lisp-idioms", "rosy/drawing", "rosy/utils", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus6acd260b96, moduleC47fa390df, gamvas)  {
  var currentModuleminus44768 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus44768 = value;
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
      var returnValueminus44772 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus44771",
          args:arguments
        };
        });
      var recurP44775 = (function (valminus44776)        {
        if ((("undefined")===((typeof valminus44776))))          {
          return false;
          };
        return (valminus44776.recurSigil===("recurSigilminus44771"));
        });
      var actualFunminus44774 = (function ()        {
        return (function (arguments)          {
          var G44778 = undefined;
          var G44779 = Array.prototype.slice.apply(arguments);
          G44778 = (function (arguments)            {
            var matchValminus44780 = G44779;
            if ((!((3===matchValminus44780.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var name = matchValminus44780[0];
            var x = matchValminus44780[1];
            var y = matchValminus44780[2];
            return recur(name, x, y, gamvas.physics.DYNAMIC);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44778))))            {
            return G44778;
            };
          G44778 = (function (arguments)            {
            var matchValminus44781 = G44779;
            if ((!((4===matchValminus44781.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var name = matchValminus44781[0];
            var x = matchValminus44781[1];
            var y = matchValminus44781[2];
            var dynamicalCharacter = matchValminus44781[3];
            this._super(name, x, y);
            this.restitution = 0.4;
            this.pminus1 = [x, y];
            this.pminus2 = [moduleminus58c4bce870.plus(1, x), moduleminus58c4bce870.plus(1, y)];
            return this.bodyCircle(this.position.x, this.position.y, 10, dynamicalCharacter);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44778))))            {
            return G44778;
            };
          G44778 = (function (arguments)            {
            var matchValminus44782 = G44779;
            var anythingElseminus44777 = matchValminus44782;
            throw ((("Match fail in ball-create against: ")+anythingElseminus44777));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44778))))            {
            return G44778;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: name x y] (recur name x y gamvas\.physics\.DYNAMIC)) ([: name x y dynamical-character] (this\._super name x y) (set! this\.restitution 0.4) (set! this\.p-1 [: x y]) (set! this\.p-2 [: (+ 1 x) (+ 1 y)]) (this\.body-circle this\.position\.x this\.position\.y 10 dynamical-character)) (anything-else-44777 (_throw (_+ ''Match fail in ball-create against: '' anything-else-44777))))) for value ")+(JSON.stringify(G44779))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus44772 = actualFunminus44774.apply(this, arguments);
      while (recurP44775(returnValueminus44772))        {
        returnValueminus44772 = actualFunminus44774.apply(this, returnValueminus44772.args);
        };
      return returnValueminus44772;
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
        var G44815 = undefined;
        var G44816 = [this.position.x, this.position.y, this.pminus1, this.pminus2];
        G44815 = (function (arguments)          {
          var matchValminus44817 = G44816;
          if ((!((4===matchValminus44817.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus44818 = matchValminus44817[0];
          var matchTempminus44819 = matchValminus44817[1];
          var matchTempminus44820 = matchValminus44817[2];
          var matchTempminus44821 = matchValminus44817[3];
          var x = matchTempminus44818;
          var y = matchTempminus44819;
          if ((!((2===matchTempminus44820.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var xminus1 = matchTempminus44820[0];
          var yminus1 = matchTempminus44820[1];
          if ((!((2===matchTempminus44821.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var xminus2 = matchTempminus44821[0];
          var yminus2 = matchTempminus44821[1];
          return ((moduleminus58c4bce870.TripleEqualminus(x, xminus1))&&(((moduleminus58c4bce870.TripleEqualminus(xminus1, xminus2))&&(((moduleminus58c4bce870.TripleEqualminus(y, yminus1))&&(moduleminus58c4bce870.TripleEqualminus(yminus1, yminus2)))))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44815))))          {
          return G44815;
          };
        G44815 = (function (arguments)          {
          var matchValminus44842 = G44816;
          var G44814 = matchValminus44842;
          throw ((("Match error in ")+("(let ((x this\.position\.x) (y this\.position\.y) ([: x-1 y-1] this\.p-1) ([: x-2 y-2] this\.p-2)) (&& (=== x x-1) (=== x-1 x-2) (=== y y-1) (=== y-1 y-2)))")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G44815))))          {
          return G44815;
          };
        throw ((("match-fail at ((match [: this\.position\.x this\.position\.y this\.p-1 this\.p-2] ([: x y [: x-1 y-1] [: x-2 y-2]] (&& (=== x x-1) (=== x-1 x-2) (=== y y-1) (=== y-1 y-2))) (G44814 (_throw (_+ ''Match error in '' ''(let ((x this\\.position\\.x) (y this\\.position\\.y) ([: x-1 y-1] this\\.p-1) ([: x-2 y-2] this\\.p-2)) (&& (=== x x-1) (=== x-1 x-2) (=== y y-1) (=== y-1 y-2)))''))))) for value ")+(JSON.stringify(G44816))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    currentModuleminus44768.Ball = gamvas.Actor.extend({      
      create:ballCreate,
      draw:ballDraw,
      stationaryPredicate:stationaryPredicate
    });
    }))();
  return currentModuleminus44768;
  }))