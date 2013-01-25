define(["hooves/operator-functions", "hooves/lisp-idioms", "rosy/drawing", "rosy/utils", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus6acd260b96, moduleC47fa390df, gamvas)  {
  var currentModuleminus69722 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus69722 = value;
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
        console.log("In do collide.");
        return true;
        }),
      onCollision:(function (a, ni, ti, c)        {
        return console.log("Wall hit.");
        }),
      onCollisionEnter:(function (a)        {
        return console.log("Wall hit.", a);
        })
    });
    var ballCreate = (function ()      {
      var returnValueminus69726 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus69725",
          args:arguments
        };
        });
      var recurP69729 = (function (valminus69730)        {
        if ((("undefined")===((typeof valminus69730))))          {
          return false;
          };
        return (valminus69730.recurSigil===("recurSigilminus69725"));
        });
      var actualFunminus69728 = (function ()        {
        return (function (arguments)          {
          var G69732 = undefined;
          var G69733 = Array.prototype.slice.apply(arguments);
          G69732 = (function (arguments)            {
            var matchValminus69734 = G69733;
            if ((!((("object")===((typeof matchValminus69734))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((3===matchValminus69734.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var name = matchValminus69734[0];
            var x = matchValminus69734[1];
            var y = matchValminus69734[2];
            return recur(name, x, y, gamvas.physics.DYNAMIC);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69732))))            {
            return G69732;
            };
          G69732 = (function (arguments)            {
            var matchValminus69735 = G69733;
            if ((!((("object")===((typeof matchValminus69735))))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            if ((!((4===matchValminus69735.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var name = matchValminus69735[0];
            var x = matchValminus69735[1];
            var y = matchValminus69735[2];
            var dynamicalCharacter = matchValminus69735[3];
            this._super(name, x, y);
            this.restitution = 0.4;
            this.pminus1 = [x, y];
            this.pminus2 = [moduleminus58c4bce870.plus(1, x), moduleminus58c4bce870.plus(1, y)];
            return this.bodyCircle(this.position.x, this.position.y, 10, dynamicalCharacter);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69732))))            {
            return G69732;
            };
          G69732 = (function (arguments)            {
            var matchValminus69736 = G69733;
            var anythingElseminus69731 = matchValminus69736;
            throw ((("Match fail in ball-create against: ")+anythingElseminus69731));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69732))))            {
            return G69732;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: name x y] (recur name x y gamvas\.physics\.DYNAMIC)) ([: name x y dynamical-character] (this\._super name x y) (set! this\.restitution 0.4) (set! this\.p-1 [: x y]) (set! this\.p-2 [: (+ 1 x) (+ 1 y)]) (this\.body-circle this\.position\.x this\.position\.y 10 dynamical-character)) (anything-else-69731 (_throw (_+ ''Match fail in ball-create against: '' anything-else-69731))))) for value ")+(JSON.stringify(G69733))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus69726 = actualFunminus69728.apply(this, arguments);
      while (recurP69729(returnValueminus69726))        {
        returnValueminus69726 = actualFunminus69728.apply(this, returnValueminus69726.args);
        };
      return returnValueminus69726;
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
        var G69769 = undefined;
        var G69770 = [this.position.x, this.position.y, this.pminus1, this.pminus2];
        G69769 = (function (arguments)          {
          var matchValminus69771 = G69770;
          if ((!((("object")===((typeof matchValminus69771))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((4===matchValminus69771.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus69772 = matchValminus69771[0];
          var matchTempminus69773 = matchValminus69771[1];
          var matchTempminus69774 = matchValminus69771[2];
          var matchTempminus69775 = matchValminus69771[3];
          var x = matchTempminus69772;
          var y = matchTempminus69773;
          if ((!((("object")===((typeof matchTempminus69774))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((2===matchTempminus69774.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var xminus1 = matchTempminus69774[0];
          var yminus1 = matchTempminus69774[1];
          if ((!((("object")===((typeof matchTempminus69775))))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          if ((!((2===matchTempminus69775.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var xminus2 = matchTempminus69775[0];
          var yminus2 = matchTempminus69775[1];
          return ((moduleminus58c4bce870.TripleEqualminus(x, xminus1))&&(((moduleminus58c4bce870.TripleEqualminus(xminus1, xminus2))&&(((moduleminus58c4bce870.TripleEqualminus(y, yminus1))&&(moduleminus58c4bce870.TripleEqualminus(yminus1, yminus2)))))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69769))))          {
          return G69769;
          };
        G69769 = (function (arguments)          {
          var matchValminus69796 = G69770;
          var G69768 = matchValminus69796;
          throw ((("Match error in ")+("(let ((x this\.position\.x) (y this\.position\.y) ([: x-1 y-1] this\.p-1) ([: x-2 y-2] this\.p-2)) (&& (=== x x-1) (=== x-1 x-2) (=== y y-1) (=== y-1 y-2)))")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G69769))))          {
          return G69769;
          };
        throw ((("match-fail at ((match [: this\.position\.x this\.position\.y this\.p-1 this\.p-2] ([: x y [: x-1 y-1] [: x-2 y-2]] (&& (=== x x-1) (=== x-1 x-2) (=== y y-1) (=== y-1 y-2))) (G69768 (_throw (_+ ''Match error in '' ''(let ((x this\\.position\\.x) (y this\\.position\\.y) ([: x-1 y-1] this\\.p-1) ([: x-2 y-2] this\\.p-2)) (&& (=== x x-1) (=== x-1 x-2) (=== y y-1) (=== y-1 y-2)))''))))) for value ")+(JSON.stringify(G69770))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    currentModuleminus69722.Ball = gamvas.Actor.extend({      
      create:ballCreate,
      draw:ballDraw,
      stationaryPredicate:stationaryPredicate
    });
    }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
  return currentModuleminus69722;
  }))