define(["hooves/operator-functions", "hooves/lisp-idioms", "gamvas/gamvas-module"], (function (moduleminus58c4bce870, moduleminus295baa4e1e, gamvas)  {
  var currentModuleminus58453 = {    
    
  };
  var setModuleObject = (function (value)    {
    currentModuleminus58453 = value;
    });
  ((function ()    {
    var defineplus = "macro - no dynamic value.";
    var defineMacroplus = "macro - no dynamic value.";
    // ("hooves/operator-functions" :all)
    ;
    // ("hooves/lisp-idioms" :all)
    ;
    // ((js "gamvas/gamvas-module" gamvas))
    ;
    currentModuleminus58453.modsignTripleEqualminus0 = (function (n, m)      {
      return moduleminus58c4bce870.TripleEqualminus(0, moduleminus58c4bce870.modsign(n, m));
      });
    currentModuleminus58453.moveTowards = (function ()      {
      var returnValueminus58501 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus58500",
          args:arguments
        };
        });
      var recurP58504 = (function (valminus58505)        {
        if ((("undefined")===((typeof valminus58505))))          {
          return false;
          };
        return (valminus58505.recurSigil===("recurSigilminus58500"));
        });
      var actualFunminus58503 = (function ()        {
        return (function (arguments)          {
          var G58507 = undefined;
          var G58508 = Array.prototype.slice.apply(arguments);
          G58507 = (function (arguments)            {
            var matchValminus58509 = G58508;
            if ((!((3===matchValminus58509.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var matchTempminus58510 = matchValminus58509[0];
            var matchTempminus58511 = matchValminus58509[1];
            var matchTempminus58512 = matchValminus58509[2];
            var camera = matchTempminus58510;
            if ((("undefined")===((typeof matchTempminus58510))))              {
              matchTempminus58510 = {                
                
              };
              };
            var matchObjectTempminus58513 = matchTempminus58510.position;
            var cx = matchObjectTempminus58513.x;
            if ((("undefined")===((typeof cx))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var cy = matchObjectTempminus58513.y;
            if ((("undefined")===((typeof cy))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var x = matchTempminus58511.x;
            if ((("undefined")===((typeof x))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var y = matchTempminus58511.y;
            if ((("undefined")===((typeof y))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var time = matchTempminus58512;
            var d = (new gamvas.Vector2D(moduleminus58c4bce870.minus(x, cx), moduleminus58c4bce870.minus(y, cy)));
            var len = d.length();
            var dir = d.normalized();
            var move = (new gamvas.Vector2D(moduleminus58c4bce870.times(time, dir.x, Math.pow(moduleminus58c4bce870.times(0.1, len), 4)), moduleminus58c4bce870.times(time, dir.y, Math.pow(moduleminus58c4bce870.times(0.1, len), 4))));
            return camera.move(move.x, move.y);
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G58507))))            {
            return G58507;
            };
          G58507 = (function (arguments)            {
            var matchValminus58514 = G58508;
            var anythingElseminus58506 = matchValminus58514;
            throw ((("Match fail in rosy/utils-move-towards against: ")+anythingElseminus58506));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G58507))))            {
            return G58507;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: (and camera ({}- position ({} x cx y cy))) ({} x x y y) time] (var d (new gamvas\.Vector2D (- x cx) (- y cy))) (var len (d\.length)) (var dir (d\.normalized)) (var move (new gamvas\.Vector2D (* time dir\.x (Math\.pow (* 0.1 len) 4)) (* time dir\.y (Math\.pow (* 0.1 len) 4)))) (camera\.move move\.x move\.y)) (anything-else-58506 (_throw (_+ ''Match fail in rosy/utils-move-towards against: '' anything-else-58506))))) for value ")+(JSON.stringify(G58508))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus58501 = actualFunminus58503.apply(this, arguments);
      while (recurP58504(returnValueminus58501))        {
        returnValueminus58501 = actualFunminus58503.apply(this, returnValueminus58501.args);
        };
      return returnValueminus58501;
      });
    currentModuleminus58453.random = (function ()      {
      var returnValueminus58545 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus58544",
          args:arguments
        };
        });
      var recurP58548 = (function (valminus58549)        {
        if ((("undefined")===((typeof valminus58549))))          {
          return false;
          };
        return (valminus58549.recurSigil===("recurSigilminus58544"));
        });
      var actualFunminus58547 = (function ()        {
        return (function (arguments)          {
          var G58551 = undefined;
          var G58552 = Array.prototype.slice.apply(arguments);
          G58551 = (function (arguments)            {
            var matchValminus58553 = G58552;
            if ((!((1===matchValminus58553.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus58553[0];
            return moduleminus58c4bce870.times(magnitude, Math.random());
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G58551))))            {
            return G58551;
            };
          G58551 = (function (arguments)            {
            var matchValminus58554 = G58552;
            if ((!((2===matchValminus58554.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus58554[0];
            var offset = matchValminus58554[1];
            return moduleminus58c4bce870.plus(offset, moduleminus58c4bce870.times(magnitude, Math.random()));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G58551))))            {
            return G58551;
            };
          G58551 = (function (arguments)            {
            var matchValminus58555 = G58552;
            var anythingElseminus58550 = matchValminus58555;
            throw ((("Match fail in rosy/utils-random against: ")+anythingElseminus58550));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G58551))))            {
            return G58551;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: magnitude] (* magnitude (Math\.random))) ([: magnitude offset] (+ offset (* magnitude (Math\.random)))) (anything-else-58550 (_throw (_+ ''Match fail in rosy/utils-random against: '' anything-else-58550))))) for value ")+(JSON.stringify(G58552))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus58545 = actualFunminus58547.apply(this, arguments);
      while (recurP58548(returnValueminus58545))        {
        returnValueminus58545 = actualFunminus58547.apply(this, returnValueminus58545.args);
        };
      return returnValueminus58545;
      });
    currentModuleminus58453.randomInt = (function ()      {
      var returnValueminus58586 = undefined;
      var recur = (function ()        {
        return {          
          recurSigil:"recurSigilminus58585",
          args:arguments
        };
        });
      var recurP58589 = (function (valminus58590)        {
        if ((("undefined")===((typeof valminus58590))))          {
          return false;
          };
        return (valminus58590.recurSigil===("recurSigilminus58585"));
        });
      var actualFunminus58588 = (function ()        {
        return (function (arguments)          {
          var G58592 = undefined;
          var G58593 = Array.prototype.slice.apply(arguments);
          G58592 = (function (arguments)            {
            var matchValminus58594 = G58593;
            if ((!((1===matchValminus58594.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus58594[0];
            return Math.round(moduleminus58c4bce870.times(magnitude, Math.random()));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G58592))))            {
            return G58592;
            };
          G58592 = (function (arguments)            {
            var matchValminus58595 = G58593;
            if ((!((2===matchValminus58595.length))))              {
              return "match-fail-e1aa3b7e7ce9731266013c178de842b5";
              };
            var magnitude = matchValminus58595[0];
            var offset = matchValminus58595[1];
            return Math.round(moduleminus58c4bce870.plus(offset, moduleminus58c4bce870.times(magnitude, Math.random())));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G58592))))            {
            return G58592;
            };
          G58592 = (function (arguments)            {
            var matchValminus58596 = G58593;
            var anythingElseminus58591 = matchValminus58596;
            throw ((("Match fail in rosy/utils-random-int against: ")+anythingElseminus58591));
            }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
          if ((!((("match-fail-e1aa3b7e7ce9731266013c178de842b5")===G58592))))            {
            return G58592;
            };
          throw ((("match-fail at ((match (\.\. Array prototype slice (apply arguments)) ([: magnitude] (Math\.round (* magnitude (Math\.random)))) ([: magnitude offset] (Math\.round (+ offset (* magnitude (Math\.random))))) (anything-else-58591 (_throw (_+ ''Match fail in rosy/utils-random-int against: '' anything-else-58591))))) for value ")+(JSON.stringify(G58593))));
          }).call(this, (((((typeof arguments))===("undefined")))?(undefined) : (arguments)));
        });
      returnValueminus58586 = actualFunminus58588.apply(this, arguments);
      while (recurP58589(returnValueminus58586))        {
        returnValueminus58586 = actualFunminus58588.apply(this, returnValueminus58586.args);
        };
      return returnValueminus58586;
      });
    }))();
  return currentModuleminus58453;
  }))