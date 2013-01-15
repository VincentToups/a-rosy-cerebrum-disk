define(["hooves/operator-functions", "hooves/lisp-idioms", "rosy/drawing", "rosy/utils", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, moduleminus6acd260b96, moduleC47fa390df, gamvas)  {
  var currentModuleminus25990 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus25990 = value;
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
      onCollisionEnter:(function (a)        {
        console.log("Wall hit.", a);
        return // (match a ((instance Wall wall) (set! wall\.focused true)) (otherwise undefined))
        ;
        })
    });
    var ballCreate = (function ()      {
      var returnValueminus25994 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus25993",
          args:arguments
        };
        });
      var recurP25997 = (function (valminus25998)        {
        if ((("undefined")===((typeof valminus25998))))          {
          return false;
          };
        return (valminus25998.recurSigil===("recurSigilminus25993"));
        });
      var actualFunminus25996 = (function ()        {
        return (function (arguments)          {
          var G26000 = undefined;
          var G26001 = Array.prototype.slice.apply(arguments);
          G26000 = (function (arguments)            {
            var matchValminus26002 = G26001;
            if ((!((3===matchValminus26002.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var name = matchValminus26002[0];
            var x = matchValminus26002[1];
            var y = matchValminus26002[2];
            return recur(name, x, y, gamvas.physics.DYNAMIC);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26000))))            {
            return G26000;
            };
          G26000 = (function (arguments)            {
            var matchValminus26003 = G26001;
            if ((!((4===matchValminus26003.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var name = matchValminus26003[0];
            var x = matchValminus26003[1];
            var y = matchValminus26003[2];
            var dynamicalCharacter = matchValminus26003[3];
            this._super(name, x, y);
            this.restitution = 0.4;
            this.addState((new WallFocusState("wallFocus")), true);
            this.pminus1 = [x, y];
            this.pminus2 = [moduleminus58c4bce870.plus(1, x), moduleminus58c4bce870.plus(1, y)];
            this.setState("wallFocus");
            return this.bodyCircle(this.position.x, this.position.y, 10, dynamicalCharacter);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26000))))            {
            return G26000;
            };
          G26000 = (function (arguments)            {
            var matchValminus26004 = G26001;
            var anythingElseminus25999 = matchValminus26004;
            throw ((("Match fail in ball-create against: ")+anythingElseminus25999));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26000))))            {
            return G26000;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: name x y] (recur name x y gamvas\.physics\.DYNAMIC)) ([: name x y dynamical-character] (this\._super name x y) (set! this\.restitution 0.4) (this\.add-state (new Wall-Focus-State (quote wall-focus)) true) (set! this\.p-1 [: x y]) (set! this\.p-2 [: (+ 1 x) (+ 1 y)]) (this\.set-state (quote wall-focus)) (this\.body-circle this\.position\.x this\.position\.y 10 dynamical-character)) (anything-else-25999 (_throw (_+ ''Match fail in ball-create against: '' anything-else-25999))))) for value ")+(JSON.stringify(G26001))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus25994 = actualFunminus25996.apply(this, arguments);
      while (recurP25997(returnValueminus25994))        {
        returnValueminus25994 = actualFunminus25996.apply(this, returnValueminus25994.args);
        };
      return returnValueminus25994;
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
        var G26037 = undefined;
        var G26038 = [this.position.x, this.position.y, this.pminus1, this.pminus2];
        G26037 = (function (arguments)          {
          var matchValminus26039 = G26038;
          if ((!((4===matchValminus26039.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var matchTempminus26040 = matchValminus26039[0];
          var matchTempminus26041 = matchValminus26039[1];
          var matchTempminus26042 = matchValminus26039[2];
          var matchTempminus26043 = matchValminus26039[3];
          var x = matchTempminus26040;
          var y = matchTempminus26041;
          if ((!((2===matchTempminus26042.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var xminus1 = matchTempminus26042[0];
          var yminus1 = matchTempminus26042[1];
          if ((!((2===matchTempminus26043.length))))            {
            return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
            };
          var xminus2 = matchTempminus26043[0];
          var yminus2 = matchTempminus26043[1];
          return ((moduleminus58c4bce870.TripleEqualminus(x, xminus1))&&(((moduleminus58c4bce870.TripleEqualminus(xminus1, xminus2))&&(((moduleminus58c4bce870.TripleEqualminus(y, yminus1))&&(moduleminus58c4bce870.TripleEqualminus(yminus1, yminus2)))))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26037))))          {
          return G26037;
          };
        G26037 = (function (arguments)          {
          var matchValminus26064 = G26038;
          var G26036 = matchValminus26064;
          throw ((("Match error in ")+("(let ((x this\.position\.x) (y this\.position\.y) ([: x-1 y-1] this\.p-1) ([: x-2 y-2] this\.p-2)) (&& (=== x x-1) (=== x-1 x-2) (=== y y-1) (=== y-1 y-2)))")));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G26037))))          {
          return G26037;
          };
        throw ((("match-fail at ((match [: this\.position\.x this\.position\.y this\.p-1 this\.p-2] ([: x y [: x-1 y-1] [: x-2 y-2]] (&& (=== x x-1) (=== x-1 x-2) (=== y y-1) (=== y-1 y-2))) (G26036 (_throw (_+ ''Match error in '' ''(let ((x this\\.position\\.x) (y this\\.position\\.y) ([: x-1 y-1] this\\.p-1) ([: x-2 y-2] this\\.p-2)) (&& (=== x x-1) (=== x-1 x-2) (=== y y-1) (=== y-1 y-2)))''))))) for value ")+(JSON.stringify(G26038))));
        }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
      });
    currentModuleminus25990.Ball = gamvas.Actor.extend({      
      create:ballCreate,
      draw:ballDraw,
      stationaryPredicate:stationaryPredicate
    });
    }))();
  return currentModuleminus25990;
  }))